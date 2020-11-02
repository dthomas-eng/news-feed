import React, { Fragment, useContext } from "react";
import ListItem from "./ListItem";
import ListContext from "../../context/list/listContext";
import Loader from "./Loader.gif";

//This component contains the scrollable list of article thumbnails when content is loaded and a loader when content is loading.
const List = () => {
  const listContext = useContext(ListContext);
  const { articles, Loading } = listContext;

  let articleList = "";

  //In the event that articles is a non emtpy array and the http request is complete (Loading === false), fill articleList with a mapping of ListItem components with article data. If http request is not complete (Loading === true), show a loader. If loading is complete and nothing shows up in articles, display nothing.
  if (articles.length !== 0 && Loading === false) {
    articleList = articles[0].map((article) => (
      <ListItem articleData={article} key={article.webUrl} />
    ));
  } else if (Loading === true) {
    articleList = (
      <Fragment>
        <img src={Loader} alt='loading...' className='loader' />
      </Fragment>
    );
  }

  return articleList;
};

export default List;
