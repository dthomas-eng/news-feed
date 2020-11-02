import React, { useContext, Fragment, useEffect } from "react";
import PaginationContext from "../../context/pagination/paginationContext";
import ListContext from "../../context/list/listContext";

//This component contains the pagination arrows and current page marker at the bottom of the screen.
const Pagination = () => {
  const paginationContext = useContext(PaginationContext);
  const {
    currentPage,
    numberOfPages,
    nextPage,
    prevPage,
    setNumberOfPages,
  } = paginationContext;

  //When a request for article data is made, the pagesFound property is set in the listContext. That value is displayed in this component.
  const listContext = useContext(ListContext);
  const { pagesFound } = listContext;

  //Listen for changes in the number of pages and update the number of pages in the pagination context.
  useEffect(() => {
    pagesFound !== undefined && setNumberOfPages(pagesFound);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagesFound]);

  //Called by a click on either of the pagination buttons.
  const onClick = (e) => {
    e.preventDefault();
    if (e.target.id === "btn-next") {
      nextPage();
    }
    if (e.target.id === "btn-prev") {
      prevPage();
    }
  };

  //The next button is only displayed when there is a next page to go to. If the current page equals the total number of pages, the button is hidden.
  let nextButton = (
    <Fragment>
      {currentPage !== numberOfPages ? (
        <a onClick={onClick} data-testid='btn-next' id='btn-next' href='/#'>
          <span id='btn-next'>&raquo;</span>
        </a>
      ) : (
        <a href='/#' style={{ color: "black", cursor: "default" }}>
          <span id='btn-next'>&raquo;</span>
        </a>
      )}
    </Fragment>
  );

  //The previous button is only shown when there is a previous page to go to. If the current page is 1, the button is hidden.
  let prevButton = (
    <Fragment>
      {currentPage !== 1 ? (
        <a onClick={onClick} test-id='btn-prev' id='btn-prev' href='/#'>
          <span id='btn-prev'>&laquo;</span>
        </a>
      ) : (
        <a href='/#' style={{ color: "black", cursor: "default" }}>
          <span id='btn-prev'>&laquo;</span>
        </a>
      )}
    </Fragment>
  );

  let paginationBody = "";

  //In the event that no pages are returned for a result, don't show pagination. Otherwise, put the elements together here.
  if (numberOfPages !== 0) {
    paginationBody = (
      <div className='pag-row'>
        <div className='custom-pagination my-0'>
          {prevButton}
          <a href='/#' style={{ cursor: "default" }}>
            <span style={{ color: "white" }}>
              {currentPage}/{numberOfPages}
            </span>
          </a>
          {nextButton}
        </div>
      </div>
    );
  }

  return paginationBody;
};

export default Pagination;
