import React, { Component } from 'react'
import { Link} from "react-router-dom";

class Home extends Component{
    render(){
        return(
            <div>
                <h2> This is Home Page</h2>
                <Link to="/about">goto about</Link>
            </div>
        )
    }
}

export default Home