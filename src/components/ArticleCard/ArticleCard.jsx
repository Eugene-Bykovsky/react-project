import React from 'react'
import './ArticleCard.css'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

const ArticleCard = ({ article }) => {
    const { id, title, imageSrc, description } = article
    return (
        <div className="articles__item article">
            <Link className={'article__link'} to={`article/${id}`}>
                <h2 className={'article__title'}>
                    {title}
                </h2>
            </Link>
            <img className={'article__image'} src={imageSrc} alt={'articleImage'}/>
            <p className={'article__description'}>
                {description}
            </p>
            <Link to={`article/${id}`}>
                <Button text='Читать далее'/>
            </Link>
        </div>
    )
}

export default ArticleCard