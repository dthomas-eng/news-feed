//This function takes in the raw date provided by the API and reformats it to:
//Day, dd Mon YYYY for display.

const newFormat = (rawDate) => {
  let d = new Date(rawDate);
  return d.toUTCString().split(" ").splice(0, 4).join(" ");
};

export const dateFormatter = newFormat;
