import React from "react";
import Header from "../components/Header";
import '../css/login.css'

class RegistrationPage extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
        this.inputClick = this.inputClick.bind(this) 
    }

inputClick = async (event) =>
{
    event.preventDefault();

    if((this.state.name !== "")&&(this.state.email !== "")&&(this.state.password !== "")&&(this.state.confirmPassword !== ""))
    {
        if(this.state.confirmPassword === this.state.password)
        {
            try
            {
                fetch('http://localhost:5001/Users',
                {
                    method: 'post',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify({
                        userName:this.state.name,
                        email: this.state.email,
                        password: this.state.password
                    })
                })
                .then((response) =>
                {
                    fetch('http://localhost:5001/Users/getUserAfterLogin?Email='+this.state.email+'&Password='+this.state.password)
                    .then(function(response){return response.json();})
                    .then(function(jsonStr)
                    {
                        localStorage.setItem("loggedIn",true)
                        localStorage.setItem("profileName", jsonStr.name)
                        localStorage.setItem("profileId", jsonStr.id)
                    })
                    .then(function(){
                        window.history.pushState({}, undefined, "/");
                        window.history.go();
                    })

                })
            }
            catch (error) { console.error('Ошибка:', error);}
        }
        else{alert("Пароли не совпадают")}   
    }  else{alert("Не все поля заполнены")}
}

    render()
    {
        return(

            <div>
                <Header/>
                <div className='Login'>
                    <form className='LoginForm'>
                        <br></br>
                        <h3>Имя пользователя:</h3>
                        <input  type = "text" 
                                placeholder='Введите ваше имя'
                                onChange={(e)=>this.setState({name:e.target.value})}
                        /><br></br>
                        <h3>Email:</h3>
                        <input  type = "text" 
                                placeholder='Введите email'
                                onChange={(e)=>this.setState({email:e.target.value})}
                        /><br></br>
                        <h3>Пароль:</h3>
                        <input  type = "password" 
                                placeholder='Введите пароль'
                                onChange={(e)=>this.setState({password:e.target.value})}
                        /><br></br>
                        <h3>Подтвердите пароль:</h3>
                        <input  type = "password" 
                                placeholder='Введите пароль еще раз'
                                onChange={(e)=>this.setState({confirmPassword:e.target.value})}
                        /><br></br>
                        <button onClick={this.inputClick}>Войти</button>
                    </form> 
                </div>        
            </div>
        )
    }
}

export default RegistrationPage