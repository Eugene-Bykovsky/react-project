import React, { useContext } from 'react'
import { AppContext } from '../../App'
import ArticleCard from '../ArticleCard/ArticleCard'

const ArticlesList = () => {
    const {articles} = useContext(AppContext)
    const {isAuth} = useContext(AppContext)
    const sortedArticles = articles.filter(item => item.private === false)
    console.log(sortedArticles)

    if (isAuth) {
        return (
            <div className={articles}>
                {articles.map((article) => {
                    return <ArticleCard key={article.id} article={article}/>
                })}
            </div>
        )
    } else {
        return (
            <div className={articles}>
                {sortedArticles.map((article) => {
                    return <ArticleCard key={article.id} article={article}/>
                })}
            </div>
        )
    }

}

export default ArticlesList