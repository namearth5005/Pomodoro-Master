import React, { useState, useEffect } from 'react'
import { Timer, BarChart, User, Award } from 'lucide-react'
import PomodoroTimer from './components/PomodoroTimer'
import Statistics from './components/Statistics'
import DetailedStats from './components/DetailedStats'
import Achievements from './components/Achievements'
import LeaderBoard from './components/LeaderBoard'

function App() {
  const [pomodoroCount, setPomodoroCount] = useState(0)
  const [totalMinutes, setTotalMinutes] = useState(0)
  const [dailyPomodoros, setDailyPomodoros] = useState<number[]>([])
  const [currentStreak, setCurrentStreak] = useState(0)
  const [showDetailedStats, setShowDetailedStats] = useState(false)
  const [level, setLevel] = useState(1)
  const [xp, setXp] = useState(0)
  const [username, setUsername] = useState(localStorage.getItem('username') || '')

  useEffect(() => {
    if (pomodoroCount > 0) {
      setDailyPomodoros(prev => {
        const newDaily = [...prev]
        newDaily[newDaily.length - 1] = (newDaily[newDaily.length - 1] || 0) + 1
        return newDaily
      })
      setCurrentStreak(prev => prev + 1)
      addXP(25)
    }
  }, [pomodoroCount])

  useEffect(() => {
    // Simulate a new day every 30 seconds for demonstration purposes
    const interval = setInterval(() => {
      setDailyPomodoros(prev => [...prev, 0])
      if (dailyPomodoros[dailyPomodoros.length - 1] === 0) {
        setCurrentStreak(0)
      }
    }, 30000)
    return () => clearInterval(interval)
  }, [dailyPomodoros])

  const handlePomodoroComplete = () => {
    setPomodoroCount(prev => prev + 1)
    setTotalMinutes(prev => prev + 25)
  }

  const addXP = (amount: number) => {
    setXp(prevXP => {
      const newXP = prevXP + amount
      const newLevel = Math.floor(newXP / 100) + 1
      if (newLevel > level) {
        setLevel(newLevel)
        // You could add a level up animation or notification here
      }
      return newXP
    })
  }

  const handleUsernameSubmit = (newUsername: string) => {
    setUsername(newUsername)
    localStorage.setItem('username', newUsername)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-indigo-800 flex items-center justify-center">
          <Timer className="mr-3" size={36} /> Pomodoro Master
        </h1>
        {!username ? (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Welcome! What's your name?</h2>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full p-2 border border-indigo-300 rounded"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleUsernameSubmit((e.target as HTMLInputElement).value)
                }
              }}
            />
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <User className="mr-2 text-indigo-600" />
                <span className="text-xl font-semibold text-indigo-800">{username}</span>
              </div>
              <div className="flex items-center">
                <Award className="mr-2 text-yellow-500" />
                <span className="text-xl font-semibold text-indigo-800">Level {level}</span>
              </div>
            </div>
            <div className="mb-6 bg-indigo-100 rounded-full h-4">
              <div
                className="bg-indigo-500 h-4 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(xp % 100)}%` }}
              ></div>
            </div>
            <PomodoroTimer onComplete={handlePomodoroComplete} />
            <Statistics
              pomodoroCount={pomodoroCount}
              totalMinutes={totalMinutes}
              currentStreak={currentStreak}
            />
            <Achievements pomodoroCount={pomodoroCount} currentStreak={currentStreak} />
            <button
              onClick={() => setShowDetailedStats(!showDetailedStats)}
              className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center w-full"
            >
              <BarChart className="mr-2" /> {showDetailedStats ? 'Hide' : 'Show'} Detailed Stats
            </button>
            {showDetailedStats && <DetailedStats dailyPomodoros={dailyPomodoros} />}
            <LeaderBoard currentUser={username} userScore={pomodoroCount} />
          </>
        )}
      </div>
    </div>
  )
}

export default App