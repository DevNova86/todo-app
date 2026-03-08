import { useState } from 'react'
import './App.css'
import Footer from './Footer'


function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  
  const addTodo = () => {
    if (input.trim() === '') return

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    }

    setTodos([...todos, newTodo])
    setInput('')
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  return (
    <div className="app">
      <div className="todo-container">

        <h1>To-Do App</h1>

        <div className="input-section">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTodo()}
            placeholder="Add a new task..."
          />

          <button onClick={addTodo}>Add</button>

        </div>

        <div className="todos-list">
            {todos.length === 0 ? (
              <p className="empty-message">No to-dos yet. Add one above!</p>
            ) : (
            todos.map(todo => (
              <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                />
                <span className="todo-text">{todo.text}</span>
                <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
                  Delete
                </button>
              </div>
              ))
            )}
        </div>

        <div className="todo-stats">
          <p>Total: {todos.length} | Completed: {todos.filter(t => t.completed).length}</p>
        </div>

      </div>
            <div>
              <Footer />
            </div>
    </div>
  )
} 

export default App