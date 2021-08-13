import React, {Component} from 'react'
import './App.css'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Routes from '../routes/Routes'

export default class App extends Component {
    render() {
        return(
            <div className="app">
                <Header />
                <Routes />
                <Nav />
            </div>
        )
    }
}