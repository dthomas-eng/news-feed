import React, { useReducer } from "react";
import PaginationContext from "./paginationContext";
import paginationReducer from "./paginationReducer";
import { NEXT_PAGE, PREV_PAGE, SET_PAGES, SET_PAGE } from "../../types";

//This state handles the data that drives the pagination component. Keeps track of and provides methods to change the total number of pages and current page.
const PaginationState = (props) => {
  const initialState = {
    currentPage: 1,
    numberOfPages: 0,
  };
  const [state, dispatch] = useReducer(paginationReducer, initialState);

  //If the current page is less than the total number of pages, increment the current page.
  const nextPage = () => {
    let nextPageVal = state.numberOfPages;
    if (state.currentPage < state.numberOfPages) {
      nextPageVal = state.currentPage + 1;
    }
    dispatch({ type: NEXT_PAGE, payload: nextPageVal });
  };

  //If the previous page is 2 or greater, decrement the current page.
  const prevPage = () => {
    let prevPageVal = 1;
    if (state.currentPage > 1) {
      prevPageVal = state.currentPage - 1;
    }
    dispatch({ type: PREV_PAGE, payload: prevPageVal });
  };

  //Set the total number of pages to the value passed into this function.
  const setNumberOfPages = (pages) => {
    dispatch({ type: SET_PAGES, payload: pages });
  };

  //Sets the current page to the value passed into this function.
  const setCurrentPage = (page) => {
    dispatch({ type: SET_PAGE, payload: page });
  };

  return (
    <PaginationContext.Provider
      value={{
        currentPage: state.currentPage,
        numberOfPages: state.numberOfPages,
        nextPage,
        prevPage,
        setNumberOfPages,
        setCurrentPage,
      }}
    >
      {props.children}
    </PaginationContext.Provider>
  );
};

export default PaginationState;
