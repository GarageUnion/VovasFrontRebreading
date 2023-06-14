import React from "react";
import Header from "../../components/Header";
import '../../css/login.css'

class PiesRecipe extends React.Component
{
    constructor (props){
        super(props)
        this.state = {
            name: "",
            necessaryProducts: "",
            description: ""
        }
        this.inputClick = this.inputClick.bind(this) 
    }
    inputClick = (event) =>
    {
        event.preventDefault();
        if((this.state.name!=="")&&(this.state.necessaryProducts!=="")&&(this.state.description!==""))
        {
            try {
                fetch("http://localhost:5218/api/Recipes", 
                {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(
                        { 
                            name: this.state.name,
                            necessaryProducts: this.state.necessaryProducts,
                            description: this.state.description,
                        })
                });
                window.history.pushState({},undefined,"/");
                window.history.go();
            } 
            catch (error) {console.error('Ошибка:', error);}                 
        }
        else{alert("Не все поля заполнены")}
    }

    render()
    {
        return(

            <div>
                <Header/>
                <div className='Login'>
                    <form className='LoginForm'>
                        <br></br>
                        <h3>Название изделия:</h3>
                        <input  type = "text" 
                                placeholder='Введите название'
                                onChange={(e) => this.setState({name: e.target.value})}
                        /><br></br>
                        <h3>Состав:</h3>
                        <textarea
                                type = "text" 
                                placeholder='Перечислите ингридиенты'
                                onChange={(e) => this.setState({necessaryProducts: e.target.value})}
                        /><br></br>
                        <h3>Способ приготовления:</h3>
                        <textarea
                                type = "text" 
                                placeholder='Опишите способ приготовления'
                                onChange={(e) => this.setState({description: e.target.value})}
                        /><br></br>
                            <button onClick={this.inputClick}>Опубликовать</button>
                    </form> 
                </div>
            </div>
        )
    }
}

export default PiesRecipe