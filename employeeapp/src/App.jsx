import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Add from './components/Add'
import View from './components/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <br /><br />
     <Routes>
      <Route path='/Add' element={<Add/>}/>
      <Route path='/View' element={<View/>}/>

      
     </Routes>

       <NavBar></NavBar> 
    </>

  )
}

export default App
