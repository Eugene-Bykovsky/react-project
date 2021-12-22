import React, { useContext } from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import { AppContext } from '../../App'

const publicLinks = [
    {
        path: '/',
        title: 'Главная'
    },
    {
        path: '/login',
        title: 'Войти'
    },
    {
        path: '/register',
        title: 'Регистрация'
    }
]

const privateLinks = [
    {
        path: '/',
        title: 'Главная'
    },
    {
        path: '/private',
        title: 'Личный кабинет'
    },
    {
        path: '/',
        title: 'Выйти'
    },
]

const Header = () => {
    const { isAuth, setIsAuth } = useContext(AppContext)
    const links = isAuth ? privateLinks : publicLinks

    return (
        <header className='header'>
            <div className='header__container container'>
                <h1 className='title'>
                    <Link to='/' className='title__link'>
                        myHabr
                    </Link>
                </h1>
                <ul className="nav">
                    {links.map(link => {
                        return (
                            <li key={link.title}>
                                {(link.title === 'Выйти') && <Link className="nav__link" onClick={() => setIsAuth(false)} to={link.path}>{link.title}</Link>}
                                {(link.title !== 'Выйти') && <NavLink className="nav__link" to={link.path}>{link.title}</NavLink>}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </header>
    )
}

export default Header
