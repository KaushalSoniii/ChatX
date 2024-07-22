import { useState } from 'react'
import './App.css'
import {Hero} from './components/Hero'
import {Navbar} from './components/Navbar'
import {ExistingCource} from './components/ExistingCource'
import {NewCource} from './components/NewCource'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <ExistingCource />
      <NewCource />
     
    </>
  )
}

export default App
