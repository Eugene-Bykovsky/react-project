import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import MainRouter from './components/MainRouter/MainRouter'

function App() {
    return (
        <div className={'App'}>
            <Header />
            {Main(<MainRouter />)}
        </div>
    )
}

export default App
