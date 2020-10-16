import React from "react"


class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <h2>Header</h2>
            </div>
        )
    }
}


class Logo extends React.Component{
    render(){
        return(
            <div>
                <img src="" alt=""/>
                <h2>logo</h2>
            </div>
        )
    }
}


export {
 Header,
 Logo
};