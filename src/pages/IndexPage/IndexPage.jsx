import React, { useContext } from 'react'
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { AppContext } from '../../App'


const IndexPage = () => {
    const {articles} = useContext(AppContext)

    return (
        <div>
            <h1>Статьи</h1>
            {articles.map((article) => {
                return <ArticleCard key={article.id} article={article}/>
            })}
        </div>
    )
}

export default IndexPage;