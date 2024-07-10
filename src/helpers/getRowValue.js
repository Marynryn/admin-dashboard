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
    case "Price":
      return row.price;
    case "Product Info":
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
      return <ActionButtons props={row._id} />;
    default:
      return row[column.toLowerCase()];
  }
};
