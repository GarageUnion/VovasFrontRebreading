import React from "react";

import BreadPanel from "./BreadPanel";

import '../css/breadtable.css'

class BreadTable extends React.Component
{
    render()
    {
        return(
            <div className="BreadTable">
                {this.props.breads.map((el) => (
                    <BreadPanel key={el.id} data={el} link = {this.props.link}/>
                ))}
            </div>
        )
    }
}

export default BreadTable