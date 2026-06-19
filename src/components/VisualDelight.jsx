import React, { useRef, useEffect, useState } from 'react'

const AutoDragCarousel = ({ items, imageMaxHeight, speed = 1, direction = 'left', gap = 24 }) => {
    const containerRef = useRef(null);
    const firstSetRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const startX = useRef(0);
    const scrollLeftStart = useRef(0);
    const rafId = useRef(null);

    useEffect(() => {
        if (direction === 'right' && containerRef.current && firstSetRef.current) {
            containerRef.current.scrollLeft = firstSetRef.current.offsetWidth + gap;
        }
    }, [direction, gap]);

    useEffect(() => {
        const container = containerRef.current;
        const firstSet = firstSetRef.current;
        if (!container || !firstSet) return;

        const scrollStep = () => {
            if (!isDragging && !isHovered) {
                const loopPoint = firstSet.offsetWidth + gap;
                
                if (direction === 'left') {
                    container.scrollLeft += speed;
                    if (container.scrollLeft >= loopPoint) {
                        container.scrollLeft -= loopPoint;
                    }
                } else {
                    container.scrollLeft -= speed;
                    if (container.scrollLeft <= 0) {
                        container.scrollLeft += loopPoint;
                    }
                }
            }
            rafId.current = requestAnimationFrame(scrollStep);
        };

        rafId.current = requestAnimationFrame(scrollStep);
        return () => cancelAnimationFrame(rafId.current);
    }, [isDragging, isHovered, speed, direction, gap]);

    const onPointerDown = (e) => {
        setIsDragging(true);
        startX.current = e.pageX || (e.touches && e.touches[0].pageX);
        scrollLeftStart.current = containerRef.current.scrollLeft;
    };

    const onPointerMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX || (e.touches && e.touches[0].pageX);
        if (!x) return;
        
        const walk = (startX.current - x) * 1.5;
        let newScrollLeft = scrollLeftStart.current + walk;
        const loopPoint = firstSetRef.current.offsetWidth + gap;
        
        if (newScrollLeft >= loopPoint) newScrollLeft -= loopPoint;
        if (newScrollLeft <= 0) newScrollLeft += loopPoint;
        
        containerRef.current.scrollLeft = newScrollLeft;
    };

    const onPointerUpOrLeave = () => {
        setIsDragging(false);
    };

    return (
        <div
            ref={containerRef}
            className={`w-full overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-${isDragging ? 'grabbing' : 'grab'}`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUpOrLeave}
            onPointerLeave={() => { setIsHovered(false); onPointerUpOrLeave(); }}
            onMouseEnter={() => setIsHovered(true)}
            onTouchStart={onPointerDown}
            onTouchMove={onPointerMove}
            onTouchEnd={onPointerUpOrLeave}
            style={{ touchAction: 'pan-y' }}
        >
            <div className="flex w-max" style={{ gap: `${gap}px` }}>
                <div ref={firstSetRef} className="flex" style={{ gap: `${gap}px` }}>
                    {items.map((item, index) => (
                        <div key={`set1-${item.id}-${index}`} className="flex-shrink-0">
                            <img
                                src={item.image}
                                alt={item.alt}
                                draggable={false}
                                className="h-auto object-contain rounded-2xl transition-transform duration-300 hover:scale-[1.02] select-none"
                                style={{ width: 'auto', maxHeight: imageMaxHeight }}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex" style={{ gap: `${gap}px` }}>
                    {items.map((item, index) => (
                        <div key={`set2-${item.id}-${index}`} className="flex-shrink-0">
                            <img
                                src={item.image}
                                alt={item.alt}
                                draggable={false}
                                className="h-auto object-contain rounded-2xl transition-transform duration-300 hover:scale-[1.02] select-none"
                                style={{ width: 'auto', maxHeight: imageMaxHeight }}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default function VisualDelight() {

    const uiShowcaseModules = import.meta.glob('../Assets/Showcase/*.{png,jpg,jpeg,svg}', { eager: true })
    const visualDelightImages = Object.entries(uiShowcaseModules).map(([path, mod], idx) => ({
        id: idx + 1,
        image: mod.default || mod,
        alt: path.split('/').pop()
    }))

    const graphicModules = import.meta.glob('../Assets/Graphic/*.{png,jpg,jpeg,svg}', { eager: true })
    const graphicImages = Object.entries(graphicModules).map(([path, mod], idx) => ({
        id: idx + 1,
        image: mod.default || mod,
        alt: path.split('/').pop()
    }))

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
                <AutoDragCarousel 
                    items={visualDelightImages} 
                    imageMaxHeight={imageMaxHeight} 
                    speed={0.8} 
                    direction="left" 
                    gap={32} 
                />

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
                        {/* Row 1 - rightward */}
                        <AutoDragCarousel 
                            items={graphicImages} 
                            imageMaxHeight={imageMaxHeight} 
                            speed={0.6} 
                            direction="right" 
                            gap={24} 
                        />

                        {/* Row 2 - leftward */}
                        <AutoDragCarousel 
                            items={graphicImages} 
                            imageMaxHeight={imageMaxHeight} 
                            speed={0.6} 
                            direction="left" 
                            gap={24} 
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}