import React from 'react'
import { Routes, Route, Link } from "react-router"
import Home from './pags/Home'
import About from './pags/About'
import NotFound from './pags/NotFound'
import Data from './pags/Data'
function App() {
  return (
    <div>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/data"}>Data</Link>
        <Link to={"/about"}>About</Link>

      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/data' element={<Data />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App
