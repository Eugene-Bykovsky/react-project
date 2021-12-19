import React, { useContext } from 'react'
import './ArticlePage.css'
import { AppContext } from '../../App'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'

const ArticlePage = () => {
    const { articles, isAuth } = useContext(AppContext)
    let { id } = useParams()
    const article = articles.find((item) => item.id === Number(id))

    if (!article) {
        return (
            <div className={'article__container container'}>
                <h2>Такой страницы не существует</h2>
                <Link to="/"><Button text={'На главную'}/></Link>
            </div>
        )
    }

    if (!isAuth && article.private) {
        return (
            <div className={'article__container container'}>
                <h2> Данная страница доступна только авторизованным пользователям </h2>
                <Link to="/"><Button text={'На главную'}/></Link>
            </div>
        )
    }

    return (
        <div className={'article__container container'}>
            <div className={'article article-page'}>
                <h2 className={'article__title'}>{article.title}</h2>
                <img className={'article__image'} src={article.imageSrc} alt={'articleImage'}/>
                <p className={'article__description'}>{article.description}{article.text}</p>
                <Link to="/"><Button text='Назад'/></Link>
            </div>
        </div>
    )
}

export default ArticlePage
