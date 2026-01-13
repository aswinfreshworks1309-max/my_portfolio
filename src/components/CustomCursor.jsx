import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorReactRef = useRef(null);
    const cursorRingRef = useRef(null);

    useEffect(() => {
        const cursorReact = cursorReactRef.current;
        const cursorRing = cursorRingRef.current;
        let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0, ringX = 0, ringY = 0;
        let lastX = 0, lastY = 0, particleCounter = 0, animationFrameId;

        const createParticle = (x, y) => {
            const p = document.createElement('div');
            p.className = 'cursor-particle';
            p.style.left = x - 6 + 'px'; p.style.top = y - 6 + 'px';
            p.innerHTML = `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" fill="#61DAFB"/></svg>`;
            document.body.appendChild(p);
            setTimeout(() => p.remove(), 1000);
        };

        const animate = () => {
            cursorX += (mouseX - cursorX) * 0.2; cursorY += (mouseY - cursorY) * 0.2;
            if (cursorReact) { cursorReact.style.left = cursorX - 17.5 + 'px'; cursorReact.style.top = cursorY - 17.5 + 'px'; }
            ringX += (mouseX - ringX) * 0.12; ringY += (mouseY - ringY) * 0.12;
            if (cursorRing) { cursorRing.style.left = ringX - 30 + 'px'; cursorRing.style.top = ringY - 30 + 'px'; }
            animationFrameId = requestAnimationFrame(animate);
        };

        const onMove = (e) => {
            mouseX = e.clientX; mouseY = e.clientY;
            particleCounter++;
            if (particleCounter % 6 === 0 && (Math.abs(mouseX - lastX) > 15 || Math.abs(mouseY - lastY) > 15)) {
                createParticle(mouseX, mouseY); lastX = mouseX; lastY = mouseY;
            }
            // Simple hover check
            const el = document.elementFromPoint(e.clientX, e.clientY);
            const isHover = el?.closest('.hoverable, button, a, .tech-card, .project-card, .skill-circle');
            if (isHover) { cursorReact?.classList.add('hover'); cursorRing?.classList.add('hover'); }
            else { cursorReact?.classList.remove('hover'); cursorRing?.classList.remove('hover'); }
        };

        document.addEventListener('mousemove', onMove);
        document.addEventListener('mousedown', () => cursorReact?.classList.add('click'));
        document.addEventListener('mouseup', () => cursorReact?.classList.remove('click'));
        animate();
        return () => {
            document.removeEventListener('mousemove', onMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <div className="cursor-react" id="cursorReact" ref={cursorReactRef}>
                <svg viewBox="0 0 24 24" fill="none" id="cursorSvg">
                    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
                    <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" />
                    <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
                    <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
                </svg>
            </div>
            <div className="cursor-ring" id="cursorRing" ref={cursorRingRef}></div>
        </>
    );
};

export default CustomCursor;
