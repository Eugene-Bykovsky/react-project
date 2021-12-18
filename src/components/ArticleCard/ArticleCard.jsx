import React from 'react'
import './ArticleCard.css'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

const ArticleCard = ({ article }) => {
    const { id, title, imageSrc, description } = article
    return (
        <div className="article">
            <Link className={'article__link'} to={`article/${id}`}><h2>{title}</h2></Link>
            <img src={imageSrc} alt={'articleImage'}/>
            <p>{description}</p>
            <Link to={`article/${id}`}><Button text='Читать далее'/></Link>
        </div>
    )
}

export default ArticleCard