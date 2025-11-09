import React from 'react';
import profileImage from '../Assets/Me.jpeg';

export default function Hero() {
  return (
    // 🎨 Key Change: Reduced md:pt-32 to md:pt-16 (or md:pt-24 for slightly more space)
    // The pt-6 and pb-12 keep it suitable for mobile devices.
    <section className="pt-0 pb-0 md:pt-24 md:pb-32">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center px-4">
        {/* Profile image */}
        <div className="rounded-full w-48 h-48 md:w-56 md:h-56 flex items-center justify-center border-8 border-white shadow-lg overflow-hidden mb-4 md:mb-0">
          <img
            src={profileImage}
            alt="Pabasara Ranasinghe"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Greeting pill */}
        <p className="text-gray-800 inline-flex items-center justify-center mb-5 mt-8 md:mb-6">
          <span className="name-pill whitespace-nowrap inline-flex items-center gap-2">
            Hi I'm Pabasara{' '}
            <span
              role="img"
              aria-label="waving hand"
              className="align-middle select-none"
              style={{
                display: 'inline-block',
                transformOrigin: '70% 70%',
                animation: 'wave 2s infinite',
              }}
            >
              👋
            </span>
          </span>
        </p>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl font-[550] leading-tight">
          I craft digital products
          <br />
          and experiences!
        </h1>

        {/* Supporting paragraph */}
        <p className="mt-6 md:mt-7 text-gray-500 font-[400] text-base sm:text-lg md:text-s leading-relaxed max-w-2xl">
          An <strong className="text-gray-800">Intern UI/UX Designer</strong> based
          in <strong className="text-gray-800">Colombo</strong>, focused on crafting
          intuitive user experiences and transforming ideas into meaningful digital
          products.
        </p>
      </div>

      {/* Inline keyframes for waving */}
      <style>
        {`
          @keyframes wave {
            0% { transform: rotate(0deg); }
            15% { transform: rotate(14deg); }
            30% { transform: rotate(-8deg); }
            40% { transform: rotate(14deg); }
            50% { transform: rotate(-4deg); }
            60% { transform: rotate(10deg); }
            70% { transform: rotate(0deg); }
            100% { transform: rotate(0deg); }
          }
        `}
      </style>
    </section>
  );
}