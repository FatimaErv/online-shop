import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { myRouter } from './router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='wrapper'>
    <RouterProvider router={myRouter}/>
    </div>
  )
}

export default App
