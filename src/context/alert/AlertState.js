import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { SHOW_ALERT, HIDE_ALERT } from "../../types";

//This state controls the visibility, message, and class of the alert component.
const AlertState = (props) => {
  const initialState = {
    showAlert: false,
    msg: "this is the alert message",
    alertClass: "alert-success",
  };
  const [state, dispatch] = useReducer(alertReducer, initialState);

  //The alert is shown with a passed in message. The alert class can be any bootstrap alert class.
  const showAlert = (msg, alertClass) => {
    dispatch({ type: SHOW_ALERT, payload: { msg, alertClass } });
  };

  //The alert is hidden.
  const hideAlert = () => {
    dispatch({ type: HIDE_ALERT });
  };

  return (
    <AlertContext.Provider
      value={{
        showIt: state.showIt,
        msg: state.msg,
        alertClass: state.alertClass,
        showAlert,
        hideAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
