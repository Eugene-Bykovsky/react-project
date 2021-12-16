import React from 'react';
import './Article.css'

const Article = ({article}) => {
    const {title, imageSrc, description} = article
    return (
        <div className="article">
            <h2>{title}</h2>
            <img src={imageSrc} alt={'articleImage'}/>
            <p>{description}</p>
            <button>Читать далее</button>
        </div>
    )
}

export default Article;