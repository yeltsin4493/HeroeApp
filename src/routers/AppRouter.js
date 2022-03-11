import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'

export const AppRouter = () => {
    return (
        <div>
            {/* <h1>Welcome to React Router!</h1> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path='/*' element={<DashboardRoutes />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
