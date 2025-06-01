import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import cloudflareLogo from './assets/Cloudflare_Logo.svg'
import './App.css'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import { Search, Home, Settings } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('unknown')

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-2xl">
        <div className="flex justify-center space-x-8 mb-8">
          <img src={reactLogo} className="h-16 hover:animate-spin" alt="React logo" />
          <img src={viteLogo} className="h-16 hover:scale-110 transition-transform" alt="Vite logo" />
          <img src={cloudflareLogo} className="h-16 hover:opacity-80 transition-opacity" alt="Cloudflare logo" />
        </div>
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome to {name}'s App
        </h1>
        
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setCount((count) => count - 1)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Decrease
            </button>
            <span className="text-2xl font-semibold text-gray-700">{count}</span>
            <button
              onClick={() => setCount((count) => count + 1)}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              Increase
            </button>
          </div>
          
          <div className="w-full max-w-md">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
