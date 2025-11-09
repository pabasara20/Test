import React from 'react'
// REMOVED: import Budgetly1 from '../Assets/Budgetly1.png'
// REMOVED: import Budgetly2 from '../Assets/Budgetly2.png'
// REMOVED: import Budgetly3 from '../Assets/Budgetly3.png'
// REMOVED: import Budgetly4 from '../Assets/Budgetly4.png'
import Me from '../Assets/Me.jpeg' // Kept this if it's used elsewhere, though not in the snippet below

export default function VisualDelight() {

    // ✅ NEW BLOCK: Load ALL images for the UI/UX Showcase dynamically 
    // from the specified folder. This replaces the Budgetly imports.
    // Assuming the path relative to the current file is correct: 
    // '../Assets/Showcase/*.{png,jpg,jpeg,svg}'
    const uiShowcaseModules = import.meta.glob('../Assets/Showcase/*.{png,jpg,jpeg,svg}', { eager: true })
    const visualDelightImages = Object.entries(uiShowcaseModules).map(([path, mod], idx) => ({
        id: idx + 1,
        image: mod.default || mod, // Vite default export for assets
        alt: path.split('/').pop() // Use filename as alt text
    }))

    // REMOVED: The old hardcoded visualDelightImages array
    /* const visualDelightImages = [
        { id: 1, image: Budgetly1, alt: "Budgetly Interface 1" },
        { id: 2, image: Budgetly2, alt: "Budgetly Interface 2" },
        { id: 3, image: Budgetly3, alt: "Budgetly Interface 3" },
        { id: 4, image: Budgetly4, alt: "Budgetly Interface 4" }
    ]
    */

    // ✅ Load ALL images from Assets/Graphic dynamically (png/jpg/jpeg/svg)
    const graphicModules = import.meta.glob('../Assets/Graphic/*.{png,jpg,jpeg,svg}', { eager: true })
    const graphicImages = Object.entries(graphicModules).map(([path, mod], idx) => ({
        id: idx + 1,
        image: mod.default || mod, // Vite default export for assets
        alt: path.split('/').pop()
    }))

    // Use the same set of images for both rows to keep widths identical
    const repeatedVisual = [...graphicImages, ...graphicImages]

    // Slightly smaller thumbnails than UI carousel
    const imageMaxHeight = '220px'

    return (
        <section className="relative w-full py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6">

                {/* 🔹 Section Header: A few user interfaces */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-[550] leading-tight mb-4">
                        UI/UX Showcase
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600">
                        A showcase of my recent UX/UI projects highlighting my
                        visual design skills and creativity.
                    </p>
                </div>

                {/* 🔹 Scrolling Carousel Container - UI Images */}
                {/* Now uses dynamically loaded visualDelightImages */}
                <div className="relative overflow-hidden">
                    <div className="flex gap-8 animate-scroll">
                        {/* First set and Duplicate set for seamless loop */}
                        {[...visualDelightImages, ...visualDelightImages].map((item, index) => (
                            <div
                                key={`ui-${item.id}-${index}`}
                                className="flex-shrink-0"
                            >
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="h-auto object-contain rounded-2xl transition-transform duration-900 hover:scale-101"
                                    style={{ width: 'auto', maxHeight: imageMaxHeight }}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- */}

                {/* 🔹 Visual Design Portfolio Section */}
                <div className="mt-32">
                    {/* Section Header: Visual design projects */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-[550] leading-tight mb-6">
                            Visual Design Projects
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600">
                            A visual designer now focused on UX, showcasing projects that highlight my creative and visual expertise.
                        </p>
                    </div>

                    {/* 🔹 Two-row carousels with opposite scroll directions */}
                    <div className="space-y-6">
                        {/* Row 1 - rightward (reverse) */}
                        <div className="relative overflow-hidden">
                            <div className="flex gap-6 animate-visual-slow-reverse">
                                {repeatedVisual.map((item, index) => (
                                    <div key={`visual-r1-${item.id}-${index}`} className="flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.alt}
                                            className="h-auto object-contain rounded-2xl transition-transform duration-300 hover:scale-101"
                                            style={{ width: 'auto', maxHeight: imageMaxHeight }}
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Row 2 - leftward */}
                        <div className="relative overflow-hidden">
                            <div className="flex gap-6 animate-visual-slow">
                                {repeatedVisual.map((item, index) => (
                                    <div key={`visual-r2-${item.id}-${index}`} className="flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.alt}
                                            className="h-auto object-contain rounded-2xl transition-transform duration-300 hover:scale-101"
                                            style={{ width: 'auto', maxHeight: imageMaxHeight }}
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}