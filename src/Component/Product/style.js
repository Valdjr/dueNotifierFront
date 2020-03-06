import styled from "styled-components";

export const Tr = styled.tr`
  td {
    padding: 20px;
    border-radius: 5px;
  }
`;

export const Td = styled.td`
  cursor: pointer;
  border-bottom: 1px solid #fff;
  border-radius: 5px;

  &:hover {
    border-bottom: 2px solid blueviolet;
    transition-duration: 0.15s;
  }
`;

export const Delete = styled.span`
  cursor: pointer;
  color: blueviolet;

  &:hover {
    color: #9f4aec;
  }
`;
