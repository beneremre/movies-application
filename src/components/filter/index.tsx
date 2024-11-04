import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "semantic-ui-react";
import { RootState, AppDispatch } from "../../redux/store";
import {
  ClearFilterButton,
  FilterText,
  FilterWrapper,
  NumberInput,
  Options,
  SearchWrapper,
  SearchInput,
  TypeSelect,
} from "./styles";
import {
  setSearchStr,
  setFilterYear,
  setFilterType,
  setCurrPage,
  getMovies,
} from "../../redux/movies";

const Filter: React.FC = () => {
  const { searchString, filterYear, filterType } = useSelector(
    (state: RootState) => state.movies
  );
  const [open, setOpen] = useState<boolean>(false);
  const [yearOpen, setYearOpen] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <FilterWrapper>
      <Grid columns={4} className="grid-wrapper">
        <Grid.Column className="filter-grid">
          <FilterText
            style={{ cursor: "pointer" }}
            onClick={() => setOpen((open) => !open)}
          >
            Search <span style={{ marginLeft: 6 }}>🔍</span>
          </FilterText>

          {open && (
            <SearchWrapper isopen={open}>
              <SearchInput
                value={searchString}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  dispatch(setSearchStr(e.target.value));
                  dispatch(setCurrPage(1));
                }}
              />
            </SearchWrapper>
          )}
        </Grid.Column>
        <Grid.Column className="filter-grid">
          <FilterText
            style={{ cursor: "pointer" }}
            onClick={() => setYearOpen((open) => !open)}
          >
            Year <span style={{ marginLeft: 6 }}>🔍</span>
          </FilterText>

          {yearOpen && (
            <SearchWrapper isopen={yearOpen}>
              <NumberInput
                type="number"
                value={filterYear}
                placeholder="Enter Year"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  dispatch(setFilterYear(e.target.value));
                  dispatch(setCurrPage(1));
                }}
              />
            </SearchWrapper>
          )}
        </Grid.Column>
        <Grid.Column className="filter-grid">
          <FilterText>Type </FilterText>
          <TypeSelect
            value={filterType}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              dispatch(setFilterType(e.target.value));
              dispatch(setCurrPage(1));
            }}
          >
            <Options value="">All</Options>
            <Options value="movie">Movie</Options>
            <Options value="series">Series</Options>
            <Options value="episode">Episode</Options>
          </TypeSelect>
        </Grid.Column>
        <Grid.Column className="filter-grid">
          <ClearFilterButton
            onClick={() => {
              dispatch(setCurrPage(1));
              dispatch(setFilterType(""));
              dispatch(setFilterYear(""));
              dispatch(setSearchStr("Pokemon"));
              dispatch(
                getMovies({
                  searchString: "Pokemon",
                  filterYear: "",
                  filterType: "",
                  currPage: 1,
                })
              );
            }}
          >
            Clear Filter
          </ClearFilterButton>
        </Grid.Column>
      </Grid>
    </FilterWrapper>
  );
};

export default Filter;
