import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Works from './components/Works'
import VisualDelight from './components/VisualDelight'
import Experience from './components/Experience'
import Contact from './components/Contact'
import LoadingScreen from './components/LoadingScreen'

export default function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [currentSection, setCurrentSection] = useState('About me')

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    // Handle scroll spy to update active navigation using Intersection Observer
    useEffect(() => {
        const sections = [
            { id: 'about-me', name: 'About me' },
            { id: 'works', name: 'Works' },
            { id: 'visual-delight', name: 'Visual Delight' },
            { id: 'experience', name: 'Experience' },
            { id: 'contact', name: 'Contact' }
        ]

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', // Trigger when section is 20% from top
            threshold: 0
        }

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionInfo = sections.find(section => section.id === entry.target.id)
                    if (sectionInfo && sectionInfo.name !== currentSection) {
                        setCurrentSection(sectionInfo.name)
                    }
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)

        // Observe all sections
        sections.forEach(({ id }) => {
            const element = document.getElementById(id)
            if (element) {
                observer.observe(element)
            }
        })

        return () => {
            observer.disconnect()
        }
    }, [currentSection])

    return (
        <div className="min-h-screen bg-white text-black">
            {/* Loading Screen */}
            {isLoading && (
                <LoadingScreen
                    onLoadingComplete={() => {
                        setIsLoading(false)
                        // Scroll to About Me section after a brief delay
                        setTimeout(() => {
                            const aboutSection = document.getElementById('about-me')
                            if (aboutSection) {
                                aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                            }
                            setCurrentSection('About me')
                        }, 1)
                    }}
                />
            )}

            {/* Main App Content */}
            {!isLoading && (
                <>
                    <NavBar
                        currentSection={currentSection}
                        scrollToSection={scrollToSection}
                    />

                    {/* Hero Section */}
                    <section id="about-me" className="min-h-screen">
                        <div className="w-full max-w-4xl mx-auto px-4 md:px-6">
                            <Hero />
                        </div>
                    </section>

                    {/* About Section */}
                    <section className="bg-white">
                        <About />
                    </section>

                    {/* Works Section */}
                    <section id="works" className="min-h-screen">
                        <Works />
                    </section>

                    {/* Visual Delight Section */}
                    <section id="visual-delight" className="min-h-screen">
                        <VisualDelight />
                    </section>

                    {/* Experience Section */}
                    <section id="experience" className="min-h-screen">
                        <Experience />
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="min-h-screen">
                        <Contact />
                    </section>
                </>
            )}
        </div>
    )
}
