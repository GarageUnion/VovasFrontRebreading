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
        products:[
            {
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
        ]
    }
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