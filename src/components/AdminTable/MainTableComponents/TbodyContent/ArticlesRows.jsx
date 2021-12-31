import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../Button/Button'

export const ArticlesRows = (props) => {
    const { arr } = props.arrayArticles
    const [action, setAction] = useState('')

    if (!action) {
        return (
            arr.map((item) => {
                return (
                    <tr className={'content-row'} key={item._id}>
                        <td className={'content-row__item col-title'}>{item.title}</td>
                        <td className={'content-row__item col-description'}>{item.description}</td>
                        <td className={'content-row__item col-actions'}>
                            <Button onClickFunc={() => setAction('create')} buttonClass={'button col-actions__button'} text={'Создать'}/>
                            <Link to={`/article/${item._id}`}>
                                <Button buttonClass={'button col-actions__button'} text={'Смотреть'}/>
                            </Link>
                            <Link to={`/#`}>
                                <Button buttonClass={'button col-actions__button'} text={'Удалить'}/>
                            </Link>
                        </td>
                    </tr>
                )
            })
        )
    }
    if (action === 'create') {
        return (
            <tr className={'content-row'}>
                <td className={'content-row__item col-title'}><input type="text"/></td>
                <td className={'content-row__item col-description'}><input type="text"/></td>
                <td className={'content-row__item col-actions'}>
                    <Link to={`/#`}>
                        <Button buttonClass={'button col-actions__button'} text={'Добавить'}/>
                    </Link>
                </td>
            </tr>
        )
    }
}