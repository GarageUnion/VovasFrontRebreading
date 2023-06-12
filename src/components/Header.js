import React from "react";

import { Link } from "react-router-dom";

import Rebreading from "../img/Rebreading.png"

import '../css/header.css'
import '../css/navigation.css'

class Navigation extends React.Component
{

    render()
    {
        let productsClicked = this.props.currentPage === "ProductsPage" ? "#D9B681" : "FFE7A9"
        let piesClicked = this.props.currentPage === "PiesPage" ? "#D9B681" : "FFE7A9"
        let craftBreadClicked = this.props.currentPage === "CraftBreadPage" ? "#D9B681" : "FFE7A9"
        return(
            <div className="NavigationButtons">
                <Link to={"/"}><button style={{backgroundColor: productsClicked}}>Продукция</button></Link>
                <Link to={"/pies"}><div className="PiesButton"><button style={{backgroundColor: piesClicked}} >Пирожки</button></div></Link>
                <Link to={"/craftbread"}><button style={{backgroundColor: craftBreadClicked}}>Хлеб</button></Link>
            </div>
        )   
    }
}

class Header extends React.Component
{
    render()
    {
        return(
            <div>
                <header>
                    <header className="Header" style={{display: 'flex'}}>
                        <div className="RebreadingTitle">
                            <img src = {Rebreading} width="auto" height="50" alt="" />

                        </div>

                        <div className="HeaderButtons">
                            <Link to={"/enter"}><button >Вход</button></Link>
                            <Link to = {"/registration"}><button className="RegistrationButton">Регистрация</button></Link>
                        </div>
                    </header>
                    <Navigation currentPage = {this.props.currentPage}/>
                </header>
            </div>
        )
    }
}

export default Header