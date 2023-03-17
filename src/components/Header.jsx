import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link className="site-logo" to="/">EDUCATERA</Link>
            <nav>
                <Link to="/">Главная</Link>
                <Link to="#">Группы</Link>
                <Link to="#">Профиль</Link>
            </nav>
        </header>
    )
}
