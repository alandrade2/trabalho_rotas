import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


export default function Header() {
 
    return (
    <div className="menu1">     
        <nav>
            <ul>
                <li class="m0" > <Link to="/"> VOLTAR </Link> </li>
                <li class="m1" > <Link to="#"> 3.1-CABEÇA </Link> </li>
                <li class="m2" > <Link to="#"> 3.2-PESCOÇO </Link> </li>
                <li class="m3" > <Link to="#"> 3.3-TRONCO </Link> </li>
                <li class="m4" > <Link to="/superior"> 3.4-SUPERIORES </Link> </li>
                <li class="m5" > <Link to="#"> 3.5-INFERIORES </Link> </li>
            </ul>
        </nav>
    </div>
    )
}

