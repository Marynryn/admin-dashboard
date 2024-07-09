export const getColorByType = (type) => {
  switch (type) {
    case "Income":
      return "var(--green)";
    case "Expense":
      return "var(--red)";
    case "Error":
      return "var(--main-black)";
    default:
      return "inherit";
  }
};
export const getBgColorByType = (type) => {
  switch (type) {
    case "Income":
      return "rgba(89, 177, 122, 0.10)";
    case "Expense":
      return "rgba(232, 80, 80, 0.10)";
    case "Error":
      return "rgba(29, 30, 33, 0.10)";
    default:
      return "inherit";
  }
};
