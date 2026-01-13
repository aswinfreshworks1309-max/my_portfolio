import React, { useState, useRef, useEffect } from 'react';
import { defaultConfig } from '../data';
import profile from '../assets/profile.jpg';
const About = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
    }, []);

    return (
        <section id="about" className={`py-24 px-6 section-animate relative ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
            <div className="section-bg">
                <div className="geometric-pattern"></div>
                <div className="floating-orb orb-1"></div>
                <div className="floating-orb orb-2"></div>
            </div>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="text-indigo-400 font-medium">GET TO KNOW ME</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>About Me</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center">
                        <div className="about-image-container hoverable shadow-2xl">
                            <img
                                src={profile}
                                alt="Aswin"
                                className="about-image"
                            />
                            <div className="image-border-glow"></div>
                        </div>
                    </div>
                    <div>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">{defaultConfig.about_text}</p>
                   
                        <div className="grid grid-cols-2 gap-4">
                            <div className="tech-card hoverable">
                                <div className="text-3xl font-bold gradient-text">3+</div>
                                <div className="text-gray-400 text-sm">Years Experience</div>
                            </div>
                            <div className="tech-card hoverable">
                                <div className="text-3xl font-bold gradient-text">20+</div>
                                <div className="text-gray-400 text-sm">Projects Completed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-divider"></div>
        </section>
    );
};

export default About;
