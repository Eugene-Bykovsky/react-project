import { Routes, Route } from 'react-router-dom'
import IndexPage from '../../pages/IndexPage/IndexPage'
import AuthenticationForm from '../AuthenticationForm/AuthenticationForm'
import React from 'react'

const MainRouter = () => {
    return (
        <Routes>
            <Route index exact element={<IndexPage />} />
            <Route path={':authPath'} element={<AuthenticationForm />} />
            <Route path={':authPath'} element={<AuthenticationForm />} />
        </Routes>
    )
}

export default MainRouter
