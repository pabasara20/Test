import React from 'react';
// Import Project Images
import W1 from '../Assets/W1.png';
import W2 from '../Assets/W2.png';
import W3 from '../Assets/W3.png';
import W4 from '../Assets/W4.png';

// ✅ Import PNG Icons
import GithubIconPng from '../Assets/Github.png';
import LinkedinIconPng from '../Assets/Linkedin.png';
import FigmaIconPng from '../Assets/Figma.png';
import BehanceIconPng from '../Assets/Behance.png';

// --- (Tech Stack Color Mapping Function) ---
const getTechColor = (techName) => {
    const lowerCaseName = techName.toLowerCase();

    // Map common tech names to Tailwind CSS color classes
    if (lowerCaseName.includes('react')) return 'text-sky-500'; 
    if (lowerCaseName.includes('node')) return 'text-green-600'; 
    if (lowerCaseName.includes('express')) return 'text-orange-700'; 
    if (lowerCaseName.includes('figma') || lowerCaseName.includes('figjam')) return 'text-purple-600'; 
    if (lowerCaseName.includes('dart') || lowerCaseName.includes('flutter')) return 'text-blue-500';
    if (lowerCaseName.includes('javascript')) return 'text-yellow-500';
    if (lowerCaseName.includes('mongo')) return 'text-green-500';
    if (lowerCaseName.includes('postgre')) return 'text-blue-700'; 
    if (lowerCaseName.includes('socket.io')) return 'text-blue-500'; 
    if (lowerCaseName.includes('docker')) return 'text-sky-600'; 
    if (lowerCaseName.includes('aws')) return 'text-orange-500'; 
    if (lowerCaseName.includes('adobe xd')) return 'text-pink-600';
    if (lowerCaseName.includes('ios') || lowerCaseName.includes('android')) return 'text-lime-600';
    
    // NEW TECH STACKS 
    if (lowerCaseName.includes('php')) return 'text-indigo-600'; 
    if (lowerCaseName.includes('laravel')) return 'text-red-700'; 
    if (lowerCaseName.includes('mysql')) return 'text-blue-900'; 
    if (lowerCaseName.includes('tailwindcss')) return 'text-cyan-500';
    if (lowerCaseName.includes('supabase')) return 'text-green-400';
    if (lowerCaseName.includes('flask')) return 'text-red-900';
    if (lowerCaseName.includes('html')) return 'text-red-600';
    if (lowerCaseName.includes('css')) return 'text-blue-900';
    if (lowerCaseName.includes('scikit-learn')) return 'text-orange-600';
    if (lowerCaseName.includes('arduino') || lowerCaseName.includes('esp32')) return 'text-teal-500';
    
    // Default color for unmatched technologies
    return 'text-gray-500'; 
};
// --- (End: Tech Stack Color Mapping Function) ---

