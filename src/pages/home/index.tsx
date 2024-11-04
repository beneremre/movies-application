import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Filter from "../../components/filter";
import Pagination from "../../components/pagination";
import MovieList from "../../components/movieList";
import { NoDataText, Wrapper } from "./styles";
import { RootState, AppDispatch } from "../../redux/store";
import { getMovies } from "../../redux/movies";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { searchString, filterYear, filterType, currPage, movies } =
    useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(
      getMovies({
        searchString,
        filterYear,
        filterType,
        currPage,
      })
    );
  }, [currPage, searchString, filterYear, filterType, dispatch]);

  return (
    <Wrapper>
      <Filter />
      {movies ? (
        <>
          <MovieList />
          <Pagination />
        </>
      ) : (
        <NoDataText>No such result :(</NoDataText>
      )}
    </Wrapper>
  );
};

export default Home;
