import React, {Component} from 'react'
import MenuItems from "./MenuItems"
import './Navbar.css'
import {Button} from "../Button/Button"
export class Navbar extends Component{
    state = {clicked:false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
    return (
        <div className="navbar-items">
        <img src="http://static1.squarespace.com/static/56c74e1f2b8dde39920b53e6/t/56c77f79859fd07d71b20faf/1589775325728/?format=1000w"
         alt="" className="navbar-logo"/>

        <div className="menu-icon" onClick = {this.handleClick}>
        <i className = {this.state.clicked ? "bx bx-x" : "bx bx-menu"}></i> 
        </div>





        <ul className = {this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index)=>{
            return(
                <li>
                    <a href={item.url} className={item.cname}>{item.menu}</a>
                </li>
            )
            })}
        </ul>
        <Button>Sign UP</Button>
    </div>
    )
    }
}