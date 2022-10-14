export const getTodaysDate = (value) => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  return value === "slashFormat"
    ? (today = mm + "/" + dd + "/" + yyyy)
    : (today = yyyy + "-" + mm + "-" + dd);
};
