import React, { Component } from "react";
import "./style.css";
import List from "../List";

class Form extends Component {
    state = {
        searchField: "",
        filteredEmpList: []
    };

    componentDidMount() {
        if (this.state.filteredEmpList.length < 1) {
            this.setState({ filteredEmpList: this.props.employees })
        }
    }

    handleInputChange = event => {
        this.setState({ 
            searchField: event.target.value 
        });
        let inputField = event.target.value;
        const filteredList = this.props.employees.filter((item) => {
            let values = item.name.title + item.name.first + item.name.last + item.dob.date + item.email + item.cell;
            return values.indexOf(inputField) !== -1;
        });
        this.setState({ filteredEmpList: filteredList });
    }

    render() {
        return (
            <div>
                <form className="form">
                    <input
                        value={this.state.searchField}
                        name="searchField"
                        onChange={event => this.handleInputChange(event)}
                        type="text"
                        placeholder="type to search"
                    />
                </form>
                {this.state.filteredEmpList.length > 0 &&
                    <List empList={this.state.filteredEmpList} />
                }
            </div>
        );
    }
}

export default Form;