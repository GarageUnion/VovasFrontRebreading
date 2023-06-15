import React from "react";
import { Link } from "react-router-dom";
import '../css/breadpanel.css'
import defaultBread from '../img/defaultBread.jpg'

class BreadPanel extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            picture: "",
            pictureLink: 'http://localhost:5062/Pictures/'+this.props.data.id,
        }
        this.TakePicture = this.TakePicture.bind(this)
        this.TakePicture(this)
    }
    TakePicture =(that) => {
        fetch(that.state.pictureLink) 
        .then(function(response){return response.json();})
        .then(function(jsonStr){that.setState({picture: jsonStr.dataBase64});})
        .catch(error => console.error(error));
    }
    render()
    {
        if(this.state.picture==="")
            this.setState({picture:defaultBread})
        return(
            <Link to ={this.props.link+this.props.data.id}>
                <div className="BreadPanel">
                    {this.props.link==="/product-info/"? <img src={this.state.picture}></img>:<img src = {defaultBread}/>}
                    <h2 className="name">{this.props.data.name}</h2>
                    <h3 className="rating">{this.props.data.rate} из 5</h3>
                </div>
            </Link>
        )
    }
}

export default BreadPanel