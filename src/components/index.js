import React, { Component } from "react";
// import './App.css';
import Table from "./Table";
import Form from "./Form";

// const tableData = [
//     {title: 'Write online help', assignee: 'Muzaker', status: 'working on it', epic: 'Bug', priority: 'High', estimation: '1 days' },
//     {title: 'Write online help', assignee: 'Muzaker', status: 'working on it', epic: 'Bug', priority: 'High', estimation: '1 days' },
//     {title: 'Write online help', assignee: 'Muzaker', status: 'working on it', epic: 'Bug', priority: 'High', estimation: '1 days' }
// ]

class EmployeeList extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      employeeId: "",
      department: "",
      emailId: "",
      date: "",
      items: [],
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      username: this.state.username,
      employeeId: this.state.employeeId,
      department: this.state.department,
      emailId: this.state.emailId,
      date: this.state.date,
    });

    this.setState({
      items,
      username: "",
      employeeId: "",
      department: "",
      emailId: "",
      date: "",
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="App">
        <Table items={this.state.items} />
        <Form
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          newUsername={this.state.username}
          newEmployeeId={this.state.employeeId}
          newDepartment={this.state.department}
          newEmailId={this.state.emailId}
          newDate={this.state.date}
        />
      </div>
    );
  }
}

export default EmployeeList;
