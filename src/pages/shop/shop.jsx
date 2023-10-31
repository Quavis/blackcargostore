import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import logo from  "../cart/logo1.png"

export const Shop = () => {

    return (
     <div className="shop">
        <div className="shopTitle">
         <b>Featured Products </b>
       {/*} <img src={logo} width={300} height={300} />*/}
        {/*<h1> Black Cargo Shop</h1> */}
         </div>
        <div className="products">   
        {PRODUCTS && PRODUCTS.map((product) => (
        <Product data={product} />   
        ))}
        </div>
    </div>
    );
};