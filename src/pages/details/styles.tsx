import styled from "styled-components";
import { Image } from "semantic-ui-react";

export const Wrapper = styled.div`
  width: 100vw;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Title = styled.p`
  font-family: Poppins;
  font-size: 30px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const DetailText = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
`;

export const LabelText = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
`;

export const OuterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  width: 94%;
  padding-left: 3%;
  padding-right: 3%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Col = styled.div`
  max-width: 50%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const StyledImage = styled(Image)`
  height: 450px;
  margin-top: 2%;
`;

export const NoPosterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
  width: 40%;
`;
