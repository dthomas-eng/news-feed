import React, { Fragment, useState, useContext, useEffect } from "react";
import ListContext from "../../context/list/listContext";
import PaginationContext from "../../context/pagination/paginationContext";

//This contains the search bar, go button, and drop down filter options.
const SearchForm = () => {
  const [state, setState] = useState({
    searchString: "",
    sortBy: "newest",
    resPerPage: 10,
    dateStart: null,
    dateEnd: null,
  });
  const { searchString, sortBy, resPerPage, dateStart, dateEnd } = state;

  //getArticles is destructured from the listContext as it is a method that is called when a search is initiated to get the articles with the requested search parameters.
  const listContext = useContext(ListContext);
  const { getArticles } = listContext;

  //Because this component needs to know when the current page has been changed and be able to set the current page back to one upon a search, the nesscesary property and method are destructured from the pagination context.
  const paginationContext = useContext(PaginationContext);
  const { currentPage, setCurrentPage } = paginationContext;

  //When the go button is clicked:
  const onSubmit = (e) => {
    e.preventDefault();

    //If the user enters something into the search bar and clicks go, the assumption is that they would like to see the most relevant thing to that search first. Therefore, sortBy is set to 'relevance' in the interface and state. If nothing is entered and go is pressed, sortBy is not automatically changed.
    if (searchString !== "") {
      getArticles(searchString, "relevance", resPerPage, dateStart, dateEnd, 1);
      document.getElementById("sortBy").value = "relevance";
      setState({ ...state, sortBy: "relevance" });
    } else {
      getArticles(searchString, sortBy, resPerPage, dateStart, dateEnd, 1);
    }
    setCurrentPage(1);
  };

  //If the current page is changed, trigger a new querry with updated parameters.
  useEffect(() => {
    getArticles(
      searchString,
      sortBy,
      resPerPage,
      dateStart,
      dateEnd,
      currentPage
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  //If any filter parameters are changed, trigger a new querry with updated parameters and set back to page 1.
  useEffect(() => {
    getArticles(searchString, sortBy, resPerPage, dateStart, dateEnd, 1);
    setCurrentPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy, resPerPage, dateStart, dateEnd]);

  //If an input is changed, set the state to reflect the new value.
  const onChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <h2 className='text-white'>The news.</h2>
      <form className='form-group m-0' onSubmit={onSubmit}>
        <div className='input-group input-max-width'>
          <input
            id='searchString'
            type='text'
            name='searchString'
            onChange={onChange}
            className='form-control square-border mr-2'
            placeholder='Search'
          ></input>
          <button className='btn-outline mr-2' type='submit'>
            Go
          </button>
          <button
            className='dropdown-toggle btn-outline'
            type='button'
            data-toggle='collapse'
            data-target='#filtersCollapse'
          >
            Filters
          </button>
        </div>

        <div className='collapse filter-options' id='filtersCollapse'>
          <div className='mr-2 filter-col'>
            <label htmlFor='dateStart' className='mt-2 mb-0'>
              Start Date:
            </label>
            <input
              id='dateStart'
              type='date'
              name='dateStart'
              label='startDate'
              onChange={onChange}
              className='form-control filter-date'
            ></input>
            <label htmlFor='dateEnd' className='my-0'>
              End Date:
            </label>
            <input
              id='dateEnd'
              type='date'
              name='dateEnd'
              label='startDate'
              onChange={onChange}
              className='form-control filter-date'
            ></input>
          </div>

          <div className='filter-col'>
            <label htmlFor='sortBy' className='mt-2 mb-0'>
              Sort By:
            </label>
            <select
              data-testid='sortBy'
              name='sortBy'
              id='sortBy'
              className='filter-dropdown'
              onChange={onChange}
            >
              <option value='newest'>newest</option>
              <option value='oldest'>oldest</option>
              <option value='relevance'>relevance</option>
            </select>
            <label htmlFor='resPerPage' className='my-0'>
              Results Per Page:
            </label>
            <select
              name='resPerPage'
              id='resPerPage'
              className='filter-dropdown'
              onChange={onChange}
            >
              <option value='10'>10</option>
              <option value='20'>20</option>
              <option value='50'>50</option>
              <option value='100'>100</option>
            </select>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default SearchForm;
