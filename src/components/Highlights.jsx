import React, { useEffect, useRef, useState } from 'react';
import { highlightsData } from '../data';

// Shared road geometry — used by the SVG road, the dashed lane line and the
// glowing marker that travels along the path. viewBox is 0 0 1280 500.
// The wave is kept in a tight middle band (peaks ~190, valleys ~290) so the
// cards have clear room above/below the road without covering it.
const ROAD_PATH =
    "M 0,240 C 60,290 110,290 160,290 C 280,290 372,190 492,190 C 612,190 705,290 825,290 C 945,290 1000,190 1120,190 C 1180,190 1240,240 1280,240";

// Milestones in chronological order so the road reads left → right as a journey.
const journey = [...highlightsData].reverse();

// Where each milestone sits on the road (matches the bends in ROAD_PATH).
// Valleys (y=290 → 58%) carry cards above; peaks (y=190 → 38%) carry cards below.
const stops = [
    { left: '12.5%', top: '58%', placement: 'above' },
    { left: '38.46%', top: '38%', placement: 'below' },
    { left: '64.42%', top: '58%', placement: 'above' },
    { left: '87.5%', top: '38%', placement: 'below' },
];

const Highlights = () => {
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
        <section id="highlights" className={`py-24 px-6 section-animate relative ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
            <div className="section-bg opacity-40">
                <div className="geometric-pattern"></div>
            </div>
            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className={`text-center mb-12 stagger-item ${isVisible ? 'visible' : ''}`}>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        <span className="gradient-text">My Journey</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Travel the road through the milestones that shaped me</p>
                </div>

                {/* Desktop: winding horizontal road */}
                <div className="journey-scroll journey-desktop">
                    <div className={`journey-track ${isVisible ? 'drawn' : ''}`}>
                        <svg className="journey-svg" viewBox="0 0 1280 500" preserveAspectRatio="none" aria-hidden="true">
                            <defs>
                                <linearGradient id="roadGrad" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="#00d9ff" />
                                    <stop offset="50%" stopColor="#a855f7" />
                                    <stop offset="100%" stopColor="#00ffaa" />
                                </linearGradient>
                            </defs>
                            <path className="road-asphalt" d={ROAD_PATH} />
                            <path className="road-progress" d={ROAD_PATH} pathLength="1" />
                            <path className="road-dash" d={ROAD_PATH} />
                        </svg>

                        <span className="journey-traveler" aria-hidden="true" />

                        {journey.map((item, index) => (
                            <JourneyStop
                                key={index}
                                item={item}
                                index={index}
                                stop={stops[index]}
                                isVisible={isVisible}
                            />
                        ))}
                    </div>
                </div>

                {/* Mobile / tablet: vertical timeline */}
                <div className="journey-mobile">
                    {journey.map((item, index) => (
                        <div
                            key={index}
                            className={`jm-item stagger-item ${isVisible ? 'visible' : ''}`}
                            style={{ animationDelay: `${index * 0.12}s`, '--accent': item.color }}
                        >
                            <span className="jm-marker">
                                <span className="jm-step">{index + 1}</span>
                                <span className="jm-icon" dangerouslySetInnerHTML={{ __html: item.icon }} />
                            </span>
                            <div className="jm-card">
                                {item.image && (
                                    <div className="jm-media">
                                        <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                                    </div>
                                )}
                                <div className="jm-body">
                                    <h3 className="jm-title">{item.title}</h3>
                                    <p className="jm-desc">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const JourneyStop = ({ item, index, stop, isVisible }) => {
    return (
        <div
            className={`journey-node journey-node--${stop.placement} stagger-item ${isVisible ? 'visible' : ''}`}
            style={{ left: stop.left, top: stop.top, animationDelay: `${index * 0.18}s`, '--accent': item.color }}
        >
            <span className="journey-marker">
                <span className="journey-step">{index + 1}</span>
                <span className="journey-marker-icon" dangerouslySetInnerHTML={{ __html: item.icon }} />
            </span>

            <div className="journey-card-h">
                {item.image && (
                    <div className="journey-card-media">
                        <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                    </div>
                )}
                <div className="journey-card-body">
                    <h3 className="text-sm font-bold mb-1 text-white">{item.title}</h3>
                    <p className="text-gray-300 text-xs leading-relaxed">{item.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Highlights;
