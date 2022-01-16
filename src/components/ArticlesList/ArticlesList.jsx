import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../App'
import ArticleCard from '../ArticleCard/ArticleCard'
import './ArticleList.css'
import { getArticles } from '../../api'

const ArticlesList = () => {
    const { isAuth } = useContext(AppContext)
    const [articles, setArticles] = useState([])
    useEffect(() => {
        getArticles().then(res => setArticles(res))
    }, [])
    const sortedArticles = articles.filter(item => !item.categories.includes('private'))

    if (!articles.length) {
        return (
            <div>
                <h1>Загрузка...</h1>
            </div>
        )
    }

    if (isAuth) {
        return (
            <div className='articles'>
                {articles.map((article) => {
                    return <ArticleCard key={article._id} article={article}/>
                })}
            </div>
        )
    } else {
        return (
            <div className='articles'>
                {sortedArticles.map((article) => {
                    return <ArticleCard key={article._id} article={article}/>
                })}
            </div>
        )
    }

}

export default ArticlesList