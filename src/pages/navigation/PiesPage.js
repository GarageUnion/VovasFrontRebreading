import React from "react";
import Header from "../../components/Header";
import BreadTable from "../../components/BreadTable";
import { Link } from "react-router-dom";


class PiesPage extends React.Component
{
    constructor(props)
{
    super(props)
    this.state =
    {
        pies:[
            {
                id: 1,
                name: "Пирожок",
                rating: 3,
            },
            {
                id: 2,
                name: "Хлебожок",
                rating: 5,
            },
            {
                id: 3,
                name: "Пирожок с картошкой",
                rating: 5,
            },
            {
                id: 4,
                name: "Пирожок с пловом",
                rating: 3,
            },
            {
                id: 5,
                name: "Пирожок",
                rating: 3,
            },
            {
                id: 6,
                name: "Хлебожок",
                rating: 5,
            },
            {
                id: 7,
                name: "Пирожок с картошкой",
                rating: 5,
            },
            {
                id: 8,
                name: "Пирожок с пловом",
                rating: 3,
            },
            {
                id: 9,
                name: "Пирожок",
                rating: 3,
            },
            {
                id: 10,
                name: "Хлебожок",
                rating: 5,
            },
            {
                id: 11,
                name: "Пирожок с картошкой",
                rating: 5,
            },
            {
                id: 12,
                name: "Пирожок с пловом",
                rating: 3,
            }
        ]
    }
}
    render()
    {
        return(
            <div>
                <Header currentPage = "PiesPage"/>
                <header style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                        <Link to = "/pies-recipe" ><button>Поделиться рецептом</button></Link>
                </header>
                <BreadTable breads = {this.state.pies} link="/pie-info/"/>
            </div>
        )
    }
}

export default PiesPage