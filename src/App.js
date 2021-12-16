import React, { createContext, useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import MainRouter from './components/MainRouter/MainRouter'
import {articlesData} from "./databases/database";

export const AppContext = createContext(null)

function App() {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        setArticles(articlesData)
    }, [])

    return (
        <AppContext.Provider value={{articles, setArticles}}>
            <div className={'App'}>
                <Header />
                {Main(<MainRouter />)}
            </div>
        </AppContext.Provider>
    )
}

export default App
