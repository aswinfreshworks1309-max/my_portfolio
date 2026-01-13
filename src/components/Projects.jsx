import React, { useRef, useEffect, useState } from 'react';
import { projects } from '../data';

const Projects = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
    }, []);

    return (
        <section id="projects" className={`py-24 px-6 section-animate relative ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
            <div className="section-bg">
                <div className="geometric-pattern"></div>
                <div className="floating-orb orb-2"></div>
                <div className="floating-orb orb-3"></div>
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="text-indigo-400 font-medium">MY WORK</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Featured Projects</h2>
                </div>
                <div id="projectsGrid">
                    {projects.map((project, index) => {
                        const isReverse = index % 2 !== 0;
                        return (
                            <div key={project.id} className={`project-card ${isReverse ? 'reverse' : ''} stagger-item hoverable ${isVisible ? 'visible' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="project-image">
                                    {project.image && <img src={project.image} alt={project.title} className="w-full h-full object-cover" />}
                                </div>
                                <div className="p-8" style={{ direction: 'ltr' }}>
                                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                    <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="px-3 py-1 text-xs rounded-full" style={{ background: 'rgba(99, 102, 241, 0.2)', color: '#a5b4fc' }}>{tag}</span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hoverable border border-gray-700 hover:border-gray-600">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                            <span className="font-medium">GitHub</span>
                                        </a>
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hoverable" style={{ background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)', color: 'white' }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                            <span className="font-medium">Live Demo</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="section-divider"></div>
        </section>
    );
};

export default Projects;
