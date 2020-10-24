import React from "react";
import "./style.css";

function Header() {
    return (
        <header className="jumbotron jumbotron-fluid header">
            <div className="container text-center">
                <h1 className="display-3">React Employee Directory</h1>
                <p className="lead"> Use input field to narrow employees by column headers.</p>
                <p className="lead"> You can also click on the "Name" header to sort list by alphabetical order.</p>
            </div>
        </header>
    );
}

export default Header;