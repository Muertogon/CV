import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import NavBar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Myprojects from './components/myprojects/Myprojects'
import Aboutme from './components/aboutme/Aboutme'

import './App.css'
import { ThemeProvider } from '@material-ui/core'


const App = () => {
    return (
        <ThemeProvider>
            <Router>
            <NavBar/>
            <Switch>
                <Route path='/' exact component={Home}/>  
                <Route path='/aboutme' component={Aboutme}/>
                <Route path='/myprojects' component={Myprojects}/> 
            </Switch>
            </Router> 
        </ThemeProvider>
    )
}

export default App
