import React from 'react'
import Header from "../../components/Header"
import { Rating } from '../../components/Rating';
import { useParams } from "react-router-dom";
import { Review } from '../../components/Review';

import '../../css/breadinfo.css'    

const PieDiscriptionPage = (props) => {

    let { id } = useParams();
    return(
        <Description id={id}></Description>
    )
}

class Description extends React.Component{x 
    constructor(props){
        super(props)
        this.state = {
            pie: {},
            pieLink: 'http://localhost:5218/api/Recipes/one/'+this.props.id.toString(),
            pictureLink: 'http://localhost:5218/Pictures/'+this.props.id.toString(),
            picture: "",
            comment: "",
            rate: 5,
        }
        this.TakePie = this.TakePie.bind(this)
        this.TakePicture = this.TakePicture.bind(this)
        this.SetRating = this.SetRating.bind(this)

        this.TakePie(this)
        this.TakePicture(this)
    }
    TakePie = (that) => {
        fetch(that.state.pieLink) 
        .then(function(response){return response.json();})
        .then(function(jsonStr){that.setState({pie: jsonStr});})
        .catch(error => console.error(error));
    }
    TakePicture =(that) => {
        fetch(that.state.pictureLink) 
        .then(function(response){return response.json();})
        .then(function(jsonStr){that.setState({picture: jsonStr.dataBase64});})
        .catch(error => console.error(error));
    }

    inputClick = (event) => {
        event.preventDefault();
        if ((localStorage.getItem("loggedIn"))&&(this.state.comment!=="")&&(this.state.rate!==""))
        {
            try {
                fetch('http://localhost:5218/api/RecipeReviews', 
                {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(
                    {
                        review: this.state.comment,
                        rate: this.state.rate, 
                        recipeId: this.props.id,
                        userId: localStorage.getItem("profileId"),
                        userName: localStorage.getItem("profileName")
                    })
                })
                .then(function()
                {
                    window.history.go();
                })
            }
            catch(error) 
            {
                console.error('Ошибка:', error);
            }
        }
        else if(this.state.comment==="")
        {
            alert("Нельзя оставить пустой комментарий")
        }
        else
        {
            alert("Чтобы оставить отзыв, нужно войти в аккаунт")
        }

    }
    SetRating(newRate){
        this.setState({rate: newRate})
    }

    render()
    {
        return(
            <div>
                <Header/>
                <div className='Description'>
                    <div>
                        <img src={this.state.picture}></img>
                    </div>
                    <div>
                        <h1>{this.state.pie.name}</h1>
                        <br></br>
                        <h3>Рейтинг:</h3>
                        <label>{this.state.pie.rate}/5</label><br></br><br></br>
                        <h3>Состав:</h3>
                        <label>{this.state.pie.necessaryProducts} рублей</label><br></br><br></br>
                        <h3>Способ приготовления:</h3>
                        <label>{this.state.pie.description}</label>
                    </div>
                    <div className='CommentsSection'>
                        <h1>Мнение экспертов:</h1>
                        {this.state.pie.recipeReviews?.map((el) =>(<Review data={el}></Review>))}
                        <textarea placeholder="Оставьте отзыв"
                            onChange={(e) => this.setState({comment: e.target.value})}></textarea>
                        <Rating SetRating={this.SetRating} rate={this.state.rate}></Rating>
                        <button onClick={this.inputClick}>Отправить</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PieDiscriptionPage