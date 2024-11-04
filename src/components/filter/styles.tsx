import styled, { keyframes } from "styled-components";
import { Input } from "semantic-ui-react";

interface SearchWrapperProps {
  isopen: boolean;
}

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: #00000090;

  @media (max-width: 768px) {
    flex-direction: column;
    display: block;
    position: relative;
  }

  @media (max-width: 480px) {
  }
`;

export const FilterText = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600 !important;
  color: white;
  margin-left: 16px;
`;

export const TypeSelect = styled.select`
  font-family: Poppins;
  font-size: 14px;
  margin-right: 16px;
  height: 26px;
  cursor: pointer;
`;

export const Options = styled.option``;

const slideDown = keyframes`
  0% {
    max-height: 0;
    opacity: 0.2;
  }
  100% {
    max-height: 500px;
    opacity: 1;
  }
`;

export const SearchWrapper = styled.div<SearchWrapperProps>`
  overflow: hidden;
  animation: ${({ isopen }) => (isopen ? slideDown : "none")} 3s ease forwards;
`;

export const SearchInput = styled(Input)`
  font-family: Poppins;
  ::-webkit-input-placeholder {
    font-family: Poppins;
  }
`;

export const NumberInput = styled(Input)`
  ::-webkit-input-placeholder {
    font-family: Poppins;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ClearFilterButton = styled.button`
  background-color: #fa320750;
  color: white;
  border-color: #fa320750;
  cursor: pointer;
  width: auto;
  height: 26px;
  font-family: Poppins;
  font-weight: 500 !important;
  font-size: 15px;
  border-radius: 4px !important;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-left: 16px;
    margin-bottom: 16px;
  }
`;
