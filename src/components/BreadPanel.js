import React from "react";
import { Link } from "react-router-dom";
import '../css/breadpanel.css'
import defaultBread from '../img/defaultBread.jpg'

class BreadPanel extends React.Component
{
    render()
    {
        return(
            <Link to ={this.props.link+this.props.data.id}>
                <div className="BreadPanel">
                    <img src = {defaultBread}/>
                    <h2 className="name">{this.props.data.name}</h2>
                    <h3 className="rating">{this.props.data.rating} из 5</h3>
                </div>
            </Link>
        )
    }
}

export default BreadPanel