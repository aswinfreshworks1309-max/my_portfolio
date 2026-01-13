import React, { useEffect, useRef, useState } from 'react';
import { englishSkills, techStack } from '../data';

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

    const getSkillConfig = (level) => {
        if (level >= 90) return { class: 'expert', label: 'Expert' };
        if (level >= 80) return { class: 'advanced', label: 'Advanced' };
        if (level >= 60) return { class: 'advanced', label: 'advanced' };
        return { class: 'intermediate', label: 'Intermediate' };
    };

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
                <div className="mb-20">
                    <h3 className="text-2xl font-bold mb-8 text-center">English Skill</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {englishSkills.map((skill, index) => {
                            const config = getSkillConfig(skill.level);
                            return (
                                <div key={index} className={`flex flex-col items-center stagger-item ${isVisible ? 'visible' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                                    <div className={`skill-circle ${config.class} ${isVisible ? 'visible' : ''}`} style={{ '--progress': 314 - (skill.level / 100) * 314 }}>
                                        <svg width="140" height="140" viewBox="0 0 140 140">
                                            <circle className="skill-circle-bg" cx="70" cy="70" r="50" />
                                            <circle className="skill-circle-progress" cx="70" cy="70" r="50" />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>{skill.level}%</span>
                                        </div>
                                        <div className={`skill-badge ${config.class}`}>{config.label}</div>
                                    </div>
                                    <p className="mt-6 font-semibold text-lg text-gray-300">{skill.name}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-12 text-center">Tech Skills</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
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
    const [hover, setHover] = useState(false);
    return (
        <div className={`tech-card hoverable stagger-item ${isVisible ? 'visible' : ''}`} style={{ animationDelay: `${index * 0.05}s` }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className="tech-icon" dangerouslySetInnerHTML={{ __html: tech.icon }} />
            <div className="font-semibold text-sm text-center mb-2">{tech.name}</div>
            <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
                <HoverBar level={tech.level} color={tech.color} isVisible={isVisible} isHovered={hover} />
            </div>
            <div className="text-xs text-gray-400 text-center mt-1">{tech.level}%</div>
        </div>
    );
};

const HoverBar = ({ level, color, isVisible, isHovered }) => {
    const [width, setWidth] = useState('0%');
    const [transition, setTransition] = useState('width 1.5s ease');
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => setWidth(`${level}%`), 100);
            return () => clearTimeout(timer);
        }
    }, [isVisible, level]);
    useEffect(() => {
        if (isHovered) {
            setTransition('none'); setWidth('0%');
            const t1 = setTimeout(() => { setTransition('width 1s cubic-bezier(0.4, 0, 0.2, 1)'); setWidth(`${level}%`); }, 50);
            return () => clearTimeout(t1);
        }
    }, [isHovered, level]);
    return <div className="skill-bar h-full rounded-full" style={{ width: width, background: color, transition: transition }}></div>;
};

export default Skills;
