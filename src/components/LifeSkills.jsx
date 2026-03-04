import React, { useState, useRef, useEffect } from "react";
import { lifeSkills } from "../data";
import Skills from "./Skills";

const LifeSkills = () => {
    // track which card is hovered by index
    const [hoveredIndex, setHoveredIndex] = useState(null);
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
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section
            id="lifeSkills"
            className={`py-24 px-6 section-animate relative ${isVisible ? 'visible' : ''}`}
            ref={sectionRef}
        >
            <div className="section-bg">
                <div className="geometric-pattern"></div>
                <div className="floating-orb orb-1"></div>
                <div className="floating-orb orb-3"></div>
            </div>

            <h2 className="text-center text-5xl font-bold">Life Skills</h2>


            <div className="min-h-screen flex items-center justify-center p-8 gap-10">
                {lifeSkills.map((skills, index) => (

                    <div key={index}
                        className={`w-96 bg-[#182850] rounded-2xl overflow-hidden border border-zinc-800 transition-all duration-500 cursor-pointer ${hoveredIndex === index ? "shadow-2xl shadow-blue-500 -translate-y-2 border-amber-500/30" : ""}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >

                        {/* Image Placeholder */}
                        <div className="relative w-full h-56 bg-zinc-800 flex flex-col items-center justify-center gap-3 border-b border-zinc-700/50 overflow-hidden">
                            <div
                                className="absolute inset-0 opacity-20"

                            />
                            <img src={skills.image} alt={skills.name} className="w-full h-full object-cover" />



                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-4">
                            {/* Category */}
                            <p className="text-amber-500 text-xs font-mono tracking-widest uppercase">
                                {skills.id}
                            </p>

                            {/* Title */}
                            <h2 className="text-white text-2xl font-bold leading-tight tracking-tight">
                                {skills.name}
                            </h2>

                            {/* Description */}
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                {skills.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 pt-1">

                                <span className="bg-zinc-800 text-zinc-300 text-xs px-3 py-1 rounded-lg border border-zinc-700 font-mono">
                                    {skills.Skill}
                                </span>

                            </div>


                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LifeSkills;