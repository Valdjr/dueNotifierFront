import styled from "styled-components";

export const Item = styled.li`
  border: 1px solid #ddd;
  background-color: #eee;
  border-radius: 5px;
  padding: 20px 20px;
  margin: 20px 0;

  span {
    float: right;

    span {
      cursor: pointer;
      color: blueviolet;
    }
  }
`;
