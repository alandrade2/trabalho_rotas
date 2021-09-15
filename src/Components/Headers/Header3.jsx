import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


export default function Header() {

    return (
    <div className="menu1">     
        <nav>
            <ul>
                <li className="m0" > <Link to="/"> MENU </Link> </li>
                <li className="m0" > <Link to="/superior"> VOLTAR </Link> </li>
                <li className="m1" > <Link to="#"> 3.4.3.1-MEDIAL </Link> </li>
                <li className="m2" > <Link to="#"> 3.4.3.2-LATERAL </Link> </li>
                <li className="m3" > <Link to="#"> 3.4.3.3-TENDÕES </Link> </li>
                <li className="m4" > <Link to="#"> 3.4.3.4-EXTENSOR </Link> </li>
                <li className="m4" > <Link to="#"> 3.4.3.5-ROTADORES </Link> </li>
            </ul>
        </nav>
    </div>
    )
}

