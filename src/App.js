import React, { createContext, useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { getData } from './api'

export const AppContext = createContext(null)

function App() {
    const [articles, setArticles] = useState([])
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        getData('article').then(res => setArticles(res))
    }, [])

    if (!articles.length) {
        return (
            <div>
                <h1>Загрузка...</h1>
            </div>
        )
    }

    return (
        <AppContext.Provider value={{ isAuth, setIsAuth }}>
            <div className={'App'}>
                <Header/>
                <Main/>
            </div>
        </AppContext.Provider>
    )
}

export default App
