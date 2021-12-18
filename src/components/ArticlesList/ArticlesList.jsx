import React, { useContext } from 'react'
import { AppContext } from '../../App'
import ArticleCard from '../ArticleCard/ArticleCard'

const ArticlesList = () => {
    const {articles} = useContext(AppContext)

    return (
        <div className={articles}>
            {articles.map((article) => {
                return <ArticleCard key={article.id} article={article}/>
            })}
        </div>
    )
}

export default ArticlesList