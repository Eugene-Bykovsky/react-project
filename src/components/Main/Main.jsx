import './main.css';
import React from "react";

const Main = (content) => {
    return (
        <main className={'main'}>
            <div className="main__container">
                {content}
            </div>
        </main>
    )
}

export default Main;