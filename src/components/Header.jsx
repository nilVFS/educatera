import { Link, NavLink } from "react-router-dom"


export default function Header() {

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline"
    }

    return (
        <header>
            <Link className="site-logo" to="/home">EDUCATERA</Link>
            <nav>
                <NavLink to="/home" style={({isActive}) => isActive ? activeStyle : null}>Главная</NavLink>
                <NavLink to="/groups" style={({isActive}) => isActive ? activeStyle : null}>Группы</NavLink>
                <NavLink to="/about" style={({isActive}) => isActive ? activeStyle : null}>Профиль</NavLink>
            </nav>
        </header>
    )
}
