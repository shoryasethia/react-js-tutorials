import { useDice } from '../contexts'

const ScoreBoard = () => {
  const { score } = useDice()

  return (
    <div className="text-center mb-8">
      <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 p-6 rounded-xl shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Current Score
        </h2>
        <div className="text-4xl md:text-6xl font-bold text-white">
          {score}
        </div>
        <p className="text-purple-200 mt-2 text-sm md:text-base">
          {score >= 0 ? "Keep going!" : "Don't give up!"}
        </p>
      </div>
    </div>
  )
}

export default ScoreBoard
