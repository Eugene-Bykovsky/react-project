import React, { useState } from 'react'
import { useParams } from 'react-router'
import './AuthenticationForm.css'

const AuthenticationForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handlerSubmit = (e) => {
        e.preventDefault()
    }

    let { authPath } = useParams()
    const isLogin = authPath === 'login'
    const formTitle = isLogin ? 'Войти' : 'Регистрация'
    const formButton = isLogin ? 'Войти' : 'Регистрация'

    return (
        <form className="form" onSubmit={handlerSubmit}>
            <h1 className="form__title">{formTitle}</h1>
            <div className="form__email-input-wrapper">
                <label
                    className="form__email-input-label"
                    htmlFor="email-input"
                >
                    Email
                </label>
                <input
                    className="form__email-input"
                    type="text"
                    id="email-input"
                    placeholder="Введите email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <span className="form__error" />
            </div>
            <div className="form__password-input-wrapper">
                <label
                    className="form__password-input-label"
                    htmlFor="password-input"
                >
                    Пароль
                </label>
                <input
                    className="form__password-input"
                    type="password"
                    id="password-input"
                    placeholder="Введите пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <span className="form__error" />
            </div>
            {!isLogin && (
                <div className="form__checkbox-wrapper">
                    <input
                        className="form__checkbox"
                        type="checkbox"
                        id="input-checkbox"
                    />
                    <div className="form__checkbox-mark" />
                    <label
                        className="form__checkbox-label"
                        htmlFor="input-checkbox"
                    >
                        Я согласен с{' '}
                        <a href="/#">Правилами пользования приложения</a>
                    </label>
                    <span className="form__error" />
                </div>
            )}
            <div className="form__button-wrapper">
                <button className="form__button">{formButton}</button>
            </div>
        </form>
    )
}

export default AuthenticationForm
