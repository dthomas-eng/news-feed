import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

//This component is used to show error or success messages.
const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { showIt, msg, alertClass } = alertContext;

  //The color of the alert can be set to any bootstrap alert color (i.e. "alert-success")
  const classString = "alert " + alertClass + " square-border body-text-12";

  let alertBody = "";

  if (showIt) {
    alertBody = (
      <div className='mt-3'>
        <div className={classString} style={{ width: "100%" }}>
          {msg}
        </div>
      </div>
    );
  }

  return alertBody;
};

export default Alert;
