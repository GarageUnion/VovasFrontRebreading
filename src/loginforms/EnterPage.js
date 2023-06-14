import React from "react";
import Header from "../components/Header";
import '../css/login.css'

/*
TODO:
При наличии времени заменить Users/many на Users/getUserAfterLogin
*/

class EnterPage extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            users:[],
            email:"",
            password:""
        }
        this.inputClick = this.inputClick.bind(this)
        this.getUsersList = this.getUsersList.bind(this)
        this.getUsersList(this)
    }

    getUsersList = (that) => 
    {
        fetch('http://localhost:5001/Users/many') 
        .then(function(response){return response.json();})
        .then(function(jsonStr){that.setState({users: jsonStr});})
        .catch(error => console.error(error));
    }

    inputClick = async(event) =>
    {
        event.preventDefault();

        let isInList = false;
        this.state.users.map((user) =>
        {
            if((user.email === this.state.email)&&(user.password===this.state.password))
            {
                isInList=true;
                localStorage.setItem("profileName", user.name)
                localStorage.setItem("profileId", user.id)
            }
        })
        if(isInList)
        {
            localStorage.setItem("loggedIn", true)
            window.history.pushState({},undefined,"/");
            window.history.go();
        }
        else
        {
            alert("Неверный пароль или email")
        }
    }

    render()
    {
        return(

            <div>
                <Header/>
                <div className='Login'>
                    <form className='LoginForm'>
                        <br></br>
                        <h3>Email:</h3>
                        <input  type = "text" 
                                placeholder='Введите email'
                                onChange={(e)=>this.setState({email: e.target.value})}
                        /><br></br>
                        <h3>Пароль:</h3>
                        <input  type = "password" 
                                placeholder='Введите пароль'
                                onChange={(e)=>this.setState({password: e.target.value})}
                        /><br></br>
                            <button onClick = {this.inputClick}>Войти</button>
                    </form> 
                </div>        
            </div>
        )
    }
}

export default EnterPage