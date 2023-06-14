import React from "react";
import '../css/comment.css'

export class Review extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            usersLink: 'http://localhost:5001/Users/one/'+this.props.data.userId.toString(),
            userName: this.props.data.userName,
            rate: this.props.data.rate,
            review: this.props.data.review,
        }
    }
    render(){
        return(
            <div className="Comment">
                <h2 className="UserName">{this.state.userName ? this.state.userName : "Удаленный пользователь"}</h2>
                <h3 style={{marginLeft:'10px'}}>{this.state.rate}/5</h3>   
                <h3 style={{margin:'5px', marginLeft:'10px'}}>{this.state.review}</h3>
            </div>
        )
    }
}