import { useDice } from '../contexts'

const NumberSelector = () => {
  const { selectedNumber, setSelectedNumber } = useDice()

  const numbers = [1, 2, 3, 4, 5, 6]

  return (
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-white mb-4">
        Select Your Number
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {numbers.map((number) => (
          <button
            key={number}
            onClick={() => setSelectedNumber(number)}
            className={`w-16 h-16 md:w-20 md:h-20 text-xl md:text-2xl font-bold rounded-lg border-2 transition-all duration-200 transform hover:scale-110 ${
              selectedNumber === number
                ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-500/50'
                : 'bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500'
            }`}
          >
            {number}
          </button>
        ))}
      </div>
      {selectedNumber && (
        <p className="text-blue-400 mt-3 text-lg">
          Selected: <span className="font-bold text-blue-300">{selectedNumber}</span>
        </p>
      )}
    </div>
  )
}

export default NumberSelector
