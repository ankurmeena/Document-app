import React from 'react'
import Backbone from './components/Backbone'
import Frontpage from './components/Frontpage'
function App() {
  return (
    <>
      <div className='relative w-full h-screen bg-indigo-950'>
        <Backbone />
        <Frontpage />
      </div>
    </>
  )
}

export default App
