import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AlertState from "../src/context/alert/AlertState";
import "babel-polyfill";
import App from "../src/App.js";

//Mocks the module that makes the api request. Sends back pre-defined responses.
jest.mock("../src/utils/getRequest");

describe("SearchForm Component tests", () => {
  test("Page loads, gets default data, and renders correct text.", async () => {
    const { getByText, getByPlaceholderText, findByText } = render(
      <AlertState>
        <App />
      </AlertState>
    );

    //Check that the search bar and buttons appear.
    getByText("The news.");
    getByPlaceholderText("Search");
    getByText("Go");
    getByText("Filters");

    //Verify that the first article has loaded.
    await findByText("Most Recent Article 1");
  });

  test("Clicking filters causes filter options to appear.", async () => {
    const { getByText, findByText } = render(
      <AlertState>
        <App />
      </AlertState>
    );

    //Click on the filter button.
    userEvent.click(getByText("Filters"));

    //Verify that expected text appears on the screen.
    getByText("Start Date:");
    getByText("End Date:");
    getByText("Sort By:");
    getByText("Results Per Page:");

    //Verify that the first article has loaded (This is mainly to resolve the promise so we don't get an act() warning.)
    await findByText("Most Recent Article 1");
  });

  test("Clicking on pagination arrows causes pagination to change and return correct data.", async () => {
    const { getByText, getByTestId, findByText } = render(
      <AlertState>
        <App />
      </AlertState>
    );

    //Verify that expected text appears on the screen.
    await findByText("1/3");

    //Click on the next page button.
    userEvent.click(getByTestId("btn-next"));

    //Verify that pagination display changed.
    getByText("2/3");

    //Check to see that the expected article loaded.
    await findByText("Most Recent Article 11");

    //Click on the next page button.
    userEvent.click(getByTestId("btn-next"));

    //Verify that pagination display changed.
    getByText("3/3");

    //Check to see that the expected article loaded.
    await findByText("Most Recent Article 21");
  });

  test("Search for cat returns correct results.", async () => {
    const { getByText, getByPlaceholderText, findByText } = render(
      <AlertState>
        <App />
      </AlertState>
    );

    //Find the input box.
    const input = getByPlaceholderText("Search");

    //Search for cats.
    userEvent.type(input, "cats");

    //Click on the search button.
    userEvent.click(getByText("Go"));

    //Verify that expected text appears on the screen.
    await findByText("Most Relevant Cat Article 1");
  });

  test("Searching for cat and filterting by oldest returns correct data.", async () => {
    const { getByText, getByPlaceholderText, findByText, getByTestId } = render(
      <AlertState>
        <App />
      </AlertState>
    );

    //Find the input box.
    const input = getByPlaceholderText("Search");

    //Search for cats.
    userEvent.type(input, "cats");

    //Click on the search button.
    userEvent.click(getByText("Go"));

    //Verify that expected text appears on the screen.
    await findByText("Most Relevant Cat Article 1");

    //Click on the filter button.
    userEvent.click(getByText("Filters"));

    //Find the sort by select.
    const sortBy = getByTestId("sortBy");

    //select oldest.
    userEvent.selectOptions(sortBy, ["oldest"]);

    //Verify that expected text appears on the screen.
    await findByText("Oldest Cat Article 1");
  });

  test("Searching for a string that returns no results shows an alert with correct text and no paginiation.", async () => {
    const { getByText, getByPlaceholderText, findByText } = render(
      <AlertState>
        <App />
      </AlertState>
    );

    //Find the input box.
    const input = getByPlaceholderText("Search");

    //Search for a string that will return 0 results.
    userEvent.type(input, "noresults");

    //Click on the search button.
    userEvent.click(getByText("Go"));

    //Verify that expected text appears on the screen.
    await findByText("No results found.");
  });

  test("Bad request - displays alert with correct text.", async () => {
    const { getByText, getByPlaceholderText, findByText, getByTestId } = render(
      <AlertState>
        <App />
      </AlertState>
    );

    //Find the input box.
    const input = getByPlaceholderText("Search");

    //Search for a string that will return an error.
    userEvent.type(input, "error");

    //Click on the search button.
    userEvent.click(getByText("Go"));

    //Verify that expected text appears on the screen.
    await findByText("Error - couldn't get feed.");
  });
});
