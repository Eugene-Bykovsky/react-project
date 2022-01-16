import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../../Button/Button'
import './ArticlesTbody.css'
import Select from 'react-select'
import { createArticle, getArticles } from '../../../../api'
import { adminContext } from '../../../../pages/PrivatePage/PrivatePage'


export const ArticlesTbodyDefault = () => {
    const { setAction, articles } = useContext(adminContext)
    return (
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
                            <Link to={`/#`}>
                                <Button buttonClass={'button col-actions__button'} text={'Удалить'}/>
                            </Link>
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
    )
}

export const ArticlesTbodyCreateForm = () => {
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
    )
}