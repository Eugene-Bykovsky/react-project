import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

const PageError = (props) => {
    let titleError
    switch (props.error) {
        case 'Not found':
            titleError = 'Такой страницы не существует'
            break
        case 'Not authorized':
            titleError = 'Данная страница доступна только авторизованным пользователям'
            break
        default:
            titleError = 'Неизвестная ошибка'
    }

    return (
        <div className={'article__container container'}>
            <h2>{titleError}</h2>
            <Link to="/"><Button buttonClass={'button'} text={'На главную'}/></Link>
        </div>
    )
}

export default PageError