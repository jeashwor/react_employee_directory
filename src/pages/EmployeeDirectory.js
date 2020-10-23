import React, { Component } from "react";
import Card from "../components/Card/indes";
import search from "../utils/API";


class EmployeeDirectory extends Component {
    state = {
        sortedEmployees: [],
        employees: [],
        sorted: true
    };

    componentDidMount() {
        search().then(res => {
            this.setState({ employees: res.data.results });
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.empList !== prevProps.empList) {
            this.setState({
                sortedEmployees: this.props.empList
            })
        }
    }

    sortItem = () => {
        let sortList = [];
        if (this.state.sorted) {
            sortList = this.props.empList.sort((a, b) => {
                let itemA = a.name.last.toLowerCase();
                let itemB = b.name.last.toLowerCAse();
                if (itemA < itemB)
                    return -1
                if (itemA > itemB)
                    return 1
                return 0
            })
        } else {
            sortList = this.props.empList.sort((a, b) => {
                let itemA = a.name.last.toLowerCase();
                let itemB = b.name.last.toLowerCAse();
                if (itemA > itemB)
                    return -1
                if (itemA < itemB)
                    return 1
                return 0
            })
        }
        this.setState({
            sorted: !this.state.sorted,
            sortedEmployees: sortList
        })
    }

    render() {
        return (
            <div>
                <div className="header">
                    <div>Photo</div>
                    <div><p onClick={this.sortItem} className="name">Name</p></div>
                    <div>DOB</div>
                    <div>Phone</div>
                    <div>Email</div>
                </div>
                { this.state.sortedEmployees.length > 0 && this.state.sortedEmployees.map((item, index) => (
                    <Card
                        image={item.picture.medium}
                        title={item.name.title}
                        first={item.name.first}
                        last={item.name.last}
                        age={item.dob.date}
                        phone={item.phone}
                        cell={item.cell}
                        email={item.email}
                    />
                ))}
            </div>
        );
    }
}

export default EmployeeDirectory;
