import { useDice } from '../contexts'
import dice1 from '../dice/1.png'
import dice2 from '../dice/2.png'
import dice3 from '../dice/3.png'
import dice4 from '../dice/4.png'
import dice5 from '../dice/5.png'
import dice6 from '../dice/6.png'

const DiceDisplay = () => {
  const { diceNumber } = useDice()

  const diceImages = {
    1: dice1,
    2: dice2,
    3: dice3,
    4: dice4,
    5: dice5,
    6: dice6
  }

  return (
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-white mb-6">
        Dice Roll Result
      </h2>
      <div className="flex justify-center">
        {diceNumber ? (
          <div className="bg-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700">
            <img
              src={diceImages[diceNumber]}
              alt={`Dice showing ${diceNumber}`}
              className="w-24 h-24 md:w-32 md:h-32 mx-auto animate-pulse"
            />
            <p className="text-white text-xl font-bold mt-4">
              You rolled: {diceNumber}
            </p>
          </div>
        ) : (
          <div className="bg-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700 border-dashed">
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto flex items-center justify-center text-6xl text-gray-600">
              ?
            </div>
            <p className="text-gray-400 text-lg mt-4">
              Click "Roll Dice" to play
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default DiceDisplay
