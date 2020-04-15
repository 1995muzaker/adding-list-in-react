import React from "react";
import {
  FormDiv,
  ModalDiv,
  ViewButton,
  CloseDiv,
  CtaDiv,
} from "../styles/Form";
import { IoIosCloseCircleOutline } from "react-icons/io";

class Form extends React.Component {
  render() {
    const { show, hideModal, showModal } = this.props;
    return (
      <div id="Form">
        <main>
          <Modal show={show}>
            <CloseDiv>
              <IoIosCloseCircleOutline onClick={hideModal} />
            </CloseDiv>
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
                <select
                  value={this.props.newDepartment}
                  onChange={this.props.handleChange}
                >
                  <option value="IT">IT</option>
                  <option value="Business Developnment">
                    Business Developnment
                  </option>
                  <option value="Artificial Intilligence">
                    Artificial Intilligence
                  </option>
                  <option value="Software Engineer">Software Engineer</option>
                </select>
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
                  type="date"
                  name="date"
                  onChange={this.props.handleInputChange}
                />
              </label>
              <CtaDiv>
                <button type="submit" value="Submit">
                  Submit Details
                </button>
                <button onClick={this.props.clearData}>Clear</button>
              </CtaDiv>
            </FormDiv>
          </Modal>
          <ViewButton>
            <button type="button" onClick={showModal}>
              New Employee
            </button>
          </ViewButton>
        </main>
        {/* <h3>Add a new item to the table:</h3> */}
      </div>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <ModalDiv>
      <div className={showHideClassName}>
        <section className="modal-main">{children}</section>
      </div>
    </ModalDiv>
  );
};

export default Form;
