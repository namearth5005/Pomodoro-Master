import React, { useState, useEffect } from 'react'
import { Trophy } from 'lucide-react'

interface LeaderBoardProps {
  currentUser: string
  userScore: number
}

interface LeaderboardEntry {
  username: string
  score: number
}

const LeaderBoard: React.FC<LeaderBoardProps> = ({ currentUser, userScore }) => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])

  useEffect(() => {
    // Simulated leaderboard data
    const simulatedLeaderboard: LeaderboardEntry[] = [
      { username: 'PomodoroKing', score: 120 },
      { username: 'FocusQueen', score: 115 },
      { username: 'ProductivityNinja', score: 105 },
      { username: 'TimeWizard', score: 95 },
      { username: 'ConcentrationMaster', score: 90 },
    ]

    // Add or update current user's score
    const updatedLeaderboard = simulatedLeaderboard.filter(entry => entry.username !== currentUser)
    updatedLeaderboard.push({ username: currentUser, score: userScore })
    updatedLeaderboard.sort((a, b) => b.score - a.score)

    setLeaderboard(updatedLeaderboard.slice(0, 5))
  }, [currentUser, userScore])

  return (
    <div className="mt-8 border-t border-indigo-200 pt-6">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-800 flex items-center">
        <Trophy className="mr-2" /> Leaderboard
      </h2>
      <div className="bg-indigo-50 rounded-lg p-4">
        {leaderboard.map((entry, index) => (
          <div
            key={index}
            className={`flex justify-between items-center py-2 ${
              index !== leaderboard.length - 1 ? 'border-b border-indigo-200' : ''
            } ${entry.username === currentUser ? 'font-bold text-indigo-600' : ''}`}
          >
            <span>
              {index + 1}. {entry.username}
            </span>
            <span>{entry.score} Pomodoros</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LeaderBoard