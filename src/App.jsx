import { useState } from 'react'
import Home from './pages/Home';
import Welcome from './pages/Welcome';

function App() {
  const [isWelcomeShown, setIsWelcomeShown] = useState(true);

  function toggleWelcomeScreen() {
    setIsWelcomeShown(prevIsShown => !prevIsShown)
  }

  return (
    <>
      {
        isWelcomeShown ?
        <Welcome onClick={toggleWelcomeScreen} /> : 
        <Home />
      }
    </>
  )
}

export default App
