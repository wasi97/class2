import React from 'react'
import Home from "../container/Home"
import About from "../container/About"

import {
    BrowserRouter as Router,Route,} from "react-router-dom";

    class AppRouter extends React.Component{
        render(){
            return(
                <Router>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>

                </Router>
            )
        }
    }

    export default AppRouter