import React, { useContext } from 'react'
import { AppContext } from '../../App'
import ArticleCard from '../ArticleCard/ArticleCard'
import './ArticleList.css'

const ArticlesList = () => {
    const { articles } = useContext(AppContext)
    const { isAuth } = useContext(AppContext)
    const sortedArticles = articles.filter(item => item.private === false)

    if (isAuth) {
        return (
            <div className='articles'>
                {articles.map((article) => {
                    return <ArticleCard key={article.id} article={article}/>
                })}
            </div>
        )
    } else {
        return (
            <div className='articles'>
                {sortedArticles.map((article) => {
                    return <ArticleCard key={article.id} article={article}/>
                })}
            </div>
        )
    }

}

export default ArticlesList