import React, { useContext, useEffect, useState } from 'react'
import './ArticlePage.css'
import { AppContext } from '../../App'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { getData } from '../../api'
import PageError from '../../components/PageError/PageError'

const ArticlePage = () => {
    const { isAuth } = useContext(AppContext)
    const [article, setArticle] = useState({})
    let { id } = useParams()

    useEffect(() => {
        getData(`article/${id}`).then(res => setArticle(res))
    }, [id])

    if (!article) {
        return <PageError error={'Not found'}/>
    }

    if (!isAuth && article.private) {
        return <PageError error={'Not authorized'}/>
    }

    return (
        <div className={'article__container container'}>
            <div className={'article article-page'}>
                <h2 className={'article__title'}>{article.title}</h2>
                <img className={'article__image'} src={article.imageSrc} alt={'articleImage'}/>
                <p className={'article__description'}>{article.description}{article.text}</p>
                <Link to="/"><Button class={'button'} text='Назад'/></Link>
            </div>
        </div>
    )
}

export default ArticlePage
