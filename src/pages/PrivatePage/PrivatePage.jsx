import React, { createContext, useContext, useEffect, useState } from 'react'
import './PrivatePage.css'
import MainTable from '../../components/AdminTable/MainTable/MainTable'
import { getArticles } from '../../api'
import { AppContext } from '../../App'
import PageError from '../../components/PageError/PageError'

export const adminContext = createContext(null)

const PrivatePage = () => {
    const { isAuth } = useContext(AppContext)
    const [articles, setArticles] = useState([])
    const [action, setAction] = useState('')

    useEffect(() => {
        getArticles().then(res => setArticles(res))
    }, [])

    if (!articles.length) {
        return (
            <div className={'private-page-container container'}>
                <h1>Загрузка...</h1>
            </div>
        )
    }

    if (!isAuth) {
        return <PageError error={'Not authorized'}/>
    }

    return (
        <adminContext.Provider value={{ action, setAction, articles, setArticles }}>
            <div className={'private-page-container container'}>
                <div className="title-bar">
                    <h2 className="title-bar__title">Административная панель</h2>
                </div>
                <MainTable arr={articles}/>
            </div>
        </adminContext.Provider>
    )
}

export default PrivatePage