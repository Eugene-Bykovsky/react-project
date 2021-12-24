import React from 'react'
import './Table.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Table = (articles) => {
    const { arr } = articles
    return (
        <table className="table">
            <thead>
            <tr className={'title-row'}>
                <th className={'title-row__item'}>Название</th>
                <th className={'title-row__item'}>Краткое описание</th>
                <th className={'title-row__item'}>Тескт</th>
            </tr>
            </thead>
            <tbody>
            {
                arr.map((item) => {
                    return (
                        <tr className={'content-row'} key={item._id}>
                            <td className={'content-row__item col-title'}>{item.title}</td>
                            <td className={'content-row__item col-description'}>{item.description}</td>
                            <td className={'content-row__item col-actions'}>
                                <Link to={`/article/${item._id}`}>
                                    <Button class={'button col-actions__button'} text={'Смотреть'}/>
                                </Link>
                                <Link to={`/#`}>
                                    <Button class={'button col-actions__button'} text={'Удалить'}/>
                                </Link>
                            </td>
                        </tr>
                    )

                })
            }
            </tbody>
        </table>
    )
}

export default Table