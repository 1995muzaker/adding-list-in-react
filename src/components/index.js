import React, { Component } from "react";
import { MainDiv } from "../styles/Form";
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
      show: false,
      items: [
        {
          username: "Shaikh Muzaker",
          employeeId: "201",
          department: "Artificial Intelligence",
          emailId: "shaikhmuzaker@gmail.com",
          date: "2020-04-25",
        },
      ],
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
      department: "it",
      emailId: "",
      date: "",
      show: false,
    });
  };

  clearData = () => {
    this.setState({
      username: "",
      employeeId: "",
      department: "it",
      emailId: "",
      date: "",
    });
  };

  deleteRow = () => {
    // var items = [...this.state.items];
    // items.splice(index, 1);
    // this.setState({ items });
    this.setState({
      items: this.state.items.slice(0, -1),
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

  handleChange = (e) => {
    this.setState({ department: e.target.value });
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <MainDiv>
        <Form
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          newUsername={this.state.username}
          newEmployeeId={this.state.employeeId}
          newDepartment={this.state.department}
          newEmailId={this.state.emailId}
          newDate={this.state.date}
          showModal={this.showModal}
          hideModal={this.hideModal}
          show={this.state.show}
          handleChange={this.handleChange}
          clearData={this.clearData}
        />
        <Table items={this.state.items} deleteRow={this.deleteRow} />
      </MainDiv>
    );
  }
}

export default EmployeeList;
