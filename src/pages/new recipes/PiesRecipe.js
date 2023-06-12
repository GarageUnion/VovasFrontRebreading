import React from "react";
import Header from "../../components/Header";
import '../../css/login.css'

class PiesRecipe extends React.Component
{
    render()
    {
        return(

            <div>
                <Header/>
                <div className='Login'>
                    <form className='LoginForm'>
                        <br></br>
                        <h3>Название изделия:</h3>
                        <input  name = 'name'
                                type = "text" 
                                placeholder='Введите название'
                        /><br></br>
                        <h3>Состав:</h3>
                        <textarea
                                name = 'ingridients'
                                type = "text" 
                                placeholder='Перечислите ингридиенты'
                        /><br></br>
                        <h3>Способо приготовления:</h3>
                        <textarea
                                name = 'ingridients'
                                type = "text" 
                                placeholder='Опишите способ приготовления'
                        /><br></br>
                            <button>Опубликовать</button>
                    </form> 
                </div>        
            </div>
        )
    }
}

export default PiesRecipe