import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/'
import Register from './pages/Register/'
import Dashboard from './pages/Dashboard/'
import EventsPage from './pages/EventsPage/'

export default function RoutesFunc() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/events' element={<EventsPage/>} />
            </Routes>
        </BrowserRouter>
    );
}