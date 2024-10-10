import React from 'react'
import { Award, Clock, Zap } from 'lucide-react'

interface AchievementsProps {
  pomodoroCount: number
  currentStreak: number
}

const Achievements: React.FC<AchievementsProps> = ({ pomodoroCount, currentStreak }) => {
  const achievements = [
    {
      icon: <Clock className="text-blue-500" />,
      name: 'Pomodoro Novice',
      description: 'Complete 5 Pomodoros',
      achieved: pomodoroCount >= 5,
    },
    {
      icon: <Clock className="text-green-500" />,
      name: 'Pomodoro Expert',
      description: 'Complete 50 Pomodoros',
      achieved: pomodoroCount >= 50,
    },
    {
      icon: <Zap className="text-yellow-500" />,
      name: 'Streak Starter',
      description: 'Maintain a 3-day streak',
      achieved: currentStreak >= 3,
    },
    {
      icon: <Award className="text-purple-500" />,
      name: 'Pomodoro Master',
      description: 'Complete 100 Pomodoros',
      achieved: pomodoroCount >= 100,
    },
  ]

  return (
    <div className="mt-8 border-t border-indigo-200 pt-6">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-800 flex items-center">
        <Award className="mr-2" /> Achievements
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-md ${
              achievement.achieved ? 'bg-indigo-100' : 'bg-gray-100'
            }`}
          >
            <div className="flex items-center mb-2">
              {achievement.icon}
              <span className={`ml-2 font-semibold ${achievement.achieved ? 'text-indigo-800' : 'text-gray-600'}`}>
                {achievement.name}
              </span>
            </div>
            <p className={`text-sm ${achievement.achieved ? 'text-indigo-600' : 'text-gray-500'}`}>
              {achievement.description}
            </p>
            {achievement.achieved && (
              <span className="text-green-500 text-sm font-semibold mt-2 block">Achieved!</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Achievements