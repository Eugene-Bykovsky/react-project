import React, {useContext} from 'react'
import './ArticlePage.css'
import {AppContext} from '../../App'
import {useParams} from 'react-router'

const ArticlePage = () => {
    const {articles} = useContext(AppContext)
    let {id} = useParams();
    const article = articles.find((item) => item.id === Number(id))

    return (
        <div>
            <img src={article.imageSrc} alt={'articleImage'} />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p>{article.text}</p>
        </div>
    )
}

export default ArticlePage