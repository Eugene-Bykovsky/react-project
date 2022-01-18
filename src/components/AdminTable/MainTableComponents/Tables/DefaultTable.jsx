import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../Button/Button'
import { adminContext } from '../../../../pages/PrivatePage/PrivatePage'
import { deleteArticleById, getArticles } from '../../../../api'

export const DefaultTable = () => {
    const { setAction, articles, setArticles } = useContext(adminContext)
    const deleteArticle = async (id) => {
        await deleteArticleById(id)
        await getArticles().then(res => setArticles(res))
    }
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
            {
                articles.map((item) => {
                    return (
                        <tr className={'content-row'} key={item._id}>
                            <td className={'content-row__item col-title'}>{item.title}</td>
                            <td className={'content-row__item col-description'}>{item.description}</td>
                            <td className={'content-row__item col-actions'}>
                                <Link to={`/article/${item._id}`}>
                                    <Button buttonClass={'button col-actions__button'} text={'Смотреть'}/>
                                </Link>
                                <Button onClickFunc={() => deleteArticle(item._id)} buttonClass={'button col-actions__button'} text={'Удалить'}/>
                            </td>
                        </tr>
                    )
                })
            }
            <tr className={'content-row'}>
                <td colSpan={3} className={'content-row__item col-action-create'}>
                    <Button onClickFunc={() => setAction('create')} buttonClass={'button col-actions__button-create'}
                            text={'Создать новую статью'}/>
                </td>
            </tr>
            </tbody>
        </table>
    )

}