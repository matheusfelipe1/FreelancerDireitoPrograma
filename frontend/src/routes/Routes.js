import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {HashRouter} from 'react-router-dom'
import Content from '../components/Content'
import RegisterUser from '../pages/RegisterUser'
import Empresa from '../pages/Empresa'
import Estagiarios from '../pages/Estagiarios'

export default props =>
<HashRouter>
    <Switch>
        <Route exact path='/' component={Content}></Route>
        <Route path="/register" component={RegisterUser}></Route>
        <Route path="/empresa" component={Empresa}></Route>
        <Route path="/estagiarios" component={Estagiarios}></Route>
        <Redirect from="*" to="/"></Redirect>
    </Switch>
</HashRouter>