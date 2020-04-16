import React, { Component } from "react";
import { MainDiv } from "../styles/Form";
import Table from "./Table";
import Form from "./Form";

class EmployeeList extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      employeeId: "",
      department: "Software Engineer",
      emailId: "",
      date: "",
      id: "",
      show: false,
      items: [
        {
          // id: 102,
          username: "Shaikh Muzaker",
          employeeId: "201",
          department: "Artificial Intelligence",
          emailId: "shaikhmuzaker@gmail.com",
          date: "2020-04-25",
        },
        {
          // id: 103,
          username: "Manish",
          employeeId: "123",
          department: "Software Engineer",
          emailId: "manish@gmail.com",
          date: "2020-04-20",
        },
        {
          // id: 104,
          username: "Sharon",
          employeeId: "145",
          department: "IT",
          emailId: "sharon@gmail.com",
          date: "2020-04-15",
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
      // id: "",
      username: "",
      employeeId: "",
      department: "Software Engineer",
      emailId: "",
      date: "",
      show: false,
    });
  };

  clearData = () => {
    this.setState({
      id: "",
      username: "",
      employeeId: "",
      department: "Software Engineer",
      emailId: "",
      date: "",
    });
  };

  deleteRow = (rowId) => {
    const filterArray = this.state.items.filter((row) => row.employeeId !== rowId);
    this.setState({ items: filterArray });
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
