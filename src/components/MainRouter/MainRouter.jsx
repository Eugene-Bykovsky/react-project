import { Routes, Route } from 'react-router-dom'
import IndexPage from '../../pages/IndexPage/IndexPage'
import AuthenticationForm from '../AuthenticationForm/AuthenticationForm'
import React from 'react'
import { Navigate } from 'react-router'

const MainRouter = () => {
    return (
        <Routes>
            <Route exact index element={<IndexPage />} />
            <Route path={':authPath'} element={<AuthenticationForm />} />
            <Route path="*" element={<Navigate to='/'/>}/>
        </Routes>
    )
}

export default MainRouter
