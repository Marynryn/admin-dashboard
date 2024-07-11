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
export const getColorByStatus = (status) => {
  switch (status) {
    case "Completed":
      return "var(--green)";
    case "Active":
      return "var(--green)";
    case "Cancelled":
      return "var(--red)";
    case "Deactive":
      return "var(--red)";
    case "Confirmed":
      return " #8059E4";
    case "Pending":
      return " #F79042";
    case "Processing":
      return " #70A6E8";
    case "Shipped":
      return "#ffd600";
    case "Delivered":
      return "var(--main-black)";
    default:
      return "inherit";
  }
};
export const getBgColorByStatus = (status) => {
  switch (status) {
    case "Completed":
      return "rgba(89, 177, 122, 0.10)";
    case "Active":
      return "rgba(89, 177, 122, 0.10)";
    case "Cancelled":
      return "rgba(232, 80, 80, 0.10)";
    case "Deactive":
      return "rgba(232, 80, 80, 0.10)";
    case "Confirmed":
      return "rgba(128, 89, 228, 0.10)";
    case "Pending":
      return "rgba(247, 144, 66, 0.10)";
    case "Processing":
      return "rgba(112, 166, 232, 0.10)";
    case "Shipped":
      return "rgba(255, 214, 0, 0.1)";
    case "Delivered":
      return "rgba(29, 30, 33, 0.10)";
    default:
      return "inherit";
  }
};
