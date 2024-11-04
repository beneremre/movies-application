import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constants/config";

interface Movie {
  imdbID: string;
  Title: string;
  Year?: string;
  Type?: string;
  Poster?: string;
  [key: string]: any;
}

interface MoviesState {
  movies: Movie[];
  pageCount: number;
  clickedMovie: Movie | null;
  searchString: string;
  filterYear: string;
  filterType: string;
  currPage: number;
}

const initialState: MoviesState = {
  movies: [],
  pageCount: 1,
  clickedMovie: null,
  searchString: "Pokemon",
  filterYear: "",
  filterType: "",
  currPage: 1,
};

interface MoviesResponse {
  Search: Movie[];
  totalResults: number;
}

export const getMovies = createAsyncThunk<
  MoviesResponse,
  {
    searchString: string;
    filterYear: string;
    filterType: string;
    currPage: number;
  }
>(
  "movies/getMovies",
  async (
    { searchString, filterYear, filterType, currPage },
    { rejectWithValue }
  ): Promise<MoviesResponse | ReturnType<typeof rejectWithValue>> => {
    try {
      const response = await axios.get(
        `${API_URL}s=${searchString}&type=${filterType}&y=${filterYear}&page=${currPage}`
      );

      return {
        Search: response.data.Search,
        totalResults: response.data.totalResults,
      };
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error(error);
        return rejectWithValue(error.response?.data || error.message);
      } else {
        console.error("Unexpected error", error);
        return rejectWithValue("Unexpected error occurred");
      }
    }
  }
);

export const getMovieDetails = createAsyncThunk<Movie, string>(
  "movies/getMovieDetails",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}${id}`);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error(error);
        return rejectWithValue(error.response?.data || error.message);
      } else {
        console.error("Unexpected error", error);
        return rejectWithValue("Unexpected error occurred");
      }
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearchStr(state, action: PayloadAction<string>) {
      state.searchString = action.payload;
    },
    setFilterYear(state, action: PayloadAction<string>) {
      state.filterYear = action.payload;
    },
    setFilterType(state, action: PayloadAction<string>) {
      state.filterType = action.payload;
    },
    setCurrPage(state, action: PayloadAction<number>) {
      state.currPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getMovies.fulfilled,
        (state, action: PayloadAction<MoviesResponse>) => {
          state.movies = action.payload.Search;
          state.pageCount = Math.ceil(action.payload.totalResults / 10);
        }
      )
      .addCase(
        getMovieDetails.fulfilled,
        (state, action: PayloadAction<Movie>) => {
          state.clickedMovie = action.payload;
        }
      );
  },
});

export const { setSearchStr, setFilterYear, setFilterType, setCurrPage } =
  movieSlice.actions;
export default movieSlice.reducer;
