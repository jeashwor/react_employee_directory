import React from "react";
import "./style.css";
import TableHead from "../TableHead";
import TableBody from "../TableBody";

function Table(props) {
    return (
        <div>
            <TableHead {...props}/>
            <TableBody {...props}/>
        </div>
    )
}

export default Table;