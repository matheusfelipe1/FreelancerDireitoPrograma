import React from 'react'
import './Nav.css'
import 'font-awesome/css/font-awesome.min.css';
import {HashRouter, Link} from 'react-router-dom'

export default props => 
<aside className="nav">
    <div className="div-home">
        <HashRouter>
            <Link to="/">
                <i className="fa fa-home"></i>Início
            </Link>
            <Link to="/estagiarios">
                <i className="fa fa-user-circle"></i>Estagiários
            </Link>
            <Link to="/empresa">
                <i className="fa fa-line-chart"></i>Empresas
            </Link>
        </HashRouter>
        
    </div>
</aside>