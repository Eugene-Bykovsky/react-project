import React, { useContext } from 'react'
import './MainTable.css'
import {
    ArticlesTbodyCreateForm, ArticlesTbodyDefault
} from '../MainTableComponents/TbodyContent/ArticlesTbody'
import { ArticlesHeadCreateForm, ArticlesHeadDefault } from '../MainTableComponents/TheadContent/ArticlesHead'
import { adminContext } from '../../../pages/PrivatePage/PrivatePage'


const MainTable = () => {
    const {action, articles} = useContext(adminContext)
    return (
        <table className="table">
            {/*THEAD*/}
            {!action && <ArticlesHeadDefault/>}
            {action === 'create' && <ArticlesHeadCreateForm/>}
            {/*TBODY*/}
            {!action && <ArticlesTbodyDefault arrayArticles={articles}/>}
            {action === 'create' && <ArticlesTbodyCreateForm/>}
        </table>
    )
}

export default MainTable