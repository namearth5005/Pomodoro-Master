import React, { useState, useEffect } from 'react'
import { Play, Pause, RefreshCw, Coffee } from 'lucide-react'

interface PomodoroTimerProps {
  onComplete: () => void
}

const PomodoroTimer: React.FC<PomodoroTimerProps> = ({ onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const [isBreak, setIsBreak] = useState(false)

  useEffect(() => {
    let interval: number | undefined

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      setIsActive(false)
      if (!isBreak) {
        onComplete()
        setIsBreak(true)
        setTimeLeft(5 * 60) // 5-minute break
      } else {
        setIsBreak(false)
        setTimeLeft(25 * 60) // Back to 25-minute work session
      }
    }

    return () => clearInterval(interval)
  }, [isActive, timeLeft, onComplete, isBreak])

  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  const resetTimer = () => {
    setIsActive(false)
    setIsBreak(false)
    setTimeLeft(25 * 60)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="text-center mb-8">
      <div className="text-7xl font-bold mb-6 text-indigo-800">{formatTime(timeLeft)}</div>
      <div className="text-xl font-semibold mb-4 text-indigo-600">
        {isBreak ? <span className="flex items-center justify-center"><Coffee className="mr-2" /> Break Time!</span> : 'Focus Time'}
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={toggleTimer}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-full flex items-center transition duration-300 ease-in-out transform hover:scale-105"
        >
          {isActive ? <Pause className="mr-2" /> : <Play className="mr-2" />}
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={resetTimer}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-full flex items-center transition duration-300 ease-in-out transform hover:scale-105"
        >
          <RefreshCw className="mr-2" /> Reset
        </button>
      </div>
    </div>
  )
}

export default PomodoroTimer