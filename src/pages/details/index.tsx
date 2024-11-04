import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { getMovieDetails } from "../../redux/movies";
import {
  Col,
  DetailText,
  LabelText,
  StyledImage,
  NoPosterDiv,
  Wrapper,
  InnerWrapper,
  OuterRow,
  Row,
  Title,
} from "./styles";

interface Movie {
  imdbID: string;
  Title: string;
  Year?: string;
  Type?: string;
  Poster?: string;
  [key: string]: any;
}

interface RootState {
  movies: {
    clickedMovie: Movie | null;
  };
}

const Details: React.FC = () => {
  const { clickedMovie } = useSelector((state: RootState) => state.movies);
  const { imdbID } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (clickedMovie?.imdbId !== imdbID) {
      dispatch(getMovieDetails(`i=${imdbID}`));
    }
  }, [clickedMovie?.imdbId, imdbID]);

  return (
    <Wrapper>
      <Title>{clickedMovie?.Title}</Title>
      <InnerWrapper>
        <OuterRow>
          {clickedMovie?.Poster === "N/A" ? (
            <NoPosterDiv>
              <Title>No Poster</Title>
            </NoPosterDiv>
          ) : (
            <StyledImage src={clickedMovie?.Poster} alt={clickedMovie?.Title} />
          )}
          <Col>
            <Row>
              <DetailText>{clickedMovie?.Plot}</DetailText>
            </Row>
            <Row>
              <LabelText>IMDb Rating: </LabelText>
              <DetailText>
                {clickedMovie?.imdbRating} ( {clickedMovie?.imdbVotes} votes )
              </DetailText>
            </Row>
            <Row>
              <LabelText>Language: </LabelText>
              <DetailText>{clickedMovie?.Language}</DetailText>
            </Row>
            <Row>
              <LabelText>Director: </LabelText>
              <DetailText>{clickedMovie?.Director}</DetailText>
            </Row>
            <Row>
              <LabelText>Actors: </LabelText>
              <DetailText>{clickedMovie?.Actors}</DetailText>
            </Row>
            <Row>
              <LabelText>Release Date: </LabelText>
              <DetailText>{clickedMovie?.Released}</DetailText>
            </Row>
            <Row>
              <LabelText>Runtime: </LabelText>
              <DetailText>{clickedMovie?.Runtime}</DetailText>
            </Row>
            <Row>
              <LabelText>Genre: </LabelText>
              <DetailText>{clickedMovie?.Genre}</DetailText>
            </Row>
            <Row>
              <LabelText>Writer: </LabelText>
              <DetailText>{clickedMovie?.Writer}</DetailText>
            </Row>
            <Row>
              <LabelText>Production: </LabelText>
              <DetailText>{clickedMovie?.Production || "N/A"}</DetailText>
            </Row>
          </Col>
        </OuterRow>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Details;
