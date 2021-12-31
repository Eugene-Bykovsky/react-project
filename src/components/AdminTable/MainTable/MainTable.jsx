import React from 'react'
import './MainTable.css'
import { ArticlesRows } from '../MainTableComponents/TbodyContent/ArticlesRows'

const MainTable = (articles) => {
    return (
        <table className="table">
            <thead>
            <tr className={'title-row'}>
                <th className={'title-row__item'}>Название</th>
                <th className={'title-row__item'}>Краткое описание</th>
                <th className={'title-row__item'}>Действия</th>
            </tr>
            </thead>
            <tbody>
                <ArticlesRows arrayArticles={articles}/>
            </tbody>
        </table>
    )
}

export default MainTable