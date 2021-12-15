import './main.css';
import React from "react";

const Main = (element) => {
    return (
        <main className={'main'}>
            <div className="main__container">
                {element}
            </div>
        </main>
    )
}

export default Main;