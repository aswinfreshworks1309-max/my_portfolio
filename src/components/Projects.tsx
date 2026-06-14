import React, { useRef, useEffect, useState } from 'react';
import { projects } from '../data';

const pad = (n) => String(n).padStart(2, '0');

const Projects = () => {
    const sectionRef = useRef(null);
    const mediaRefs = useRef([]);
    const panelRefs = useRef([]);
    const fillRef = useRef(null);
    const prevActiveRef = useRef(0);
    const [active, setActive] = useState(0);
    const n = projects.length;

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const shift = reduce ? 0 : 1;
        let raf = 0;
        let current = -1;

        const render = () => {
            raf = 0;
            const rect = section.getBoundingClientRect();
            const total = section.offsetHeight - window.innerHeight;
            const scrolled = Math.min(Math.max(-rect.top, 0), total);
            const p = total > 0 ? scrolled / total : 0;
            // Continuous position across panels — the centre of segment i sits
            // exactly at pos === i, so everything animates as a function of scroll.
            const pos = Math.max(0, Math.min(n - 1, p * n - 0.5));

            for (let i = 0; i < n; i++) {
                const d = pos - i; // signed distance from this panel's centre
                const ad = Math.abs(d);
                // Plateau + crossfade: fully visible while |d| < 0.3, fades out by 0.7.
                const opacity = Math.max(0, Math.min(1, (0.7 - ad) / 0.4));

                // Content stays smoothly scroll-linked. (Images use the flicker
                // effect handled in the active-change effect below.)
                const panel = panelRefs.current[i];
                if (panel) {
                    panel.style.opacity = opacity;
                    panel.style.transform = `translateY(${d * 46 * shift}px)`;
                    panel.style.pointerEvents = ad < 0.5 ? 'auto' : 'none';
                    panel.style.zIndex = ad < 0.5 ? 2 : 1;
                }
            }

            if (fillRef.current) {
                fillRef.current.style.height = `${(n > 1 ? pos / (n - 1) : 0) * 100}%`;
            }

            const act = Math.round(pos);
            if (act !== current) {
                current = act;
                setActive(act);
            }
        };

        const onScroll = () => {
            if (!raf) raf = requestAnimationFrame(render);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        render();
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, [n]);

    // When the active project changes, replay the flip animation on the new
    // image so it rotates in over the previous one (which sits just beneath).
    useEffect(() => {
        const el = mediaRefs.current[active];
        if (el) {
            el.classList.remove('flip');
            void el.offsetWidth; // force reflow to restart the animation
            el.classList.add('flip');
        }
        prevActiveRef.current = active;
    }, [active]);

    const jumpTo = (i) => {
        const section = sectionRef.current;
        if (!section) return;
        const total = section.offsetHeight - window.innerHeight;
        const target = section.offsetTop + total * ((i + 0.5) / n);
        window.scrollTo({ top: target, behavior: 'smooth' });
    };

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="proj-scroll"
            style={{ height: `${n * 100}vh` }}
        >
            <div className="proj-pin">
                <div className="section-bg">
                    <div className="geometric-pattern"></div>
                    <div className="floating-orb orb-2"></div>
                    <div className="floating-orb orb-3"></div>
                </div>

                <div className="proj-head">
                    <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        <span className="gradient-text">My Projects</span>
                    </h2>
                    <p className="proj-counter">
                        <span className="proj-counter-now">{pad(active + 1)}</span>
                        <span className="proj-counter-sep">/</span>
                        <span className="proj-counter-total">{pad(n)}</span>
                    </p>
                </div>

                {/* Clickable progress rail */}
                <div className="proj-progress">
                    <span className="proj-progress-track" />
                    <span className="proj-progress-fill" ref={fillRef} />
                    {projects.map((p, i) => (
                        <button
                            key={p.id}
                            type="button"
                            className={`proj-dot ${i === active ? 'is-active' : ''} ${i < active ? 'is-done' : ''}`}
                            onClick={() => jumpTo(i)}
                            aria-label={`Go to ${p.title}`}
                        >
                            <span>{pad(i + 1)}</span>
                        </button>
                    ))}
                </div>

                <div className="proj-stage">
                    {/* Image side (left) */}
                    <div className="proj-media">
                        <div className="proj-frame">
                            {projects.map((p, i) => (
                                <div
                                    key={p.id}
                                    className="proj-img"
                                    ref={(el) => { mediaRefs.current[i] = el; }}
                                    style={{ zIndex: i === active ? 3 : i === prevActiveRef.current ? 2 : 1 }}
                                >
                                    {p.image && <img src={p.image} alt={`${p.title} project screenshot`} loading="lazy" decoding="async" />}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Content side (right) */}
                    <div className="proj-content">
                        {projects.map((p, i) => (
                            <div
                                key={p.id}
                                className={`proj-panel ${i === active ? 'is-active' : ''}`}
                                ref={(el) => { panelRefs.current[i] = el; }}
                            >
                                <p className="proj-label">Project {pad(i + 1)}</p>
                                <h3 className="proj-title">{p.title}</h3>
                                <p className="proj-desc">{p.description}</p>
                                <div className="proj-tags">
                                    {p.tags.map((tag, ti) => (
                                        <span key={ti} style={{ '--d': `${0.2 + ti * 0.07}s` } as React.CSSProperties}>{tag}</span>
                                    ))}
                                </div>
                                <div className="proj-actions">
                                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="github-btn flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hoverable border border-gray-700 hover:border-gray-600">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        <span className="font-medium">GitHub</span>
                                    </a>
                                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hoverable" style={{ background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)', color: 'white' }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                        <span className="font-medium">Live Demo</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
