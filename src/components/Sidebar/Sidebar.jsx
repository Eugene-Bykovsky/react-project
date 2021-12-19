import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <div className="sidebar__item">
                <header className='sidebar__title'>
                    ЛУЧШИЕ СТАТЬИ
                </header>
                <ul className="sidebar__list">
                    <Link to='/#'>Статья 1</Link>
                    <Link to='/#'>Статья 2</Link>
                    <Link to='/#'>Статья 3</Link>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar