//This function mocks the get request. That way, the interface can be tested without actual API calls.
const request = (URL, content) => {
  const successRes = {
    success: true,
    data: {
      value: "good data",
    },
  };

  const failRes = {
    success: false,
    error: "That value is already in the database. ",
  };

  const emptyRes = {
    success: false,
    error: "Value is required.",
  };

  const errorRes = {
    msg: "This is a made up error message.",
  };

  return new Promise((resolve, reject) => {
    if (content.value === "good data") {
      resolve(successRes);
    } else if (content.value === "redundant data") {
      resolve(failRes);
    } else if (content.value === "") {
      resolve(emptyRes);
    } else if (content.value === "broken server data") {
      reject(errorRes);
    }
  });
};

export const getRequest = request;
