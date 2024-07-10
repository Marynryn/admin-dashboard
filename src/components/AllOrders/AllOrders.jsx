import DynamicTable from 'components/DynamicTable/DynamicTable'
import { Container } from 'components/RecentCustomers/RecentCustomers';
import React from 'react'




const AllOrders = ({ props }) => {



    const columns = ["User Info", "Address", "Products", "Order date", "Price", "Status"];
    return (
        <Container>

            <DynamicTable columns={columns} data={props} title={"All Orders"} />
        </Container>
    )
}
export default AllOrders;