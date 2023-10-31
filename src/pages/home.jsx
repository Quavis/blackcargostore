import React from "react";
import { Link } from "react-router-dom";
import homelogo from "./cart/logo1.png"


export const Home = () => {
return (

    <div className="homepage">
        <div classname="homepic">
            <h1> Welcome </h1>
            <h2>Click Image to Enter </h2>
            <Link to ="Shop">
            <img src={homelogo} height={300}/>
            </Link>

        </div>
        </div>
);

};