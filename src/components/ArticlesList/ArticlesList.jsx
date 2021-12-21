import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../App'
import ArticleCard from '../ArticleCard/ArticleCard'
import './ArticleList.css'
import { getData } from '../../api'

const ArticlesList = () => {
    const { isAuth } = useContext(AppContext)
    const [articles, setArticles] = useState([])
    useEffect(() => {
        getData('article').then(res => setArticles(res))
    }, [])
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