import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


export default function Header() {
 
    return (
    <div className="menu1">     
        <nav>
            <ul>
                <li className="m1" > <Link to="#"> 1-ESQUELÉTICO </Link> </li>
                <li className="m2" > <Link to="#"> 2-ARTICULAR </Link> </li>
                <li className="m3" > <Link to="/muscular"> 3-MUSCULAR </Link> </li>
                <li className="m4" > <Link to="#"> 4-CARDIOVASCULAR </Link> </li>
                <li className="m5" > <Link to="#"> 5-RESPIRATÓRIO </Link> </li>
            </ul>
        </nav>
    </div>
    )
}

