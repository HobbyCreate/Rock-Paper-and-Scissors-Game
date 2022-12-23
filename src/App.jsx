import { useState } from 'react'
import './App.css'
import Choice from './components/choice/Choice'
import Header from './components/header/Header'

function App() {

  return (
    <div className="App">
      <Header />
      <Choice />
    </div>
  )
}

export default App
