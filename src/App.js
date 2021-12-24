import React, { createContext, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

export const AppContext = createContext(null)

function App() {
    const [isAuth, setIsAuth] = useState(false)

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
