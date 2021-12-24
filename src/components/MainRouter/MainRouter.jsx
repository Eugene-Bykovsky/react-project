import React from 'react'
import { Routes, Route } from 'react-router-dom'
import IndexPage from '../../pages/IndexPage/IndexPage'
import AuthenticationForm from '../AuthenticationForm/AuthenticationForm'
import { Navigate } from 'react-router'
import ArticlePage from '../../pages/ArticlePage/ArticlePage'
import PrivatePage from '../../pages/PrivatePage/PrivatePage'

const MainRouter = () => {
    return (
        <Routes>
            <Route exact index element={<IndexPage/>}/>
            <Route path='/article/:id' element={<ArticlePage/>}/>
            <Route path='/user/:authPath' element={<AuthenticationForm/>}/>
            <Route path='/private' element={<PrivatePage/>}/>
            <Route path="*" element={<Navigate to='/'/>}/>
        </Routes>
    )
}

export default MainRouter
