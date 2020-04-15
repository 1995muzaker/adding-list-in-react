import styled from "styled-components";

export const FormDiv = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: auto;
  background: #fff;
  box-shadow: 0px 0px 2px 2px #c3c3c3;
  padding: 15px;
  border-radius: 5px;
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
