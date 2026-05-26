import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : []
  })
  const [input, setInput] = useState('')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    const text = input.trim()
    if (!text) return
    setTasks([...tasks, { id: Date.now(), text, done: false }])
    setInput('')
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTask()
  }

  const remaining = tasks.filter(t => !t.done).length

  return (
    <div className="app">
      <header className="header">
        <h1>Task Board</h1>
        {tasks.length > 0 && (
          <p className="counter">{remaining} / {tasks.length} 件残り</p>
        )}
      </header>

      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="新しいタスクを入力..."
          maxLength={100}
        />
        <button onClick={addTask} disabled={!input.trim()}>
          追加
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="empty">タスクがありません。上のフォームから追加してください。</p>
      ) : (
        <ul className="task-list">
          {tasks.map(task => (
            <li key={task.id} className={task.done ? 'task done' : 'task'}>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
                id={`task-${task.id}`}
              />
              <label htmlFor={`task-${task.id}`}>{task.text}</label>
              <button
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
                aria-label="削除"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
