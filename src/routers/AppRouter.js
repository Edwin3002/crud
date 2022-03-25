import React from 'react'
import {BrowserRouter as Router, 
    Routes,
    Route,
    Navigate} 
    from 'react-router-dom';
import { Crud } from '../components/Crud';
import { Listar } from '../components/Listar';
import { Navbar } from '../components/Navbar';


export const AppRouter = () => {
    console.log('hola')
    return (
        <div>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Listar/>}/>
                    <Route path="/Crud" element={<Crud/>}/>
                    <Route path="/*" element={<Navigate to="/"/>}/>
                </Routes>
            </Router>
        </div>
    )
}
