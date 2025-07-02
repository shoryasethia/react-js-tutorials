import { useState } from 'react'
import './App.css'
import { DiceProvider } from './contexts'
import DiceGame from './components/DiceGame'

function App() {
  const [score, setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState(null)
  const [diceNumber, setDiceNumber] = useState(null)
  const [showRules, setShowRules] = useState(false)

  const updateScore = (guess, diceRoll) => {
    if(guess === diceRoll) {
      increaseScore(guess)
    } else {
      decreaseScore()
    }
  }

  const increaseScore = (points) => {
    setScore(prevScore => prevScore + points)
  } 

  const decreaseScore = () => {
    setScore(prevScore => prevScore - 2)
  }

  const resetScore = () => {
    setScore(0)
    setSelectedNumber(null)
    setDiceNumber(null)
  }

  const toggleRules = () => {
    setShowRules(!showRules)
  }

  return (
    <DiceProvider value={{
      score,
      selectedNumber,
      diceNumber,
      showRules,
      setSelectedNumber,
      setDiceNumber,
      updateScore,
      increaseScore,
      decreaseScore,
      resetScore,
      toggleRules
    }}>
      <div className="min-h-screen bg-gray-900 text-white">
        <DiceGame />
      </div>
    </DiceProvider>
  )
}

export default App
