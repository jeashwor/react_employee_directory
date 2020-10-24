import React from "react";
import "./style.css";
import moment from "moment";

function Card(props) {
    let userDOB = props.age
    console.log(props);
    let DOB = moment(userDOB).format("MM-DD-YYYY");
    console.log(DOB);

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