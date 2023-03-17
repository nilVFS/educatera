import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Layout from "./components/Layout";
import Home from './pages/Home';
import Welcome from './pages/Welcome';

import "../server.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
