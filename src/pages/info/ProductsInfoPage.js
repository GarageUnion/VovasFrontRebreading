import React from 'react'
import Header from "../../components/Header"
import { Rating } from '../../components/Rating';
import { useParams } from "react-router-dom";
import { Review } from '../../components/Review';

import '../../css/breadinfo.css'    

const ProductDiscriptionPage = (props) => {

    let { id } = useParams();
    return(
        <Description id={id}></Description>
    )
}

class Description extends React.Component{x 
    constructor(props){
        super(props)
        this.state = {
            product: {},
            productLink: 'http://localhost:5062/Bread/one/'+this.props.id.toString(),
            pictureLink: 'http://localhost:5062/Pictures/'+this.props.id.toString(),
            picture: "",
            comment: "",
            rate: '',
        }
        this.TakeProduct = this.TakeProduct.bind(this)
        this.TakePicture = this.TakePicture.bind(this)

        this.TakeProduct(this)
        this.TakePicture(this)
    }
    TakeProduct = (that) => {
        fetch(that.state.productLink) 
        .then(function(response){return response.json();})
        .then(function(jsonStr){that.setState({product: jsonStr});})
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
                fetch('http://localhost:5062/BreadReview', 
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
                        <h1>{this.state.product.name}</h1>
                        <br></br>
                        <h3>Рейтинг:</h3>
                        <label>{this.state.product.rate}/5</label><br></br><br></br>
                        <h3>Средняя цена:</h3>
                        <label>{this.state.product.price} рублей</label><br></br><br></br>
                        <h3>О продукте:</h3>
                        <label>{this.state.product.description}</label>
                    </div>
                    <div className='CommentsSection'>
                        <h1>Мнение экспертов:</h1>
                        {this.state.product.breadReviews?.map((el) =>(<Review data={el}></Review>))}
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

export default ProductDiscriptionPage