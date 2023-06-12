import React from "react";
import Header from "../../components/Header";
import BreadTable from "../../components/BreadTable";
import { Link } from "react-router-dom";


class CraftBreadPage extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            craftBreads:[]  
        }
        this.GetBreadList = this.GetBreadList.bind(this)
        this.GetBreadList(this)
    }

    GetBreadList = (that) => {
        fetch('http://localhost:5006/CraftBread/many') 
        .then(function(response){return response.json();})
        .then(function(jsonStr){that.setState({craftBreads: jsonStr});})
        .catch(error => console.error(error));
    }
    
    render()
    {
        return(
            <div>
                <Header currentPage = "CraftBreadPage"/>
                <header style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                    <Link to = "/craftbread-recipe" ><button>Поделиться рецептом</button></Link>
                </header>
                <BreadTable breads = {this.state.craftBreads} link="/craftbread-info/"/>
            </div>
        )
    }
}

export default CraftBreadPage

/* TestList 
            {
                id: 1,
                name: "Хлеб №1",
                rating: 4,
            },
            {
                id: 2,
                name: "Хлеб №2",
                rating: 5,
            },
            {
                id: 3,
                name: "Хлеб №3",
                rating: 2,
            },
            {
                id: 4,
                name: "Хлеб №4",
                rating: 4,
            },
            {
                id: 5,
                name: "Хлеб №1",
                rating: 4,
            },
            {
                id: 6,
                name: "Хлеб №2",
                rating: 5,
            },
            {
                id: 7,
                name: "Хлеб №3",
                rating: 2,
            },
            {
                id: 8,
                name: "Хлеб №4",
                rating: 4,
            },
            {
                id: 9,
                name: "Хлеб №1",
                rating: 4,
            },
            {
                id: 10,
                name: "Хлеб №2",
                rating: 5,
            },
            {
                id: 11,
                name: "Хлеб №3",
                rating: 2,
            },
            {
                id: 12,
                name: "Хлеб №4",
                rating: 4,
            }
           */ 