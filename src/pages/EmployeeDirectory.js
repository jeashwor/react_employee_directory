import React, { Component } from "react";
import Form from "../components/Form";
import API from "../utils/API";


class EmployeeDirectory extends Component {
    state = {
        employees: [],
    };

    componentDidMount() {
        API.search()
            .then(res => {
                this.setState({
                    employees: res.data.results
                })
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                {this.state.employees.length > 0 &&
                    <Form employees={this.state.employees} />
                }
            </div>
        );
    }

}

export default EmployeeDirectory;
