import { useDice } from '../contexts'

const RulesModal = () => {
  const { showRules, toggleRules } = useDice()

  if (!showRules) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full border border-gray-700 shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-white">Game Rules</h3>
          <button
            onClick={toggleRules}
            className="text-gray-400 hover:text-white text-2xl"
          >
            ✕
          </button>
        </div>
        
        <div className="text-gray-300 space-y-3">
          <div className="bg-gray-700 p-3 rounded-lg">
            <h4 className="font-bold text-blue-400 mb-2">How to Play:</h4>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>Select a number between 1-6</li>
              <li>Click "Roll Dice" to roll</li>
              <li>See if your guess matches the dice</li>
            </ol>
          </div>
          
          <div className="bg-gray-700 p-3 rounded-lg">
            <h4 className="font-bold text-green-400 mb-2">Scoring:</h4>
            <ul className="space-y-1 text-sm">
              <li><strong>Correct guess:</strong> +N points (N = your number)</li>
              <li><strong>Wrong guess:</strong> -2 points</li>
            </ul>
          </div>
          
          <div className="bg-gray-700 p-3 rounded-lg">
            <h4 className="font-bold text-purple-400 mb-2">Tips:</h4>
            <ul className="space-y-1 text-sm">
              <li>Higher numbers = more points when you win</li>
              <li>But the risk is the same (-2 points) if you lose</li>
              <li>Use "Reset Score" to start over anytime</li>
            </ul>
          </div>
        </div>
        
        <button
          onClick={toggleRules}
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Got it! Let's Play
        </button>
      </div>
    </div>
  )
}

export default RulesModal