export default function Works() {

    const archiveProjects = [
        {
            id: 101,
            title: "FixPoint - A Smart Mobile Ticketing Platform for Domino's Sri Lanka Maintenance Operations",
            role: ["UI/UX Designer", "Full Stack Developer"],
            techUsed: ["Flutter", "Dart", "JavaScript", "Express.js", "Socket.IO", "Docker", "PostgreSQL"],
            subtitle: "Mobile ticket management system with role-based interfaces, real-time tracking, automated logs, and seamless branch communication.",
            image: W1,
            links: {
                github: "https://github.com/fixpoint-tech",
                linkedin: "https://www.linkedin.com/in/kavindalj/", 
                figma: "https://www.figma.com/design/QFGGxzzJ8PwhpvF7MuzfNE/FixPoint---Smart-Mobile-Ticketing-Platform-for-Domino%E2%80%99s-Sri-Lanka-Maintenance-Operations?node-id=0-1&t=M4UWTA9Dthk5PwAg-1"
            }
        },
        {
            id: 102,
            title: "CircadiaLux - Smart Hospital Lighting System for Circadian-Based Patient Recovery",
            role: ["UI/UX Designer & Front-End Developer"],
            techUsed: ["React", "TailwindCSS", "Supabase", "Flask", "scikit-learn", "Arduino", "ESP32"],
            subtitle: "React dashboard integrated with IoT sensors and ML models to optimize patient room lighting.",
            image: W2,
            links: {
                github: "https://github.com/kavindalj/CircadiaLux",
                linkedin: "https://www.linkedin.com/in/kavindalj/", 
            }
        },
        {
            id: 103,
            title: "University Maintenance Management Web App",
            role: ["Full Stack Developer"],
            techUsed: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript"], 
            subtitle: "Web app to report, track, and manage university maintenance issues efficiently.",
            image: W3,
            links: {
                github: "https://github.com/KavinduAluthwaththa/ReportEase",
                linkedin: "https://www.linkedin.com/in/kavindalj/", 
            }
        },
        {
            id: 104,
            title: "Budgetly – User-Centered Expense Tracking App",
            role: ["UI/UX Designer & Research Contributor"], 
            techUsed: ["Figma", "FigJam"], 
            subtitle: "Researched financial challenges and designed an app to improve financial awareness.",
            image: W4,
            links: {
                figma: "https://www.figma.com/design/QFGGxzzJ8PwhpvF7MuzfNE/FixPoint---Smart-Mobile-Ticketing-Platform-for-Domino%E2%80%99s-Sri-Lanka-Maintenance-Operations?node-id=0-1&t=M4UWTA9Dthk5PwAg-1",
                behance: "https://www.behance.net/gallery/237866943/Budgetly-Smart-Expense-Tracker-Case-Study",
            }
        }
    ];

    // Helper function to check if a link is valid (not undefined, null, or a single '#')
    const isValidLink = (link) => link && link !== '#' && link.length > 1;

    // Tailwind classes for the icons are now applied to the container,
    // and the img tag uses the w-5 h-5 size.
    const iconBaseClasses = "w-7 h-7 flex items-center justify-center transition-colors duration-300";

    return (
        <section className="relative w-full py-16 md:py-24">
            <div className="max-w-5xl mx-auto px-6">

                {/* 🔹 Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-gray-800">
                        My Projects
                    </h2>
                </div>

                {/* 🔹 Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {archiveProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group cursor-pointer transition-transform duration-300 flex flex-col h-full"
                        >
                            {/* ✅ Project Image Section */}
                            <div className="mb-3 transition-transform duration-300 group-hover:scale-[1.02] flex-shrink-0">
                                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                                    <img
                                        src={project.image}
                                        alt={project.altText || project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="flex flex-col flex-grow">
                                
                                {/* 1. 🥇 Title & Subtitle (Description) */}
                                <h3 className="text-lg font-bold mb-1 text-gray-800 transition-colors duration-200 line-clamp-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-snug mb-3 line-clamp-2"> 
                                    {project.subtitle}
                                </p>

                                {/* --- Separator --- */}
                                <div className="border-t border-gray-200 pt-2 mb-2"></div>
                                
                                {/* 2. 🥈 Role (Styling matched to Tech Stack size) */}
                                <div className="text-xs font-normal leading-tight flex flex-wrap items-center mb-1">
                                    <span className="text-gray-400 font-normal mr-1">Role:</span>
                                    <span className="text-gray-600 font-medium">
                                        {project.role.join(" / ")}
                                    </span>
                                </div>
                                
                                {/* 3. 🥉 Tech Stack with Colors */}
                                <div className="text-xs font-normal leading-tight flex flex-wrap items-center mb-3">
                                    <span className="text-gray-400 font-normal mr-1">Stack:</span>
                                    {project.techUsed.map((tech, index) => (
                                        <React.Fragment key={tech}>
                                            <span className={getTechColor(tech) + " font-medium"}>
                                                {tech}
                                            </span>
                                            {/* Add a separator (comma) unless it's the last item */}
                                            {index < project.techUsed.length - 1 && (
                                                <span className="text-gray-500 mx-[0.2rem]">,</span>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                                
                                {/* 4. 🔗 Social Media Links */}
                                <div className="flex gap-3 mt-auto pt-3 border-t border-gray-200">
                                    
                                    {/* GitHub Button (Now using PNG) */}
                                    {isValidLink(project.links.github) && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={iconBaseClasses + " hover:opacity-75"}
                                            title="View on GitHub"
                                        >
                                            <img src={GithubIconPng} alt="GitHub Icon" className="w-5 h-5"/>
                                        </a>
                                    )}

                                    {/* Figma Button (Now using PNG) */}
                                    {isValidLink(project.links.figma) && (
                                        <a
                                            href={project.links.figma}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={iconBaseClasses + " hover:opacity-75"}
                                            title="View on Figma"
                                        >
                                            <img src={FigmaIconPng} alt="Figma Icon" className="w-5 h-5"/>
                                        </a>
                                    )}

                                    {/* LinkedIn Button (Now using PNG) */}
                                    {isValidLink(project.links.linkedin) && (
                                        <a
                                            href={project.links.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={iconBaseClasses + " hover:opacity-75"}
                                            title="View on LinkedIn"
                                        >
                                            <img src={LinkedinIconPng} alt="LinkedIn Icon" className="w-5 h-5"/>
                                        </a>
                                    )}
                                    
                                    {/* Behance Button (Now using PNG) */}
                                    {isValidLink(project.links.behance) && (
                                        <a
                                            href={project.links.behance}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={iconBaseClasses + " hover:opacity-75"}
                                            title="View on Behance"
                                        >
                                            <img src={BehanceIconPng} alt="Behance Icon" className="w-5 h-5"/>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}