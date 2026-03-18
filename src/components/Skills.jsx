import React, { useEffect, useRef, useState } from 'react';
import { techStack } from '../data';

const Skills = () => {
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
        <section id="skills" className={`py-24 px-6 section-animate relative ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
            <div className="section-bg">
                <div className="geometric-pattern"></div>
                <div className="floating-orb orb-3"></div>
                <div className="floating-orb orb-1"></div>
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="text-indigo-400 font-medium">WHAT I KNOW</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Skills & Technologies</h2>
                </div>
                <div>
                     
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
                        {techStack.map((tech, index) => (
                            <TechCard key={index} tech={tech} index={index} isVisible={isVisible} />
                        ))}
                    </div>
                </div> 
            </div>
            <div className="section-divider"></div>
        </section>
    );
};

const TechCard = ({ tech, index, isVisible }) => {
    return (
        <div className={`tech-card hoverable stagger-item ${isVisible ? 'visible' : ''}`} style={{ animationDelay: `${index * 0.05}s` }}>
            <div className="tech-icon" dangerouslySetInnerHTML={{ __html: tech.icon }} />
            <div className="font-semibold text-sm text-center">{tech.name}</div>
        </div>
    );
};

export default Skills;
