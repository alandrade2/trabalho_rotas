import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


export default function Header() {

    return (
    <div className="menu1">     
        <nav>
            <ul>
                <li className="m0" > <Link to="/"> MENU </Link> </li>
                <li className="m0" > <Link to="/muscular"> VOLTAR </Link> </li>
                <li className="m1" > <Link to="#"> 3.4.1-BÍCEPS </Link> </li>
                <li className="m2" > <Link to="#"> 3.4.2-TRICEPIS </Link> </li>
                <li className="m3" > <Link to="/cutaneo"> 3.4.3-CUTÂNEOS </Link> </li>
                <li className="m4" > <Link to="#"> 3.4.4-PROFUNDOS </Link> </li>
            </ul>
        </nav>
    </div>
    )
}

