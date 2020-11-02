import { SHOW_ALERT, HIDE_ALERT } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        showIt: true,
        msg: action.payload.msg,
        alertClass: action.payload.alertClass,
      };
    case HIDE_ALERT:
      return {
        ...state,
        showIt: false,
        msg: "",
      };
    default:
      return state;
  }
};
