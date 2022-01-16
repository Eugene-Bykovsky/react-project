import React, { useContext, useEffect, useState } from 'react'
import './ArticlePage.css'
import { AppContext } from '../../App'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { getArticleById } from '../../api'
import PageError from '../../components/PageError/PageError'

const ArticlePage = () => {
    const { isAuth } = useContext(AppContext)
    const [article, setArticle] = useState({})
    let { id } = useParams()

    useEffect(() => {
        getArticleById(id).then(res => setArticle(res))
    }, [id])

    if (JSON.stringify(article) === '{}') {
        return (
            <div>
                <h1>Загрузка...</h1>
            </div>
        )
    }

    if (!article) {
        return <PageError error={'Not found'}/>
    }

    if (!isAuth && article.categories.includes('private')) {
        console.log(article)
        return <PageError error={'Not authorized'}/>
    }

    return (
        <div className={'article__container container'}>
            <div className={'article article-page'}>
                <h2 className={'article__title'}>{article.title}</h2>
                <img className={'article__image'} src={article.imageSrc} alt={'articleImage'}/>
                <p className={'article__description'}>{article.description}{article.text}</p>
                <Link to="/"><Button buttonClass={'button'} text='Назад'/></Link>
            </div>
        </div>
    )
}

export default ArticlePage
