import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AppContext } from '../../App'
import './AuthenticationForm.css'
import IndexPage from '../../pages/IndexPage/IndexPage'
import { Link } from 'react-router-dom'
import { getData } from '../../api'

const AuthenticationForm = () => {
    const { setIsAuth } = useContext(AppContext)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const { authPath } = useParams()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const usersData = await getData('user')
        const user = usersData.find((item) => item.login === login)
        if (!user) {
            return alert('no such user!')
        }
        if (user.password !== password) {
            return alert('error password!')
        }
        setIsAuth(true)
        setLogin('')
        setPassword('')
        navigate('/')
    }
    const isLogin = authPath === 'login'
    const isRegister = authPath === 'register'
    const formTitle = isLogin ? 'Войти' : 'Регистрация'
    const formButton = isLogin ? 'Войти' : 'Регистрация'

    if (!isLogin && !isRegister) {
        return <IndexPage/>
    } else {
        return (
            <div className={'form-container container'}>
                <form className="form" onSubmit={handleSubmit}>
                    <h2 className="form__title">{formTitle}</h2>
                    <div className="form__login-input-wrapper">
                        <label
                            className="form__login-input-label"
                            htmlFor="login-input"
                        >
                            Логин
                        </label>
                        <input
                            required
                            className="form__login-input"
                            type="text"
                            id="login-input"
                            placeholder="Введите логин"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                        <span className="form__error"/>
                    </div>
                    <div className="form__password-input-wrapper">
                        <label
                            className="form__password-input-label"
                            htmlFor="password-input"
                        >
                            Пароль
                        </label>
                        <input
                            required
                            className="form__password-input"
                            type="password"
                            id="password-input"
                            placeholder="Введите пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="form__error"/>
                    </div>
                    {!isLogin && (
                        <div className="form__checkbox-wrapper">
                            <input
                                className="form__checkbox"
                                type="checkbox"
                                id="input-checkbox"
                            />
                            <div className="form__checkbox-mark"/>
                            <label
                                className="form__checkbox-label"
                                htmlFor="input-checkbox"
                            >
                                Я согласен с{' '}
                                <Link to="/#">Правилами пользования приложения</Link>
                            </label>
                            <span className="form__error"/>
                        </div>
                    )}
                    <div className="form__button-wrapper">
                        <button className="form__button">{formButton}</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AuthenticationForm
