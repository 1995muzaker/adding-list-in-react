import React from "react";

class Table extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div id="Table">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>EmployeeID</th>
              <th>Department</th>
              <th>Email Id</th>
              <th>Date of Joining</th>
            </tr>
            {items.map((item) => {
              return (
                <tr key={item}>
                  <td>{item.username}</td>
                  <td>{item.employeeId}</td>
                  <td>{item.department}</td>
                  <td>{item.emailId}</td>
                  <td>{item.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
