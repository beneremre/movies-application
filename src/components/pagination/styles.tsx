import styled from "styled-components";
import { Input } from "semantic-ui-react";

export const PaginationButton = styled.button`
  background-color: #ffffff50;
  color: #00000090;
`;

export const PaginationRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: center;
`;

export const PaginationText = styled.p`
  font-family: Poppins;
  font-size: 14px;
  margin-left: 5px;
  margin-right: 2px;
`;

export const PageInput = styled(Input)`
  font-family: Poppins;
  ::-webkit-input-placeholder {
    font-family: Poppins;
  }
`;

export const SelectPage = styled.select`
  font-family: Poppins;
  ::-webkit-input-placeholder {
    font-family: Poppins;
  }
  margin-left: 8px;
  cursor: pointer;
`;
