import { BoxName, Name } from "components/DynamicTable/DynamicTable";
import { getBgColorByStatus, getColorByStatus } from "./colorType";
import { Text } from "components/OperationTablet/OperationTablet";
import ActionButtons from "components/ActionButtons/ActionButtons";

export const getRowValue = (row, column) => {
  switch (column) {
    case "User Info":
      return (
        <BoxName>
          <img
            className="avatar"
            src={row.image || row.photo}
            alt="Avatar"
            width={36}
            height={36}
          />
          <Name>{row.name}</Name>
        </BoxName>
      );
    case "Name":
      return (
        <BoxName>
          <img
            className="avatar"
            src={row.image || row.photo}
            alt="Avatar"
            width={36}
            height={36}
          />
          <Name>{row.name}</Name>
        </BoxName>
      );
    case "Address":
      return row.address;
    case "Products":
      return row.products;
    case "Order date":
      return row.order_date;
    case "Register date":
      return row.register_date;
    case "Delivery date":
      return row.date;
    case "Price":
      return row.price;
    case "Company":
      return row.suppliers;
    case "Product Info":
      return row.name;
    case "Suppliers Info":
      return row.name;
    case "Status":
      return (
        <Text
          color={getColorByStatus(row.status)}
          bgcolor={getBgColorByStatus(row.status)}
        >
          {row.status}
        </Text>
      );
    case "Action":
      return <ActionButtons props={row} />;
    default:
      return row[column.toLowerCase()];
  }
};
