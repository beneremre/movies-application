import React from "react";
import { useNavigate } from "react-router-dom";
import { MovieCard, Wrapper, StyledImage, NoPosterImage } from "./styles";
import { Card } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { getMovieDetails } from "../../redux/movies";

interface Movie {
  imdbID: string;
  Title: string;
  Year?: string;
  Type?: string;
  Poster?: string;
  [key: string]: any;
}

const MovieList: React.FC = () => {
  const navigate = useNavigate();
  const { movies } = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <Wrapper>
        {movies?.slice(0, 10).map((item: Movie) => {
          return (
            <MovieCard
              key={item.imdbID}
              onClick={async () => {
                await dispatch(getMovieDetails(`i=${item.imdbID}`));
                navigate(`/details/${item.imdbID}`);
              }}
            >
              {item.Poster && item.Poster !== "N/A" ? (
                <StyledImage
                  src={item.Poster}
                  wrapped
                  ui={false}
                  className="img-container"
                />
              ) : (
                <NoPosterImage>No Poster Available</NoPosterImage>
              )}

              <Card.Content style={{ marginTop: 20 }}>
                <Card.Header>{item.Title}</Card.Header>
                <Card.Description>{item.Year}</Card.Description>
              </Card.Content>
              <Card.Content extra>IMDB ID: {item.imdbID}</Card.Content>
            </MovieCard>
          );
        })}
      </Wrapper>
    </>
  );
};

export default MovieList;
