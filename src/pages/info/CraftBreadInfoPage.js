import React from 'react'
import { Rating } from '../../components/Rating';
import Header from "../../components/Header"
import { useParams } from "react-router-dom";
import { Review } from '../../components/Review';

import defaultBread from '../../img/defaultBread.jpg'

import '../../css/breadinfo.css'    

const CraftBreadDiscriptionPage = (props) => {

    let { id } = useParams();
    return(
        <Description id={id}></Description>
    )
}

class Description extends React.Component{x 
    constructor(props){
        super(props)
        this.state = {
            craftBread: {},
            craftBreadLink: 'http://localhost:5006/CraftBread/one/'+this.props.id.toString(), 
            picture: defaultBread,
            comment: "",
            rate: 5
        }
        this.TakeCraftBread = this.TakeCraftBread.bind(this)
        this.SetRating = this.SetRating.bind(this)

        this.TakeCraftBread(this)
    }
    TakeCraftBread = (that) => {
        fetch(that.state.craftBreadLink) 
        .then(function(response){return response.json();})
        .then(function(jsonStr){that.setState({craftBread: jsonStr});})
        .catch(error => console.error(error));
    }

    inputClick = (event) => {
        event.preventDefault();
        if ((localStorage.getItem("loggedIn"))&&(this.state.comment!=="")&&(this.state.rate!==""))
        {
            try {
                fetch('http://localhost:5006/CraftBreadReview/', 
                {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(
                    {
                        review: this.state.comment,
                        rate: this.state.rate, 
                        breadId: this.props.id,
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
                <Header currentPage = "CraftBreadPage"/>
                <div className='Description'>
                    <div>
                        <img src={this.state.picture}></img>
                    </div>
                    <div>
                        <h1>{this.state.craftBread.name}</h1>
                        <br></br>
                        <h3>Рейтинг:</h3>
                        <label>{this.state.craftBread.rate}/5</label><br></br><br></br>
                        <h3>Состав:</h3>
                        <label>{this.state.craftBread.necessaryProducts} рублей</label><br></br><br></br>
                        <h3>Способ приготовления:</h3>
                        <label>{this.state.craftBread.description}</label>
                    </div>
                    <div className='CommentsSection'>
                        <h1>Мнение экспертов:</h1>
                        {this.state.craftBread.breadReviews?.map((el) =>(<Review data={el}></Review>))}
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

export default CraftBreadDiscriptionPage