import React from "react";

export default function slide(props){

    return (
        <div className="card">
            <img className="product--image" src={props.url} alt="product image"/>
            <h2 className="title">{props.name}</h2>
            <p className="price">{props.price}</p>
            <p className="des">{props.description}</p>
            <p>{props.category}</p>
            <p>
                <button>Add to Cart</button>
            </p>
        </div>
    )
}