import { Link } from "react-router-dom"

export default function Welcome() {
  return (
    <div id="welcome">
        <Link className="welcome-title" to="/home">EDUCATERA</Link>
    </div>
  )
}
