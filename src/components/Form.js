import React from "react";
import {
  FormDiv,
  ModalDiv,
  ModalHeaderDiv,
  ViewButton,
  CloseDiv,
  CtaDiv,
} from "../styles/Form";
import { IoIosCloseCircleOutline, IoIosAdd } from "react-icons/io";

class Form extends React.Component {
  render() {
    const {
      show,
      hideModal,
      showModal,
      handleFormSubmit,
      handleInputChange,
      handleChange,
      newDepartment,
      newUsername,
      newEmployeeId,
      newEmailId,
      newDate,
      clearData,
    } = this.props;
    return (
      <div id="Form">
        <main>
          <Modal show={show}>
            <ModalHeaderDiv>
              <h2>Add Employee Details</h2>
              <CloseDiv>
                <IoIosCloseCircleOutline onClick={hideModal} />
              </CloseDiv>
            </ModalHeaderDiv>
            <FormDiv onSubmit={handleFormSubmit}>
              <label htmlFor="username">
                <span>Name:</span>
                <input
                  required
                  id="username"
                  value={newUsername}
                  type="text"
                  name="username"
                  onChange={handleInputChange}
                />
              </label>
              <label htmlFor="employeeId">
                <span>EmployeeID:</span>
                <input
                  required
                  id="employeeId"
                  value={newEmployeeId}
                  type="text"
                  name="employeeId"
                  onChange={handleInputChange}
                />
              </label>
              <label htmlFor="department">
                <span>Department:</span>
                <select value={newDepartment} onChange={handleChange}>
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
                  value={newEmailId}
                  type="email"
                  name="emailId"
                  onChange={handleInputChange}
                />
              </label>
              <label htmlFor="date">
                <span>Date of Joining (DOJ):</span>
                <input
                  required
                  id="date"
                  value={newDate}
                  type="date"
                  name="date"
                  onChange={handleInputChange}
                />
              </label>
              <CtaDiv>
                <button type="submit" value="Submit">
                  Submit Details
                </button>
                <button onClick={clearData}>Clear</button>
              </CtaDiv>
            </FormDiv>
          </Modal>
          <ViewButton>
            <button type="button" onClick={showModal}>
              <IoIosAdd />
              New Employee
            </button>
          </ViewButton>
        </main>
      </div>
    );
  }
}

const Modal = ({ show, children }) => {
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
