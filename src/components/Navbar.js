import React from 'react';
import { Link } from "react-router-dom";
import '../styles/navbar.css';

export const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <nav>
                    <p className='p'>Crud figuras</p>
                <Link className="link" to="/">Listar</Link>
                <br></br>
                <Link className="link" to="/Crud">Crud</Link>
                </nav>
            </div>
            <hr />
        </div >
    )
}
