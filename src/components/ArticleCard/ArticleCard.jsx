import React from 'react';
import './ArticleCard.css'
import { useNavigate } from 'react-router'

const ArticleCard = ({article}) => {
    const {id, title, imageSrc, description} = article
    let navigate = useNavigate()
    return (
        <div className="article">
            <h2>{title}</h2>
            <img src={imageSrc} alt={'articleImage'}/>
            <p>{description}</p>
            <button onClick={() => navigate(`article/${id}`)}>Читать далее</button>
        </div>
    )
}

export default ArticleCard;