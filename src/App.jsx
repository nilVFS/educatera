import { useState } from 'react'
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
        ""
      }
    </>
  )
}

export default App
