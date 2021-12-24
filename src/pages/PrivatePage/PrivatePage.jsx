import React, { useContext, useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import './PrivatePage.css'
import Table from '../../components/Table/Table'
import { getArticles } from '../../api'
import { AppContext } from '../../App'
import PageError from '../../components/PageError/PageError'

const PrivatePage = () => {
    const { isAuth } = useContext(AppContext)
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then(res => setArticles(res))
    }, [])

    if (!isAuth) {
        return <PageError error={'Not authorized'}/>
    }

    return (
        <div className={'private-page-container container'}>
            <div className="title-bar">
                <h2 className="title-bar__title">Административная панель</h2>
                <Button class="button title-bar__button" text={'Новая статья'}/>
            </div>
            <Table arr={articles}/>
        </div>
    )
}

export default PrivatePage