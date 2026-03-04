import React, { useEffect, useRef, useState } from 'react';
import { highlightsData, defaultConfig } from '../data';

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
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className={`stagger-item ${isVisible ? 'visible' : ''}`}>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>

                            <span className="gradient-text">Get to know About Me</span>
                        </h2>
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-xl">
                            {defaultConfig.highlights_text.split('\n\n').map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {highlightsData.map((item, index) => (
                            <HighlightCard key={index} item={item} index={index} isVisible={isVisible} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const HighlightCard = ({ item, index, isVisible }) => {
    return (
        <div
            className={`highlight-card group aspect-square p-0 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-500 stagger-item overflow-hidden relative flex flex-col ${isVisible ? 'visible' : ''}`}
            style={{ animationDelay: `${(index + 2) * 0.15}s` }}
        >
            {item.image && (
                <div className="absolute inset-x-0 top-0 h-2/5 group-hover:h-full transition-all duration-700 ease-in-out z-0 overflow-hidden">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                </div>
            )}
            <div className="relative z-10 p-6 mt-auto flex flex-col justify-end">
                <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                        style={{ backgroundColor: `${item.color}40`, color: item.color, backdropFilter: 'blur(8px)' }}
                        dangerouslySetInnerHTML={{ __html: item.icon }}
                    />
                    <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-300 text-xs leading-relaxed line-clamp-3 group-hover:text-white transition-colors duration-500">{item.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Highlights;
