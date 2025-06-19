import { useState } from 'react'

function App() {
  const [clr, setClr] = useState("#212121")

  return (
    <div className="w-full h-screen duration-200" style = {{backgroundColor: clr}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor: "red"}}
              onClick={() => setClr("red")}>
              Red
            </button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor: "green"}}
              onClick={() => setClr("green")}>
              Green
            </button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor: "blue"}}
              onClick={() => setClr("blue")}>
              Blue
            </button>

            <button className="outline-amber-600 px-4 py-1 rounded-full text-black shadow-lg" style = {{backgroundColor: "white"}}
              onClick={() => setClr("white")}>
              White
            </button>


            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor: "yellow"}}
              onClick={() => setClr("yellow")}>
              Yellow
            </button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor: "pink"}}
              onClick={() => setClr("pink")}>
              Pink
            </button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor: "grey"}}
              onClick={() => setClr("grey")}>
              Grey
            </button>

          </div>
        </div>
      </div>
  )
}

export default App
