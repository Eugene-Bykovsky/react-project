import React, {useContext} from 'react'
import './ArticlePage.css'
import {AppContext} from '../../App'
import {useParams} from 'react-router'
import { Link } from 'react-router-dom'

const ArticlePage = () => {
    const {articles} = useContext(AppContext)
    let {id} = useParams();
    const article = articles.find((item) => item.id === Number(id))

    if (!article) {
        return (
            <div>
                <h1>Not Found</h1>
                <Link to="/">Go To Main</Link>
            </div>
        )
    }
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
