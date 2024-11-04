import styled from "styled-components";
import { Card, Image } from "semantic-ui-react";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-bottom: 1px solid black;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const MovieCard = styled(Card)({
  fontFamily: "Poppins",
  color: "white",
  fontStyle: "normal",
  fontWeight: "600 !important",
  fontSize: "15px",
  marginTop: "30px",
  marginBottom: "20px",
  textAlign: "center",
  cursor: "pointer",
});

export const StyledImage = styled(Image)`
  max-height: 450px;
  object-fit: cover;
  width: 100%;
`;

export const NoPosterImage = styled.div`
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
`;
