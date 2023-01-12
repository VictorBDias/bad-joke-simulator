import { useState } from 'react'
import sansBase from './assets/sans-base.png'
import idle from './assets/idle.gif'
import './App.css'

function App() {

  return (
    <div className="App">
   <img src={idle} style={{maxHeight: 200, maxWidth: 200}}></img>
    </div>
  )
}

export default App;