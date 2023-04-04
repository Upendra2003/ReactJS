import React from 'react'
import './App.css'
import ShowEmoji from './ShowEmoji'

function App() {

  return (
    <>
      <div className="App ">
        <div className="heading text-center leading-10 bg-gray-400 p-6">
          <h1 className=' text-4xl'>🎰 Slot <span className=' font-bold italic text-black'>Machine</span>🎰</h1>
        </div>
        <div className=' text-center p-5'>
          <ShowEmoji x='😄' y='😄' z='😄' />
          <ShowEmoji x='😄' y='😄' z='🎅' />
          <ShowEmoji x='👎' y='👎' z='👎' />
          <ShowEmoji x='😄' y='🤔' z='🎅' />
          <ShowEmoji x='🔥' y='🤔' z='🎅' />
          <ShowEmoji x='💇' y='💇' z='💇' />
          <ShowEmoji x='😄' y='🔥' z='🎅' />
        </div>
      </div>
    </>
  )
}

export default App
