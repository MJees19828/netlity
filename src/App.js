import React from 'react'
import NavBar from './component/NavBar'
import Home from './component/Home'
import About from './component/About'
import{Route, Routes} from"react-router-dom"
import Services from "./component/Services"

function App() {
  return(
    <> 

    <NavBar/>
    <Routes>
    
    <Route path='/'element={<Home/>}/>
    <Route path='/about'element={<About/>}/>
    <Route path='/services'element={<Services/>}/>
  
    
    </Routes>
    </>
  )
}

export default App;
