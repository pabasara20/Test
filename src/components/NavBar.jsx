import React, { useEffect, useRef, useState } from 'react'

export default function NavBar({ currentSection = 'About me', scrollToSection }) {
  const items = ['About me', 'Works', 'Visual Delight', 'Experience', 'Contact']
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(currentSection)
  const containerRef = useRef(null)
  const buttonRefs = useRef([])
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0, opacity: 0 })

  useEffect(() => setActiveSection(currentSection), [currentSection])

  const updateSlider = () => {
    const container = containerRef.current
    if (!container) return
    const idx = items.findIndex(
      (it) => it.toLowerCase() === (activeSection || '').toLowerCase()
    )
    const clampedIdx = idx >= 0 ? idx : 0
    const button = buttonRefs.current[clampedIdx]
    if (button) {
      const cRect = container.getBoundingClientRect()
      const bRect = button.getBoundingClientRect()
      const left = bRect.left - cRect.left
      const width = bRect.width
      setSliderStyle({ left, width, opacity: 1 })
    } else setSliderStyle((s) => ({ ...s, opacity: 0 }))
  }

  useEffect(() => {
    updateSlider()
    const t = setTimeout(updateSlider, 50)
    return () => clearTimeout(t)
  }, [activeSection])

  useEffect(() => {
    window.addEventListener('resize', updateSlider)
    window.addEventListener('orientationchange', updateSlider)
    return () => {
      window.removeEventListener('resize', updateSlider)
      window.removeEventListener('orientationchange', updateSlider)
    }
  }, [])

  const handleNavClick = (label) => {
    const sectionId = label.toLowerCase().replace(/\s+/g, '-')
    setActiveSection(label)
    scrollToSection && scrollToSection(sectionId)
    setIsMenuOpen(false) // auto-close menu on click
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/40 border-b border-white/30">
      <div className="flex items-center justify-between px-8 py-4 md:py-6 relative">
        {/* Left: Logo */}
        <div className="text-gray-800 font-semibold text-base md:text-lg tracking-tight">
          Pabasara UX
        </div>

        {/* Center: Desktop Navigation */}
        <nav
          className="hidden md:flex justify-center absolute left-1/2 transform -translate-x-1/2"
          aria-label="Main navigation"
        >
          <div
            ref={containerRef}
            className="relative flex items-center px-4 py-1 rounded-full"
            style={{ minHeight: 48 }}
          >
            {/* Sliding Indicator */}
            <div
              className="absolute top-1/2 transform -translate-y-1/2 bg-black rounded-full transition-all duration-300 ease-in-out"
              style={{
                left: sliderStyle.left,
                width: sliderStyle.width,
                height: 36,
                opacity: sliderStyle.opacity,
                zIndex: 1,
              }}
            />

            <ul className="relative z-10 flex items-center space-x-3">
              {items.map((label, i) => (
                <li key={label}>
                  <button
                    ref={(el) => (buttonRefs.current[i] = el)}
                    onClick={() => handleNavClick(label)}
                    className={`relative z-10 text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200 ${
                      label.toLowerCase() === activeSection.toLowerCase()
                        ? 'text-white'
                        : 'text-gray-700 hover:text-black'
                    }`}
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Right: Resume + Mobile Toggle */}
        <div className="flex items-center space-x-4">
          {/* Resume Button - Desktop */}
<a
  href="https://drive.google.com/uc?export=download&id=1gWi5gSYdy0VeBHYEj5m-DMoIIbLIiOqy"
  download
>
  <button className="hidden md:block bg-[#EAC43F] text-black px-6 py-2 rounded-full font-medium text-sm hover:bg-[#d4ae36] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95">
    Resume
  </button>
</a>

          {/* Mobile Burger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1"
            onClick={() => setIsMenuOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[64px] left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg z-50 animate-slideDown">
          <nav className="px-4 py-5">
            <ul className="space-y-2">
              {items.map((label) => (
                <li key={label}>
                  <button
                    onClick={() => handleNavClick(label)}
                    className={`w-full text-left px-5 py-3 rounded-xl font-medium tracking-wide transition-all duration-200 ${
                      label.toLowerCase() === activeSection.toLowerCase()
                        ? 'bg-black text-white shadow-md'
                        : 'text-gray-700 hover:text-black hover:bg-gray-100'
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}

              {/* Resume Button - Mobile */}
              <li className="pt-3 border-t border-gray-200 mt-5">
                <button className="w-full bg-[#EAC43F] text-black px-5 py-3 rounded-xl font-semibold text-sm tracking-wide hover:bg-[#d4ae36] hover:scale-[1.02] active:scale-95 transition-all duration-300">
                  Download Resume
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
