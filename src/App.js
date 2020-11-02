import React from "react";
import "./App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchForm from "./components/inputs/SearchForm";
import List from "./components/list/List";
import ListState from "./context/list/ListState";
import Alert from "./components/alerts/Alert";
import AlertState from "./context/alert/AlertState";
import Pagination from "./components/navigation/Pagination";
import PaginationState from "./context/pagination/PaginationState";

const App = () => {
  return (
    <AlertState>
      <ListState>
        <PaginationState>
          {/*Helmet is used to add the same head to all pages. When more pages are added (using react-router-dom), the background gradient will be the same across all pages.*/}
          <HelmetProvider>
            <Helmet>
              <style>
                {
                  "body { background: #f06; background: linear-gradient(45deg, #2c3e50, #4ca1af); height: 100vh }"
                }
              </style>
            </Helmet>
          </HelmetProvider>
          <div className='jumbotron center-jumbotron py-2 px-4 my-0 square-border black-background'>
            <SearchForm />
            <Alert />
            <div className='list-container my-2'>
              <List />
            </div>
            <Pagination />
          </div>
        </PaginationState>
      </ListState>
    </AlertState>
  );
};

export default App;
