import { useState, useEffect } from 'react'
import './App.css'
import Choice from './components/choice/Choice'
import Header from './components/header/Header'


function App() {
  const saved = localStorage.getItem("dark");
  const InitialDarkMode = JSON.parse(saved);
  console.log(InitialDarkMode)
  const [dark, setDark] = useState( InitialDarkMode ? InitialDarkMode: false);

  const toggleHandler = () => {
    setDark(!dark);
  };

  useEffect(() => {
    localStorage.setItem("dark", dark);
  }, [dark]);

  return (
    <div className= {dark ? "App-dark" : "App"}>
      <Header toggleHandler = {toggleHandler} dark={dark}/>
      <Choice />
    </div>
  )
}

export default App
