/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const DiceContext = createContext({
  score: 0,
  selectedNumber: null,
  diceNumber: null,
  showRules: false,
  setSelectedNumber: (number) => {},
  setDiceNumber: (number) => {},
  updateScore: (guess, diceRoll) => {},
  increaseScore: (points) => {},
  decreaseScore: () => {},
  resetScore: () => {},
  toggleRules: () => {}
})

export const useDice = () => {
  return useContext(DiceContext)
}

export const DiceProvider = DiceContext.Provider