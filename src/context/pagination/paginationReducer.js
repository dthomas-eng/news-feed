import { NEXT_PAGE, PREV_PAGE, SET_PAGES, SET_PAGE } from "../../types";

const paginationReducer = (state, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case PREV_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_PAGES:
      return {
        ...state,
        numberOfPages: action.payload,
      };
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default paginationReducer;
