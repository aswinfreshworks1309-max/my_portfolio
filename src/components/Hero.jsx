import React, { useEffect, useRef } from "react";
import { defaultConfig, techStack, heroBackgroundIcons } from "../data";

const Hero = () => {
    const nameRef = useRef(null);

    useEffect(() => {
        if (nameRef.current) {
            const name = defaultConfig.hero_name;
            nameRef.current.innerHTML = "";

            name.split("").forEach((letter, index) => {
                const span = document.createElement("span");
                span.textContent = letter === " " ? "\u00A0" : letter;
                span.className = "letter-animate";
                span.style.animationDelay = `${0.5 + index * 0.05}s`;
                nameRef.current.appendChild(span);
            });
        }
    }, []);

    // Generate background particles from both techStack and heroBackgroundIcons
    const backgroundParticles = [...techStack, ...heroBackgroundIcons, ...techStack, ...heroBackgroundIcons].map((tech, index) => {
        // Improved distribution logic to "mingle" icons better
        // Use prime numbers and trigonometric functions for pseudo-randomness
        const seed = index + 1;
        const left = (Math.abs(Math.sin(seed * 0.98) * 100)) % 95;
        const top = (Math.abs(Math.cos(seed * 0.76) * 100)) % 90;
        const delay = (seed * 1.3) % 8;
        const duration = 20 + (seed % 15);
        const scale = 0.5 + (Math.abs(Math.sin(seed)) * 0.6);

        return (
            <div
                key={`${tech.name}-${index}`}
                className="particle tech-icon-particle"
                style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                    transform: `scale(${scale})`,
                    opacity: 0.12,
                    color: tech.color
                }}
                dangerouslySetInnerHTML={{ __html: tech.icon }}
            />
        );
    });

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
        >
            <div className="hero-bg">
                <svg
                    className="absolute inset-0 w-full h-full opacity-20"
                    style={{ mixBlendMode: "screen" }}
                >
                    <defs>
                        <pattern
                            id="grid"
                            width="50"
                            height="50"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M 50 0 L 0 0 0 50"
                                fill="none"
                                stroke="rgba(0, 217, 255, 0.3)"
                                strokeWidth="0.5"
                            />
                        </pattern>
                        <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop
                                offset="0%"
                                style={{ stopColor: "rgba(0, 217, 255, 0.4)", stopOpacity: 1 }}
                            />
                            <stop
                                offset="50%"
                                style={{ stopColor: "rgba(168, 85, 247, 0.4)", stopOpacity: 1 }}
                            />
                            <stop
                                offset="100%"
                                style={{ stopColor: "rgba(0, 217, 255, 0.4)", stopOpacity: 1 }}
                            />
                        </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    <circle cx="20%" cy="30%" r="150" fill="url(#gridGradient)" opacity="0.15">
                        <animate attributeName="r" values="150;180;150" dur="8s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="80%" cy="70%" r="120" fill="url(#gridGradient)" opacity="0.12">
                        <animate attributeName="r" values="120;150;120" dur="10s" repeatCount="indefinite" />
                    </circle>
                </svg>
            </div>

            <div className="hero-bg pointer-events-none">
                {backgroundParticles}
            </div>

            <div className="relative z-10 text-center max-w-5xl">
                <div className="mb-6">
                    <span
                        className="inline-block px-4 py-2 rounded-full text-sm font-medium"
                        style={{
                            background: "rgba(99, 102, 241, 0.2)",
                            border: "1px solid rgba(99, 102, 241, 0.3)",
                        }}
                    >
                        👋 Welcome to my portfolio
                    </span>
                </div>
                <h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    <span className="hero-name-text" ref={nameRef}></span>
                </h1>
                <div className="text-reveal mb-6">
                    <span className="text-2xl md:text-3xl gradient-text font-semibold">
                        {defaultConfig.hero_title}
                    </span>
                </div>
                <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                    {defaultConfig.hero_tagline}
                </p>
                <div className="flex flex-wrap gap-4 justify-center mb-16">
                    <a href="#projects" className="magnetic-btn hoverable">
                        <span>View My Work</span>
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 rounded-full border border-gray-600 hover:border-indigo-500 transition-all duration-300 hoverable"
                    >
                        Get In Touch
                    </a>
                </div>
                <div className="scroll-indicator">
                    <svg
                        width="30"
                        height="50"
                        viewBox="0 0 30 50"
                        fill="none"
                        className="mx-auto opacity-50"
                    >
                        <rect
                            x="1"
                            y="1"
                            width="28"
                            height="48"
                            rx="14"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                        <circle
                            cx="15"
                            cy="15"
                            r="5"
                            fill="currentColor"
                            className="animate-pulse"
                        />
                    </svg>
                    <p className="text-sm text-gray-500 mt-2">Scroll to explore</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
