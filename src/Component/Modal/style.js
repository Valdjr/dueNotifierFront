import styled from "styled-components";

export const Container = styled.div`
  display: ${props => props.show || "none"};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.form`
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  max-width: 400px;
  border-radius: 5px;

  input {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 5px;
  }

  input[type="text"] {
    width: 90%;
  }

  input[type="date"] {
    width: 91%;
  }

  button {
    margin: 10px 40%;
    max-width: 200px;
    color: #fff;
  }
`;

export const Close = styled.div`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
