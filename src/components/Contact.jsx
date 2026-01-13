import React, { useEffect, useRef, useState } from 'react';
import { defaultConfig } from '../data';

const Contact = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); }
        }, { threshold: 0.1 });
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className={`py-24 px-6 section-animate relative ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
            <div className="section-bg">
                <div className="geometric-pattern"></div>
                <div className="floating-orb orb-1"></div>
                <div className="floating-orb orb-2"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="text-indigo-400 font-medium tracking-widest uppercase text-sm">Get in Touch</span>
                    <h2 className="text-4xl md:text-6xl font-bold mt-4 gradient-text" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Let's Connect
                    </h2>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
                        Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities and creative ideas.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 text-left">
                            <div className="tech-card hoverable flex items-center gap-6 p-6">
                                <div className="contact-icon bg-indigo-500/20 p-4 rounded-2xl shadow-lg shadow-indigo-500/10">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-400">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Email Me</div>
                                    <div className="font-semibold text-lg overflow-hidden text-ellipsis">{defaultConfig.contact_email}</div>
                                </div>
                            </div>

                            <div className="tech-card hoverable flex items-center gap-6 p-6">
                                <div className="contact-icon bg-cyan-500/20 p-4 rounded-2xl shadow-lg shadow-cyan-500/10">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Call Me</div>
                                    <div className="font-semibold text-lg">{defaultConfig.contact_phone}</div>
                                </div>
                            </div>

                            <div className="tech-card hoverable flex items-center gap-6 p-6">
                                <div className="contact-icon bg-purple-500/20 p-4 rounded-2xl shadow-lg shadow-purple-500/10">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Visit Me</div>
                                    <div className="font-semibold text-lg">{defaultConfig.contact_location}</div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gray-800 text-left">
                            <h3 className="text-xl font-bold mb-6">Social Profiles</h3>
                            <div className="flex gap-4">
                                <a href={defaultConfig.github_url} target="_blank" rel="noopener noreferrer" className="contact-icon bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition-all hover:-translate-y-2 group shadow-xl">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 group-hover:text-white"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                </a>
                                <a href={defaultConfig.linkedin_url} target="_blank" rel="noopener noreferrer" className="contact-icon bg-gray-800 p-4 rounded-xl hover:bg-blue-600 transition-all hover:-translate-y-2 group shadow-xl">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 group-hover:text-white"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-[#1a1f3c]/50 backdrop-blur-xl p-8 rounded-3xl border border-gray-800 shadow-2xl relative text-left">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 ml-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter Your Name"
                                    className="w-full bg-[#0a0e27]/50 border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-colors placeholder:text-gray-600"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter Your E-mail"
                                    className="w-full bg-[#0a0e27]/50 border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-colors placeholder:text-gray-600"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 ml-1">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your message here..."
                                    rows="4"
                                    className="w-full bg-[#0a0e27]/50 border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-colors placeholder:text-gray-600 resize-none"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
