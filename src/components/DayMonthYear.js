function convertDate(stringDate) {
  let date = new Date(stringDate);
  return `${date.getDate()} ${date.toLocaleString("default", { month: "short" })} ${date.getFullYear()}`;
}

export default convertDate;
