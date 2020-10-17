import React, { Component } from 'react';
import './App.css';
import {Header, Logo} from "./components/Header"
import Footer from "./components/Footer"
import BasicTextFields from './components/textfield'
import AppRouter from './config/router'


// class Header extends Component{
//   render(){
//     return(
//       <div className="header">
//         <h2>Header</h2>
//       </div>
//     )
//   }
// }

// class Footer extends Component{
//   render(){
//     return(
//       <div className="footer">
//         <h2>Footer</h2>
//       </div>
//     )
//   }
// }



// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       name: "wasi",
//       email: "xyz",
//       value: ""
//     }
//   }

//   set_name = ()=>{
// this.setState({
//   name: this.state.value
// })

//   }
//   get_name = ()=>{
//     console.log(this.state.name)
    
//       }

//       handleChange(e){
//        this.setState({
//         [e.target.name]: e.target.value
       
//        })
//       }  

//       get_props = (props)=>{
//         console.log(props)
//       }


//   render(){
   
//     return(
      
//     <div>
//       <Header get_props={this.get_props} name={this.state.name} page="Application page"/>
//     <h2>My name is {this.state.name}</h2>
//     <h4>my email is {this.state.email}</h4>
//       <input name="name" onChange={(e)=>this.handleChange(e)} type="text" placeholder="enter name"></input>
//       <input name="email" onChange={(e)=>this.handleChange(e)} type="text" placeholder="enter email"></input>
//     <button onClick={this.set_name}>Set Name</button>
//     <button onClick={this.get_name}>Get Name</button>
//       <br/>
//       <br/>
//       <br/>
//     <h1>main Component</h1>
//     <BasicTextFields/>
//     <button type="button" className="btn btn-primary">Primary</button>
//     <Footer/>
//        </div>
    
//     )
//   }
// }

class App extends Component{
  render(){
    return(
      <AppRouter/>
      
    )
  }
}


export default App;
