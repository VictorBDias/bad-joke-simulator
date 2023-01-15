import { useState } from 'react'
import idle from './assets/idle.gif'
import './App.css'

function App() {

  return (
    <div className="App">
      <a href="https://github.com/VictorBDias"><img style={{maxHeight: 20, position: 'absolute', top: 24, left: 24}} src="https://fontmeme.com/permalink/230113/0ed82b0f1c55ad4987393aa0b421b259.png" alt="name-lv-cap" border="0"/> </a> 
      <div style={{display: 'grid'}}>
        <img src={idle} style={{maxHeight: 200, maxWidth: 200, margin: 24}}></img>
      </div>
    </div>
  )
}

export default App;