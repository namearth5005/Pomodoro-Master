import React from 'react'
import { Clock, BarChart, Zap } from 'lucide-react'

interface StatisticsProps {
  pomodoroCount: number
  totalMinutes: number
  currentStreak: number
}

const Statistics: React.FC<StatisticsProps> = ({ pomodoroCount, totalMinutes, currentStreak }) => {
  return (
    <div className="border-t border-indigo-200 pt-6">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-800 flex items-center">
        <BarChart className="mr-2" /> Quick Stats
      </h2>
      <div className="grid grid-cols-3 gap-4">
        <StatCard
          icon={<Clock className="text-green-500" />}
          label="Pomodoros"
          value={pomodoroCount}
          color="bg-green-100"
        />
        <StatCard
          icon={<Clock className="text-blue-500" />}
          label="Total Minutes"
          value={totalMinutes}
          color="bg-blue-100"
        />
        <StatCard
          icon={<Zap className="text-yellow-500" />}
          label="Current Streak"
          value={currentStreak}
          color="bg-yellow-100"
        />
      </div>
    </div>
  )
}

const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: number; color: string }> = ({
  icon,
  label,
  value,
  color,
}) => (
  <div className={`${color} p-4 rounded-lg shadow-md`}>
    <div className="flex items-center justify-between mb-2">
      {icon}
      <span className="text-gray-600 font-medium">{label}</span>
    </div>
    <div className="text-3xl font-bold text-gray-800">{value}</div>
  </div>
)

export default Statistics