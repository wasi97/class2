import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
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



class App extends React.Component{
  render(){
   
    return(
      
    <div>
      <Header/>
    <h1>main Component</h1>
    <button type="button" className="btn btn-primary">Primary</button>
    <Footer/>
       </div>
    
    )
  }
}


export default App;
