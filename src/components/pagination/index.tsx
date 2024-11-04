import React from "react";
import {
  PaginationButton,
  PaginationRow,
  PaginationText,
  SelectPage,
  Row,
} from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { setCurrPage } from "../../redux/movies";

const Pagination: React.FC = () => {
  const { pageCount, currPage } = useSelector(
    (state: RootState) => state.movies
  );
  const dispatch = useDispatch<AppDispatch>();

  return (
    <PaginationRow>
      <PaginationButton
        onClick={() => dispatch(setCurrPage(Number(currPage) - 1))}
        disabled={currPage === 1}
      >
        {"<"}
      </PaginationButton>
      <Row>
        <PaginationText>
          Page {currPage} of {pageCount} /
        </PaginationText>
        <PaginationText>Go to page</PaginationText>
        <SelectPage
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            dispatch(setCurrPage(Number(e.target.value)))
          }
          value={currPage}
        >
          {[...Array(pageCount)]?.map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </SelectPage>
      </Row>
      <PaginationButton
        onClick={() => dispatch(setCurrPage(Number(currPage) + 1))}
        disabled={currPage === pageCount}
      >
        {">"}
      </PaginationButton>
    </PaginationRow>
  );
};

export default Pagination;
