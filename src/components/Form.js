import React from "react";
import { FormDiv } from "../styles/Form";

class Form extends React.Component {
  render() {
    return (
      <div id="Form">
        <h3>Add a new item to the table:</h3>
        <FormDiv onSubmit={this.props.handleFormSubmit}>
          <label htmlFor="username">
            <span>Name:</span>
            <input
              required
              id="username"
              value={this.props.newUsername}
              type="text"
              name="username"
              onChange={this.props.handleInputChange}
            />
          </label>
          <label htmlFor="employeeId">
            <span>EmployeeID:</span>
            <input
              required
              id="employeeId"
              value={this.props.newEmployeeId}
              type="text"
              name="employeeId"
              onChange={this.props.handleInputChange}
            />
          </label>
          <label htmlFor="department">
            <span>Department:</span>
            <input
              required
              id="department"
              value={this.props.newDepartment}
              type="text"
              name="department"
              onChange={this.props.handleInputChange}
            />
          </label>
          <label htmlFor="emailId">
            <span>Email Id:</span>
            <input
              required
              id="emailId"
              value={this.props.newEmailId}
              type="email"
              name="emailId"
              onChange={this.props.handleInputChange}
            />
          </label>
          <label htmlFor="date">
            <span>Date of Joining (DOJ):</span>
            <input
              required
              id="date"
              value={this.props.newDate}
              type="text"
              name="date"
              onChange={this.props.handleInputChange}
            />
          </label>
          <button type="submit" value="Submit">
            Submit Data
          </button>
        </FormDiv>
      </div>
    );
  }
}

export default Form;
