import React from 'react'
import Logo1 from '../Assets/Logo1.png'
import Logo2 from '../Assets/Logo2.png'
import Logo3 from '../Assets/Logo3.png'
import Logo4 from '../Assets/Logo4.png'
import Logo5 from '../Assets/Logo5.png'
import Logo6 from '../Assets/Logo6.png'
import Logo7 from '../Assets/Logo7.png'

export default function Experience() {
  const workHistory = [
    {
      id: 1,
      position: 'Design Team Leader',
      company: 'GeekZone v1.0 - IEEE Student Branch of SUSL',
      duration: '',
      logo: Logo1,
      width: '300px', // Desktop Size
      mobileWidth: '150px', // Mobile Size (e.g., 50px)
      height: 'auto'
    },
    {
      id: 2,
      position: 'Graphic Design Volunteer',
      company: 'Faculty of Computing, SUSL',
      duration: '',
      logo: Logo2,
      width: '160px', // Desktop Size
      mobileWidth: '60px', // Mobile Size (e.g., 40px)
      height: 'auto'
    },
    {
      id: 3,
      position: 'Graphic Design Volunteer',
      company: 'Society of Computer Sciences, SUSL',
      duration: '',
      logo: Logo3,
      width: '100px', // Desktop Size
      mobileWidth: '50px', // Mobile Size (e.g., 35px)
      height: 'auto'
    },
    {
      id: 4,
      position: 'Graphic Design Volunteer',
      company: 'PathForward 2025 - IEEE WIE Student Branch Affinity Group of SUSL',
      duration: '',
      logo: Logo4,
      width: '200px', // Desktop Size
      mobileWidth: '95px', // Mobile Size (e.g., 45px)
      height: 'auto'
    },
    {
      id: 5,
      position: 'Graphic Design Volunteer',
      company: 'PearlHack 3.0 - IEEE WIE Student Branch Affinity Group of SUSL',
      duration: '',
      logo: Logo5,
      width: '200px', // Desktop Size
      mobileWidth: '95px', // Mobile Size (e.g., 45px)
      height: 'auto'
    },
    {
      id: 6,
      position: 'Technical Volunteer',
      company: 'International Conference on Advanced Research in Computing 2025',
      duration: '',
      logo: Logo6,
      width: '200px', // Desktop Size
      mobileWidth: '95px', // Mobile Size (e.g., 25px)
      height: 'auto'
    },
    {
      id: 7,
      position: 'Volunteer of the Month',
      company: '2024 November - IEEE Student Branch of SUSL',
      duration: '',
      logo: Logo7,
      width: '65px', // Desktop Size
      mobileWidth: '30px', // Mobile Size (e.g., 30px)
      height: 'auto'
    },
  ]

  return (
    <section className="w-full py-8 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-medium text-center mt-8 mb-16">
          Volunteering
        </h2>

        <div className="flex flex-col divide-y divide-gray-100">
          {workHistory.map((job) => (
            <div
              key={job.id}
              className="flex flex-col md:flex-row md:items-center justify-between py-5 transition-colors duration-200 rounded-xl px-0 md:px-4 group"
            >
              {/* Left: Text & Mobile Logo Wrapper */}
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">
                  {job.position}
                </h3>
                <p className="text-sm text-gray-700">{job.company}</p>
                {job.duration && <p className="text-xs text-gray-500">{job.duration}</p>}

                {/* 👇 Mobile Logo (Shown on mobile, Hidden on desktop) */}
                <div className="flex md:hidden mt-3">
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="object-contain"
                    style={{
                      width: job.mobileWidth, // 👈 Uses the specific mobile size
                      height: 'auto',
                    }}
                  />
                </div>
              </div>

              {/* Right: Large Logo (Hidden on mobile, Shown on desktop) */}
              <div className="hidden md:flex ml-4 items-center">
                <img
                  src={job.logo}
                  alt={`${job.company} logo`}
                  className="object-contain"
                  style={{
                    width: job.width, // 👈 Uses the specific desktop size
                    height: job.height,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}