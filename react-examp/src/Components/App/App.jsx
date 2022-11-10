import React, { useEffect } from 'react'
import Login from '../Login/Login'
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header';
import Error from '../Error/Error';
import Logout from '../Logout/Logout';



const App = () => {
    const navigate = useNavigate()


    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/')
        }
    }, [navigate]);

    return (
        <>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='*' element={<Error />} />
                <Route path='/header' element={<Header />} />
            </Routes>
        </>
    )
}

export default App