import React, { useReducer, useContext } from "react";
import ListContext from "./listContext";
import listReducer from "./listReducer";
import { GET_ARTICLES, SET_LOADING } from "../../types";
import { getRequest } from "../../utils/getRequest";
import AlertContext from "../alert/alertContext";

//This state is responsible for the displayed articles.
const ListState = (props) => {
  //Articles is an array of objects that come from a GET request.
  //Loading is set to true while a GET request is in process.
  //pagesFound is the number of pages for a given query as returned from the GET request.
  const initialState = {
    articles: [],
    Loading: false,
    pagesFound: 0,
  };

  const [state, dispatch] = useReducer(listReducer, initialState);

  //The alert will need to be shown/hidden based on the results of the query - the methods to do that are deconstructed from the alert context.
  const alertContext = useContext(AlertContext);
  const { showAlert, hideAlert } = alertContext;

  //This function retrieves articles given a set of query parameters.
  const getArticles = (
    searchString,
    sortBy,
    resultsPerPage,
    dateStart,
    dateEnd,
    page
  ) => {
    //First, if the user specifies a start and/or end date, construct the appropriate string.
    let dateRange = "";

    if (dateStart !== null && dateStart !== "") {
      dateRange += `from-date=${dateStart}&`;
    }
    if (dateEnd !== null && dateStart !== "") {
      dateRange += `to-date=${dateEnd}`;
    }
    if (dateRange !== "" && dateRange.charAt(dateRange.length - 1) !== "&") {
      dateRange += "&";
    }

    //Set Loading in the list context to true. This is used to display the spinner in the List component.
    dispatch({ type: SET_LOADING, payload: true });

    //Assemble the query URI and make a get request.
    getRequest(
      `https://content.guardianapis.com/search?page=${page}&q=${searchString}&order-by=${sortBy}&page-size=${resultsPerPage}&${dateRange}api-key=${process.env.REACT_APP_API_KEY}&show-fields=thumbnail`
    )
      .then((res) => {
        //If there is no error but no results are returned, show an alert. Otherwise, hide the alert.
        if (res.response.total === 0) {
          showAlert("No results found.", "alert-danger");
        } else {
          hideAlert();
        }

        //Set articles in the list context to the reponse from the request.
        dispatch({ type: GET_ARTICLES, payload: res.response });

        //Set loading in the list context to false.
        dispatch({ type: SET_LOADING, payload: false });
      })
      .catch((err) => {
        //If the get request returns an error, log it in the console and display an alert.
        console.log(err);
        showAlert("Error - couldn't get feed.", "alert-danger");
      });
  };

  return (
    <ListContext.Provider
      value={{
        articles: state.articles,
        Loading: state.Loading,
        pagesFound: state.pagesFound,
        getArticles,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default ListState;
