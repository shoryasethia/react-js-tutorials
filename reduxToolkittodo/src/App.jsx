import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1 className='bg-gray-200 text-3xl p-4'>Redux Tool Kit | Todo List</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App