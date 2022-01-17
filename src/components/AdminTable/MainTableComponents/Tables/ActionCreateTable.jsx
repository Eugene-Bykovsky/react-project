import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../../Button/Button'
import { adminContext } from '../../../../pages/PrivatePage/PrivatePage'
import Select from 'react-select'
import { createArticle, getArticles } from '../../../../api'

export const ActionCreateTable = () => {
    const navigate = useNavigate()
    const { setAction, setArticles } = useContext(adminContext)
    const [articleTitle, setArticleTitle] = useState('')
    const [articleImage, setArticleImage] = useState('')
    const [articleText, setArticleText] = useState('')
    const [articleDescription, setArticleDescription] = useState('')
    const [articleCategories, setArticleCategories] = useState([])

    const SelectCategories = () => {
        const selectOptions = [
            { value: 'private', label: 'Приватная' },
            { value: 'best', label: 'Лучшая' }
        ]

        const handleChange = (e) => {
            setArticleCategories(Array.isArray(e) ? e.map(x => x.value) : [])
        }

        return (
            <Select isMulti={true} options={selectOptions}
                    value={selectOptions.filter(obj => articleCategories.includes(obj.value))} onChange={handleChange}/>
        )
    }

    const submitNewArticleData = async (e) => {
        e.preventDefault()
        await createArticle(articleTitle, articleImage, articleDescription, articleText, articleCategories)
        setArticleTitle('')
        setArticleImage('')
        setArticleDescription('')
        setArticleText('')
        setArticleCategories([])
        setAction('')
        getArticles().then(res => setArticles(res))
        navigate('/private')
    }
    return (
        <table className="table">
            <thead>
            <tr className={'title-row'}>
                <th className={'title-row__item'}>Название</th>
                <th className={'title-row__item'}>Картинка</th>
                <th className={'title-row__item'}>Описание</th>
                <th className={'title-row__item'}>Текст</th>
                <th className={'title-row__item'}>Категории</th>
                <th className={'title-row__item'}>Действие</th>
            </tr>
            </thead>
            <tbody>
            <tr className={'content-row'}>
                <td className={'content-row__item col-title'}>
                    <input className={'article-input article-title'}
                           type="text"
                           onChange={(e) => setArticleTitle(e.target.value)}
                    />
                </td>
                <td className={'content-row__item col-image'}>
                    <input className={'article-input article-image'}
                           type="text"
                           onChange={(e) => setArticleImage(e.target.value)}
                           alt={'path of image'}
                    />
                </td>
                <td className={'content-row__item col-description'}>
                    <input
                        className={'article-input article-description'}
                        type="text"
                        onChange={(e) => setArticleDescription(e.target.value)}
                    />
                </td>
                <td className={'content-row__item col-text'}>
                    <input className={'article-input article-text'}
                           type="text"
                           onChange={(e) => setArticleText(e.target.value)}
                    />
                </td>
                <td>
                    <SelectCategories/>
                </td>
                <td className={'content-row__item col-actions'}>
                    <Link to={`/#`}>
                        <Button onClickFunc={submitNewArticleData} buttonClass={'button col-actions__button'}
                                text={'Добавить'}/>
                    </Link>
                </td>
            </tr>
            <tr className={'content-row'}>
                <td colSpan={6} className={'content-row__item col-action-back'}>
                    <Button onClickFunc={() => setAction('')} buttonClass={'button col-actions__button-back'}
                            text={'Вернуться к списку статей'}/>
                </td>
            </tr>
            </tbody>
        </table>
    )
}