import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";

export default function Home() {

    const [user, setUser] = useState({})

    useEffect(() => {
        fetch("/api/users/2")
        .then(res => res.json())
        .then(data => setUser(data.users))
    }, [])

    return (
        <section id="home">
            <div className="home-content">
                <div className="home-news-wrapper">
                    <div className="home-news"></div>
                </div>
            </div>
            <UserCard user={user}/>
        </section>
    )
}
