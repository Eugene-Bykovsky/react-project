import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import { getArticles } from '../../api'

const Sidebar = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        getArticles().then(res => setArticles(res))
    }, [])
    const sortedArticles = articles.filter(item => item.best === true)

    return (
        <aside className='sidebar'>
            <div className="sidebar__item sidebar-block">
                <h2 className={'sidebar-block__title'}>ЛУЧШИЕ СТАТЬИ</h2>
                <ul className="sidebar-block__list article-list-block">
                    {sortedArticles.map(article => {
                        return (
                            <li className={'article-list-block__item'} key={article._id}>
                                <Link className={'article-list-block__link'} to={`article/${article._id}`}>{article.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar