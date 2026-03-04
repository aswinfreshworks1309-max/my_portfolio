import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <footer className="py-8 px-6 border-t border-gray-800">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-gray-500">
                    © {date} <span className="gradient-text">Aswin</span>. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
