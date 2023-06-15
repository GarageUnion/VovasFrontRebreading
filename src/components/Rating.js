import React from "react";
import {AiFillStar,AiOutlineStar} from "react-icons/ai"
import'../css/rating.css'
export class Rating extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            rate: this.props.rate,
        }
    }
    render(){
        return(
            <div>
                {this.state.rate>=1?
                    <AiFillStar className="star" onClick={() =>{this.props.SetRating(1); this.setState({rate: 1})}}></AiFillStar>
                    :<AiOutlineStar  onClick={() =>{this.props.SetRating(1); this.setState({rate: 1})}}></AiOutlineStar>}
                {this.state.rate>=2?
                    <AiFillStar className="star" onClick={() =>{this.props.SetRating(2); this.setState({rate: 2})}}></AiFillStar>
                    :<AiOutlineStar  onClick={() =>{this.props.SetRating(2); this.setState({rate: 2})}}></AiOutlineStar>}
                {this.state.rate>=3?
                    <AiFillStar  className="star" onClick={() =>{this.props.SetRating(3); this.setState({rate: 3})}}></AiFillStar>
                    :<AiOutlineStar onClick={() =>{this.props.SetRating(3); this.setState({rate: 3})}}></AiOutlineStar>}
                {this.state.rate>=4?
                    <AiFillStar className="star" onClick={() =>{this.props.SetRating(4); this.setState({rate: 4})}}></AiFillStar>
                    :<AiOutlineStar onClick={() =>{this.props.SetRating(4); this.setState({rate: 4})}}></AiOutlineStar>}
                {this.state.rate>=5?
                    <AiFillStar className="star" onClick={() =>{this.props.SetRating(5); this.setState({rate: 5})}}></AiFillStar>
                    :<AiOutlineStar onClick={() =>{this.props.SetRating(5); this.setState({rate: 5})}}></AiOutlineStar>}
            </div>
        )
    }
}