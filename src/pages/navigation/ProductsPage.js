import React from "react";
import Header from "../../components/Header";
import BreadTable from "../../components/BreadTable";

class ProductsPage extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state =
        {
            products:[]
        }
        this.getBreadList = this.getBreadList.bind(this)
        this.getBreadList(this)
        
    }

    getBreadList = (that) => {
        fetch('http://localhost:5062/Bread/many') 
        .then(function(response){return response.json();})
        .then(function(jsonStr){that.setState({products: jsonStr});})
        .catch(error => console.error(error));
    }

    render()
    {
        return(
            <div>
                <Header currentPage = "ProductsPage"/>
                <BreadTable breads = {this.state.products} link="/product-info/"/>
            </div>
        )
    }
}

export default ProductsPage

/* {
                id: 1,
                name: "Булочка",
                rating: 4,
            },
            {
                id: 2,
                name: "Хлебобулка",
                rating: 5,
            },
            {
                id: 3,
                name: "Булкан",
                rating: 2,
            },
            {
                id: 4,
                name: "Булимичка",
                rating: 4,
            },
            {
                id: 5,
                name: "Булочка",
                rating: 4,
            },
            {
                id: 6,
                name: "Хлебобулка",
                rating: 5,
            },
            {
                id: 7,
                name: "Булкан",
                rating: 2,
            },
            {
                id: 8,
                name: "Булимичка",
                rating: 4,
            },
            {
                id: 9,
                name: "Булочка",
                rating: 4,
            },
            {
                id: 10,
                name: "Хлебобулка",
                rating: 5,
            },
            {
                id: 11,
                name: "Булкан",
                rating: 2,
            },
            {
                id: 12,
                name: "Булимичка",
                rating: 4,
            }
            */