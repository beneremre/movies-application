import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 100px);

  @media (max-width: 768px) {
    padding: 0px;
    width: 100vw;
  }

  @media (max-width: 480px) {
    display: block;
  }
`;

export const NoDataText = styled.p`
  font-family: Poppins;
  text-align: center;
  font-size: 20px;
`;
