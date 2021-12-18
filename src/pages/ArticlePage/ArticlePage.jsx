import React, {useContext} from 'react'
import './ArticlePage.css'
import {AppContext} from '../../App'
import {useParams} from 'react-router'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'

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
        <div className={'article'}>
            <h2>{article.title}</h2>
            <img src={article.imageSrc} alt={'articleImage'} />
            <p>{article.description}</p>
            <p>{article.text}</p>
            <Link to="/"><Button text='Назад'/></Link>
        </div>
    )
}

export default ArticlePage
