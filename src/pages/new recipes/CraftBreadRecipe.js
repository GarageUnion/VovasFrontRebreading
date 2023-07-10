import React, {useCallback} from 'react'
import Dropzone from 'react-dropzone'
import Header from "../../components/Header";
import '../../css/login.css'
import {AiFillDelete} from "react-icons/ai"

class CraftBreadRecipe extends React.Component
{
    constructor (props){
        super(props)
        this.state = {
            name: "",
            necessaryProducts: "",
            isMachineRequired: false,
            description: "",
            picture: ""
        }
        this.inputClick = this.inputClick.bind(this) 
        this.getBase64 = this.getBase64.bind(this)
    }
    getBase64 = (acceptedFiles,that) =>{
        var file=acceptedFiles[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        if((file.type==="image/jpeg")||(file.type==="image/png"))
        {
            reader.onloadend = function () {
                that.setState({picture: reader.result})
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };

        }
        else
        {
            alert("Тип файла должен быть jpeg или png");
        }
    }
    inputClick = (event) =>
    {
        event.preventDefault();
        if((this.state.name!=="")&&(this.state.necessaryProducts!=="")&&(this.state.description!==""))
        {
            try {
                fetch("http://localhost:5006/CraftBread", 
                {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(
                        { 
                            name: this.state.name,
                            necessaryProducts: this.state.necessaryProducts,
                            isMachineRequired: this.state.isMachineRequired,
                            description: this.state.description,
                        })
                })
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
                        <h3>Печка:</h3>
                        <input
                                type="checkbox"
                                onChange={(e) => this.setState({isMachineRequired: !this.state.isMachineRequired})}
                        /><br></br>
                        <h3>Способ приготовления:</h3>
                        <textarea
                                type = "text" 
                                placeholder='Опишите способ приготовления'
                                onChange={(e) => this.setState({description: e.target.value})}
                        /><br></br>
                        {this.state.picture===""?
                        <div><h3>Добавьте картинку:</h3>                         
                            <Dropzone onDrop={(acceptedFiles)=>this.getBase64(acceptedFiles, this)}>
                            {(
                                {getRootProps, getInputProps}) => (                               
                                    <div className='dropzone' {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p>Перетащите файл типа jpeg или png или кликните на это поле</p>
                                    </div>
                            )}
                            </Dropzone><br></br>
                        </div>
                        :<div><img src={this.state.picture}/> <AiFillDelete onClick={()=>{this.setState({picture: ""})}}></AiFillDelete>
                        </div>
                        }
                        
                        <button onClick={this.inputClick}>Опубликовать</button>
                    </form> 
                </div>
            </div>
        )
    }
}

export default CraftBreadRecipe