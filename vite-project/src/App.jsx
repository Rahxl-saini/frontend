import { useState } from 'react'
import './index.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>Hello World</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => {
        setCount(count - 1)
      }}>
       Decrease
      </button>
    </div>
  )
}

export default App