import styled from "styled-components";

export const MainDiv = styled.div`
  padding: 50px;
  @media (max-width: 1024px) {
    padding: 25px;
  }

  & #Table {
    overflow-x: auto;
  }
`;

export const FormDiv = styled.form`
  display: flex;
  flex-direction: column;
  & label {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 15px;

    & span {
      margin-bottom: 10px;
    }
    & input {
      height: 25px;
      border-radius: 5px;
      border: 2px solid #c3c3c3;
    }
    & select {
      border: 2px solid #c3cece;
      padding: 9px;
      border-radius: 5px;
      background: transparent;
    }
  }
  & button {
    background: #2196f3;
    color: #fff;
    font-size: 20px;
    width: 43%;
    margin: auto;
    border: 0;
    padding: 8px 6px;
    border-radius: 5px;
    box-shadow: 0px 0px 2px 2px #c3c3c3;
    cursor: pointer;
  }
`;

export const CtaDiv = styled.div`
  display: flex;
  justify-content: space-between;
  & button {
    background: #2196f3;
    color: #fff;
    font-size: 20px;
    width: 43%;
    margin: 0;
    border: 0;
    padding: 8px 6px;
    border-radius: 5px;
    box-shadow: 0px 0px 2px 2px #c3c3c3;
    cursor: pointer;
  }
`;

export const TableDiv = styled.table`
  width: 100%;
  margin: 20px 0px;
  border-spacing: 0;
  & thead {
    background: #0083d2;
  }
  & th {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #cecece;
    word-break: break-word;
    @media (max-width: 800px) {
      font-size: 13px;
    }
    @media (max-width: 600px) {
      font-size: 9px;
      padding: 2px;
    }
  }
  & tbody {
    background: #ff9800;
    display: block;
    max-height: 400px;
    overflow-y: auto;
  }

  & thead,
  tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }
  & td {
    box-sizing: border-box;
    border-bottom: 1px solid #cecece;
    border-right: 1px solid #cecece;
    word-break: break-word;
    @media (max-width: 800px) {
      font-size: 13px;
    }

    @media (max-width: 600px) {
      font-size: 9px;
      padding: 2px;
    }
  }
  & svg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 23px;
    height: 38px;
    padding: 6px;
    box-sizing: border-box;
    cursor: pointer;
    border-left: 1px solid #cecece;
  }
`;

export const ModalDiv = styled.div`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  .modal-main {
    position: fixed;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    margin: auto;
    background: #fff;
    box-shadow: 0px 0px 2px 2px #c3c3c3;
    padding: 15px;
    border-radius: 5px;
    @media (max-width: 1024px) {
      width: 50%;
    }
    @media (max-width: 600px) {
      width: 80%;
    }
  }

  .display-block {
    display: block;
  }

  .display-none {
    display: none;
  }
`;

export const ModalHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  & h2 {
    margin: 0;
    font-size: 22px;
    font-weight: 500;
  }
`;
export const ViewButton = styled.div`
  text-align: right;
  & button {
    background: #2196f3;
    color: #fff;
    font-size: 18px;
    width: auto;
    margin: auto 0 auto auto;
    border: 0;
    padding: 8px 8px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px 1px #c3c3c3;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;

export const CloseDiv = styled.div`
  text-align: right;
  & svg {
    font-size: 25px;
    cursor: pointer;
  }
`;
