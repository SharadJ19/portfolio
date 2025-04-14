import React, { useRef, useState, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from './ThemeContext';
import { FaPaperPlane, FaCheck, FaExclamationTriangle } from 'react-icons/fa';

export const ContactForm = () => {
    const form = useRef();
    const { isDarkMode } = useContext(ThemeContext);
    const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs
            .sendForm(
                'service_g25t2ba', // EmailJS Service ID
                'template_44wc7jp', // EmailJS Template ID
                form.current,
                '-bpgD5vorg5vcVoSY' // EmailJS Public Key
            )
            .then(
                () => {
                    setStatus('success');
                    form.current.reset();
                    setTimeout(() => setStatus('idle'), 3000);
                },
                () => {
                    setStatus('error');
                    setTimeout(() => setStatus('idle'), 3000);
                }
            );
    };

    return (
        <div
            className="p-8 rounded-2xl max-w-lg mx-auto"
            style={{
                backgroundColor: 'var(--card)',
                boxShadow: 'var(--shadow)',
                border: '1px solid var(--border)'
            }}
        >
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--primary)' }}>
                Get in Touch
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                    <label
                        htmlFor="name"
                        className="block mb-2 font-medium"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="user_name"
                        required
                        className="w-full px-4 py-2 rounded-lg border"
                        style={{
                            backgroundColor: 'var(--background-secondary)',
                            borderColor: 'var(--border)',
                            color: 'var(--text)'
                        }}
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="block mb-2 font-medium"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="user_email"
                        required
                        className="w-full px-4 py-2 rounded-lg border"
                        style={{
                            backgroundColor: 'var(--background-secondary)',
                            borderColor: 'var(--border)',
                            color: 'var(--text)'
                        }}
                    />
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="block mb-2 font-medium"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        className="w-full px-4 py-2 rounded-lg border"
                        style={{
                            backgroundColor: 'var(--background-secondary)',
                            borderColor: 'var(--border)',
                            color: 'var(--text)'
                        }}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-transform hover:scale-105 disabled:opacity-70"
                    style={{
                        background: 'var(--gradient)',
                        color: '#ffffff',
                        width: '100%'
                    }}
                >
                    {status === 'sending' ? (
                        'Sending...'
                    ) : status === 'success' ? (
                        <>
                            <FaCheck /> Sent!
                        </>
                    ) : status === 'error' ? (
                        <>
                            <FaExclamationTriangle /> Failed
                        </>
                    ) : (
                        <>
                            <FaPaperPlane /> Send Message
                        </>
                    )}
                </button>

                {status === 'success' && (
                    <p className="text-center mt-2" style={{ color: 'var(--success)' }}>
                        Thanks! I'll get back to you soon.
                    </p>
                )}
                {status === 'error' && (
                    <p className="text-center mt-2" style={{ color: 'var(--error)' }}>
                        Oops! Please try again or email me directly.
                    </p>
                )}
            </form>
        </div>
    );
};