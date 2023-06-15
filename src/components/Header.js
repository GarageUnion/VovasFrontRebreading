import React from "react";

import { Link } from "react-router-dom";
import { IoExitOutline} from 'react-icons/io5'

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
        let rightContainer
        if(localStorage.getItem("loggedIn"))
        {
            rightContainer = 
            <div className="LoggedUser">
                <label className='ProfileName'>{localStorage.getItem('profileName')}</label>
                <IoExitOutline className='ExitIcon' 
                onClick={()=>{  localStorage.setItem('loggedIn', "")
                                localStorage.setItem('profileName', "")
                                localStorage.setItem('profileId', "")
                                window.history.go()}}>
                </IoExitOutline>
            </div>
        }
        else{
            rightContainer = 
            <div className="HeaderButtons">
                <Link to={"/enter"}><button >Вход</button></Link>
                <Link to ={"/registration"}><button className="RegistrationButton">Регистрация</button></Link>
            </div>
        }
        return(
            <div>
                <header>
                    <header className="Header" style={{display: 'flex'}}>
                        <div className="RebreadingTitle">
                            <img src = {Rebreading} width="auto" height="50" alt="" />

                        </div>
                        {rightContainer}      
                    </header>
                    <Navigation currentPage = {this.props.currentPage}/>
                </header>
            </div>
        )
    }
}

export default Header