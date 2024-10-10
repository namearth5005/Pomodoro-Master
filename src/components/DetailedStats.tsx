import React from 'react'
import { BarChart, TrendingUp, Award } from 'lucide-react'

interface DetailedStatsProps {
  dailyPomodoros: number[]
}

const DetailedStats: React.FC<DetailedStatsProps> = ({ dailyPomodoros }) => {
  const maxPomodoros = Math.max(...dailyPomodoros)
  const averagePomodoros = dailyPomodoros.length > 0 ? dailyPomodoros.reduce((a, b) => a + b) / dailyPomodoros.length : 0

  return (
    <div className="mt-8 border-t border-indigo-200 pt-6">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-800 flex items-center">
        <BarChart className="mr-2" /> Detailed Statistics
      </h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <StatCard icon={<TrendingUp />} label="Average per Day" value={averagePomodoros.toFixed(1)} />
        <StatCard icon={<Award />} label="Most in a Day" value={maxPomodoros} />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2 text-indigo-700">Daily Pomodoros (Last 7 Days)</h3>
        <div className="flex items-end justify-between h-40">
          {dailyPomodoros.slice(-7).map((count, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="bg-indigo-500 w-8 rounded-t"
                style={{ height: `${(count / maxPomodoros) * 100}%` }}
              ></div>
              <span className="text-xs mt-1">Day {index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: number | string }> = ({
  icon,
  label,
  value,
}) => (
  <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
    <div className="flex items-center justify-between mb-2">
      {icon}
      <span className="text-indigo-800 font-medium">{label}</span>
    </div>
    <div className="text-3xl font-bold text-indigo-900">{value}</div>
  </div>
)

export default DetailedStats