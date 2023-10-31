import React from "react" ;
import { Link } from "react-router-dom";
import  { House , ShoppingCart, Storefront } from "phosphor-react";
import "./navbar.css";
import navbaruimg from "../pages/cart/navbimg.png";


export const Navbar = () => {

return (

<div className="navbar">
    <Link to="/">
     <img   src={navbaruimg} alt= "logo" className="logo" height={48} />
     </Link>
    <div className="container">
    <div className="links">
        <Link to="/"> 
        <House size={24} />

        </Link>
        <Link to ="Shop">
            <Storefront size={24}/>
        </Link>
        <Link to="cart "> 
            <ShoppingCart size={24} />
        </Link>
        </div>
    </div>
</div>
);
};