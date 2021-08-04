import React from 'react'
import './style.css';

export default function Products() {
    return (
        <div className="ProdContainer">
            <div className="product">
                <h3>Product Name</h3>
                <p>Description</p>
                <p>Price of product</p>
                <button>Buy</button>
            </div>
        </div>
    )
}
