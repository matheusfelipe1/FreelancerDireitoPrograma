import React from 'react'
import './Header.css'
import {BrowserRouter, Link} from 'react-router-dom'

export default props => 
<header className="header">
    Programa Freelancer Estagiários de Direito
    <div className="link">
        <BrowserRouter >
            <Link  className="login" to="">
                <aside>
                   <i className="fa fa-user"></i> Login
                </aside>
            </Link>
        </BrowserRouter>
    </div>
</header>