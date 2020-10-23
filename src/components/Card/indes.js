import React from "react";
import "./style.css";

function Card(props) {
    var DOB = new Date(props.date);

    return (
        <div className="card">
            <div><img alt={props.last} src={props.image}></img></div>
            <div>{props.title} {props.first} {props.last} </div>
            <div>{DOB}</div>
            <div>{props.phone}</div>
            <div>{props.cell}</div>
            <div>{props.email}</div>
        </div>
    );
}

export default Card;