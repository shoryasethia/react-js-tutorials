import { useDice } from '../contexts'
import NumberSelector from './NumberSelector'
import DiceDisplay from './DiceDisplay'
import ScoreBoard from './ScoreBoard'
import RulesModal from './RulesModal'

const DiceGame = () => {
  const { 
    selectedNumber, 
    diceNumber, 
    showRules, 
    setDiceNumber, 
    updateScore, 
    resetScore, 
    toggleRules 
  } = useDice()

  const rollDice = () => {
    if (!selectedNumber) {
      alert("Please select a number between 1-6 before rolling the dice!")
      return
    }

    const randomNumber = Math.floor(Math.random() * 6) + 1
    setDiceNumber(randomNumber)
    updateScore(selectedNumber, randomNumber)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
          Dice Game
        </h1>
        <p className="text-gray-400 text-lg">
          Select a number and roll the dice to win points
        </p>
      </div>

      {/* Score Board */}
      <ScoreBoard />

      {/* Game Area */}
      <div className="max-w-4xl mx-auto">
        {/* Number Selector */}
        <NumberSelector />

        {/* Dice Display */}
        <DiceDisplay />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <button
            onClick={rollDice}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Roll Dice
          </button>
          
          <button
            onClick={resetScore}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Reset Score
          </button>
          
          <button
            onClick={toggleRules}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {showRules ? 'Hide' : 'Show'} Rules
          </button>
        </div>

        {/* Result Message */}
        {diceNumber && selectedNumber && (
          <div className="text-center mt-6">
            <div className={`text-xl font-bold p-4 rounded-lg ${
              selectedNumber === diceNumber 
                ? 'bg-green-800 text-green-200' 
                : 'bg-red-800 text-red-200'
            }`}>
              {selectedNumber === diceNumber 
                ? `Congratulations! You won ${selectedNumber} points!` 
                : 'Better luck next time! You lost 2 points.'}
            </div>
          </div>
        )}
      </div>

      {/* Rules Modal */}
      <RulesModal />
    </div>
  )
}

export default DiceGame
