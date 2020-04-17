import React from "react";
import { TableDiv } from "../styles/Form";
import { IoIosCloseCircleOutline } from "react-icons/io";

class Table extends React.Component {
  render() {
    const { items, deleteRow } = this.props;
    return (
      <div id="Table">
        <h2>New Hiring Details</h2>
        <TableDiv>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>EmployeeID</th>
              <th>Department</th>
              <th>Email Id</th>
              <th>Date of Joining</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => {
              return (
                <tr key={item}>
                  <td>
                    <IoIosCloseCircleOutline
                      onClick={() => deleteRow(item.employeeId)}
                    />
                  </td>
                  <td>{item.username}</td>
                  <td>{item.employeeId}</td>
                  <td>{item.department}</td>
                  <td>{item.emailId}</td>
                  <td>{item.date}</td>
                </tr>
              );
            })}
          </tbody>
        </TableDiv>
      </div>
    );
  }
}

export default Table;
