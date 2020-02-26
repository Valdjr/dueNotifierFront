import styled from "styled-components";

export const Container = styled.form`
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
  }

  input[type="text"] {
    padding: 10px;
  }

  input[type="date"] {
    padding: 7.5px;
  }

  button {
    background: blueviolet;
    border: 0;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;
  }
`;
