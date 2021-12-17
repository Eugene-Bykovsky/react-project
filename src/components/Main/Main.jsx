import './main.css';
import React from "react";
import MainRouter from '../MainRouter/MainRouter'

const Main = () => {
    return (
        <main className={'main'}>
            <div className="main__container">
                <MainRouter />
            </div>
        </main>
    )
}

export default Main;