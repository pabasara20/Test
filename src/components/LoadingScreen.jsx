import React, { useEffect, useState } from 'react'

export default function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 2500
    const steps = 100
    const interval = duration / steps

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => onLoadingComplete && onLoadingComplete(), 300)
          return 100
        }
        return prev + 1
      })
    }, interval)

    return () => clearInterval(timer)
  }, [onLoadingComplete])

  // Number of blocks
  const totalBlocks = 10
  const filledBlocks = Math.round((progress / 100) * totalBlocks)

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center">
      <h1 className="text-base md:text-lg font-medium text-gray-900 mb-3 tracking-tight">
        Pabasara Ranasinghe
      </h1>

      {/* Blocks container */}
      <div className="flex space-x-1 mb-2">
        {Array.from({ length: totalBlocks }).map((_, i) => (
          <div
            key={i}
            className={`w-4 h-1 md:w-4 md:h-1 transition-colors duration-100 ${
              i < filledBlocks ? 'bg-[#EAC43F]' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      <p className="text-xs md:text-sm text-gray-600 font-medium">{progress}%</p>
    </div>
  )
}
