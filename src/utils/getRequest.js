//This function returns a promise that is fulfilled or rejected with the final result of the get request. This is abstracted largely so a mock can be created for testing.

const request = (URL) => {
  return new Promise((resolve, reject) => {
    fetch(URL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export const getRequest = request;
