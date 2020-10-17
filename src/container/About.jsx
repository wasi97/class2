import React, { Component } from 'react'
import { Link} from "react-router-dom";
class About extends Component{

    gotohome = ()=>{
console.log(this.props)
this.props.history.push('/')
    }


    render(){
        return(
            <div>
                <h2>About Page</h2>
                <Link to="/">goto Home  </Link>
                <button onClick={this.gotohome}>Home</button>
            </div>
        )
    }
}

export default About