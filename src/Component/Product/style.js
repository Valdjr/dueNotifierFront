import styled from "styled-components";

export const Tr = styled.tr`
  &:hover {
    background: #ddd;
  }

  td {
    padding: 20px;
    border-radius: 5px;
    border: none;
  }
`;

export const Td = styled.td`
  cursor: pointer;
`;

export const Delete = styled.span`
  cursor: pointer;
  color: blueviolet;

  &:hover {
    color: #9f4aec;
  }
`;
