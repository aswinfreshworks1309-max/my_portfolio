import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-opacity-80 transition-all duration-500 border-b border-white border-opacity-10" id="mainNav">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold gradient-text" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    &lt;Dev/&gt;
                </div>
                <div className="flex items-center gap-8">
                    <div className="hidden md:flex gap-8">
                        <a href="#hero" className="nav-link">Home</a>
                        <a href="#about" className="nav-link">About</a>
                        <a href="#skills" className="nav-link">Skills</a>
                        <a href="#projects" className="nav-link">Projects</a>
                        <a href="#contact" className="nav-link">Contact</a>
                    </div>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
