import { GET_ARTICLES, SET_LOADING, SET_FILTERS } from "../../types";

const listReducer = (state, action) => {
  switch (action.type) {
    case SET_FILTERS:
      return {
        ...state,
        filterParams: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        Loading: action.payload,
      };
    case GET_ARTICLES:
      return {
        ...state,
        articles: [action.payload.results],
        pagesFound: action.payload.pages,
      };
    default:
      return state;
  }
};

export default listReducer;
