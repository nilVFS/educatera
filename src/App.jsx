import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home';
import Welcome from './pages/Welcome';

function App() {
  const [isWelcomeShown, setIsWelcomeShown] = useState(true);

  function toggleWelcomeScreen() {
    setIsWelcomeShown(prevIsShown => !prevIsShown)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* {
          isWelcomeShown ?
          <Welcome onClick={toggleWelcomeScreen} /> : 
          <Home />
        } */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
