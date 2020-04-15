import React from "react";
import { TableDiv } from "../styles/Form";

class Table extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div id="Table">
        <TableDiv>
          <thead>
            <tr>
              <th>Name</th>
              <th>EmployeeID</th>
              <th>Department</th>
              <th>Email Id</th>
              <th>Date of Joining</th>
            </tr>
          </thead>
          {items.map((item) => {
            return (
              <tbody key={item}>
                <tr>
                  <td>{item.username}</td>
                  <td>{item.employeeId}</td>
                  <td>{item.department}</td>
                  <td>{item.emailId}</td>
                  <td>{item.date}</td>
                </tr>
              </tbody>
            );
          })}
        </TableDiv>
      </div>
    );
  }
}

export default Table;
