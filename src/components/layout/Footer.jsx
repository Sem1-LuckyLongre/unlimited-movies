import React from 'react';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/">Home</a>
            </div>
            <div className="footer-socials">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className="footer-copyright">
                &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </div>
        </footer>
    );
};
