import React from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="title">
                    <Link to="/" className="title">
                        myHabr
                    </Link>
                </h1>
                <ul className="nav">
                    <li className="nav__item">
                        <NavLink to="/" className="nav__link">
                            Главная
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/login" className="nav__link">
                            Войти
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/register" className="nav__link">
                            Регистрация
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
