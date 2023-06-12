import React from "react";
import Header from "../components/Header";
import '../css/login.css'

class EnterPage extends React.Component
{
    render()
    {
        return(

            <div>
                <Header/>
                <div className='Login'>
                    <form className='LoginForm'>
                        <br></br>
                        <h3>Email:</h3>
                        <input  name = 'email'
                                type = "text" 
                                placeholder='Введите email'
                        /><br></br>
                        <h3>Пароль:</h3>
                        <input  name = 'password'
                                type = "password" 
                                placeholder='Введите пароль'
                        /><br></br>
                            <button>Войти</button>
                    </form> 
                </div>        
            </div>
        )
    }
}

export default EnterPage