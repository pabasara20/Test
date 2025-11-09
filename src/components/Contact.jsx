import React from 'react'
import profileImage from '../Assets/Me.jpeg'

export default function Contact() {
    return (
        <section className="relative w-full min-h-screen bg-white text-black py-20 md:py-24">
            <div className="max-w-4xl mx-auto mt-10 px-4">
                {/* Main Heading */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-[550] leading-tight">
                        Thanks for exploring my portfolio!
                    </h2>
                </div>

                {/* Chat Interface */}
                <div className="max-w-3xl mx-auto space-y-6">
                    {/* Question Message */}
                    <div className="flex justify-end">
                        <div className="bg-gray-200 text-black px-6 py-4 rounded-3xl rounded-tr-md max-w-lg">
                            <p className="text-lg md:text-xl font-[400]">
                                Hey, how can I get in touch with you?
                            </p>
                        </div>
                    </div>

                    {/* Response Message */}
                    <div className="flex items-start gap-4">
                        {/* Profile Image */}
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-green-400">
                                <img
                                    src={profileImage}
                                    alt="Pabasara Ranasinghe"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Message Bubble */}
                        <div className="bg-black text-white px-6 py-4 rounded-3xl rounded-tl-md max-w-2xl">
                            <p className="text-lg md:text-xl font-[400]">
                                Hey! You can email me at{' '}
                                <a
                                    href="mailto:pabasara@gmail.com"
                                    className="underline text-white hover:text-gray-300 transition-colors"
                                >
                                    paba20sara@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-24 pt-8 border-t border-gray-200">
                    {/* Copyright */}
                    <div className="mb-6 md:mb-0">
                        <p className="text-gray-600 font-[400]">© Copyright 2025</p>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex gap-4">
                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/20pabasara/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-gray-100 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group/btn"
                            title="View on LinkedIn"
                        >
                            <svg className="w-4 h-4 text-gray-700 group-hover/btn:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>

                        {/* Behance */}
                        <a
                            href="https://www.behance.net/pabasara20"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-gray-100 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 group/btn"
                            title="View on Behance"
                        >
                            <svg className="w-4 h-4 text-gray-700 group-hover/btn:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.125 1.074.329 1.49.61.416.281.743.651.98 1.108.237.457.356.997.356 1.619 0 .664-.126 1.249-.378 1.754-.252.506-.595.923-1.028 1.253.632.307 1.076.749 1.33 1.328.255.578.382 1.227.382 1.946 0 .662-.16 1.242-.48 1.74-.32.497-.769.923-1.346 1.279-.577.355-1.244.633-2.002.832-.758.2-1.566.299-2.424.299H0V4.503h6.938zM3.057 6.389v3.172h3.399c.458 0 .867-.086 1.229-.259.362-.173.543-.482.543-.927 0-.404-.2-.697-.599-.879-.4-.182-.856-.273-1.371-.273H3.057zm0 5.051v3.525h3.712c.533 0 .994-.098 1.383-.294.389-.196.583-.559.583-1.089 0-.324-.068-.587-.203-.789-.135-.201-.315-.353-.539-.456-.225-.103-.477-.169-.757-.198-.28-.029-.564-.043-.851-.043H3.057zm11.343-2.749c-.436-.311-.954-.467-1.554-.467-.388 0-.748.087-1.08.261-.332.174-.616.419-.852.735-.236.316-.416.693-.54 1.131-.124.438-.186.924-.186 1.458v.924c0 .464.062.909.186 1.336.124.427.318.799.582 1.116.264.317.6.569 1.008.756.408.187.884.281 1.428.281.816 0 1.492-.203 2.028-.608.536-.405.884-1.05 1.044-1.935h-1.692c-.12.329-.295.571-.525.726-.23.155-.5.233-.812.233-.528 0-.934-.138-1.218-.414-.284-.276-.426-.617-.426-1.023v-.065h4.808c.016-.329.016-.647 0-.956 0-.592-.08-1.131-.24-1.619-.16-.488-.394-.904-.702-1.248-.308-.344-.69-.612-1.146-.804-.456-.192-.974-.288-1.554-.288-.68 0-1.278.172-1.794.515zm2.794 1.722h-3.927c.016-.412.14-.747.372-1.005.232-.258.548-.387.948-.387.44 0 .783.129 1.028.387.245.258.383.593.415 1.005zm-2.48-8.136h5.265v1.317h-5.265V1.277z" />
                            </svg>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/+94712959389"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-gray-100 hover:bg-green-500 rounded-lg flex items-center justify-center transition-all duration-300 group/btn"
                            title="Chat on WhatsApp"
                        >
                            <svg className="w-4 h-4 text-gray-700 group-hover/btn:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                            </svg>
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/pabasara20"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-gray-100 hover:bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 group/btn"
                            title="View on GitHub"
                        >
                            <svg className="w-4 h-4 text-gray-700 group-hover/btn:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/20pabasara/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-gray-100 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-lg flex items-center justify-center transition-all duration-300 group/btn"
                            title="View on Instagram"
                        >
                            <svg className="w-4 h-4 text-gray-700 group-hover/btn:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}