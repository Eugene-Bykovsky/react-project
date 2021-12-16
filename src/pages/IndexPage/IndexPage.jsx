import React, { useContext } from 'react'
import Article from "../../components/Article/Article";
import { AppContext } from '../../App'


const IndexPage = () => {
    const {articles} = useContext(AppContext)

    return (
        <div>
            <h1>Статьи</h1>
            {articles.map((article) => {
                return <Article key={article.id} article={article}/>
            })}
        </div>
    )
}

export default IndexPage;