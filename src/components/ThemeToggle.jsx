import React from 'react';

const ThemeToggle = () => {
    const toggleTheme = () => {
        const wrapper = document.getElementById('portfolioWrapper');
        if (!wrapper) return;
        wrapper.classList.toggle('light-theme');
        const isLight = wrapper.classList.contains('light-theme');
        const sunIcon = document.querySelector('.sun-icon');
        const moonIcon = document.querySelector('.moon-icon');
        if (sunIcon) sunIcon.classList.toggle('hidden', isLight);
        if (moonIcon) moonIcon.classList.toggle('hidden', !isLight);
        const cursorSvg = document.getElementById('cursorSvg');
        if (cursorSvg) {
            const color = isLight ? '#3B82F6' : '#61DAFB';
            const circle = cursorSvg.querySelector('circle');
            const ellipses = cursorSvg.querySelectorAll('ellipse');
            if (circle) circle.setAttribute('fill', color);
            ellipses.forEach(e => e.setAttribute('stroke', color));
        }
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    };
    return (
        <button id="themeToggle" className="theme-toggle hoverable" aria-label="Toggle theme" onClick={toggleTheme}>
            <svg className="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
            <svg className="moon-icon hidden" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
        </button>
    );
};

export default ThemeToggle;
