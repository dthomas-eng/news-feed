import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AlertState from "../src/context/alert/AlertState";
import "babel-polyfill";
import App from "../src/App.js";

//jest.mock("../src/utils/getRequest");

describe("SearchForm Component tests", () => {
  test("Page renders with correct text.", () => {
    const { getByText, getByPlaceholderText } = render(
      <AlertState>
        <App />
      </AlertState>
    );

    //Verify that expected text appears on the screen.
    getByText("The news.");
    getByText("Go");
    getByText("Filters");
  });

  /*
  test("Addition of new value to database causes success banner with correct text and class.", async () => {
    const { getByText, getByPlaceholderText, findByText } = render(
      <AlertState>
        <App />
      </AlertState>
    );

    //Find the input box.
    const input = getByPlaceholderText("Your Data.");

    //Type good data into the input box.
    userEvent.type(input, "good data");

    //Verify that the value of the input box is what we expect.
    expect(input.value).toBe("good data");

    //hit the send that data button.
    userEvent.click(getByText("Send data."));

    //wait to see if an alert appears with the correct text.
    const banner = await findByText("Added your data to the database.");

    //See if the banner has the correct class name.
    expect(banner.className).toMatch(/alert-success/i);
  });

  test("Addition of redundant value to database causes error banner with correct text and class.", async () => {
    const { getByText, getByPlaceholderText, findByText } = render(
      <AlertState>
        <App />
      </AlertState>
    );

    //Find the input box.
    const input = getByPlaceholderText("Your Data.");

    //Type redundant data into the input box.
    userEvent.type(input, "redundant data");

    //Verify that the value of the input box is what we expect.
    expect(input.value).toBe("redundant data");

    //hit the send that data button.
    userEvent.click(getByText("Send data."));

    //wait to see if an alert appears with the correct text.
    const banner = await findByText("That value is already in the database.");

    //See if the banner has the correct class name.
    expect(banner.className).toMatch(/alert-danger/i);
  });

  test("Attempt to submit empty value to database causes error banner with correct text and class.", async () => {
    const { getByText, getByPlaceholderText, findByText } = render(
      <AlertState>
        <App />
      </AlertState>
    );

    //Find the input box.
    const input = getByPlaceholderText("Your Data.");

    //Clear the input box.
    userEvent.type(input, "");

    //Verify that the value of the input box is what we expect.
    expect(input.value).toBe("");

    //hit the send that data button.
    userEvent.click(getByText("Send data."));

    //wait to see if an alert appears with the correct text.
    const banner = await findByText("Value is required.");

    //See if the banner has the correct class name.
    expect(banner.className).toMatch(/alert-danger/i);
  });

  test("Broken server connection causes error banner with correct text and class.", async () => {
    const { getByText, getByPlaceholderText, findByText } = render(
      <AlertState>
        <App />
      </AlertState>
    );

    //Find the input box.
    const input = getByPlaceholderText("Your Data.");

    //Type into the input box.
    userEvent.type(input, "broken server data");

    //Verify that the value of the input box is what we expect.
    expect(input.value).toBe("broken server data");

    //hit the send that data button.
    userEvent.click(getByText("Send data."));

    //wait to see if an alert appears with the correct text.
    const banner = await findByText(
      "An unknown error occured. Data not added."
    );

    //See if the banner has the correct class name.
    expect(banner.className).toMatch(/alert-danger/i);
  });
  */
});
