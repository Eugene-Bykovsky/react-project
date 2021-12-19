import React from 'react'
import ArticlesList from '../../components/ArticlesList/ArticlesList'
import Sidebar from '../../components/Sidebar/Sidebar'
import './IndexPage.css'


const IndexPage = () => {
    return (
        <div className={'articles__container container'}>
            <ArticlesList/>
            <Sidebar/>
        </div>
    )
}

export default IndexPage