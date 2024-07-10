import DynamicTable from 'components/DynamicTable/DynamicTable'
import { Container } from 'components/RecentCustomers/RecentCustomers';
import React from 'react'




const AllProducts = ({ props }) => {



    const columns = ["Product Info", "Category", "Stock", "Suppliers", "Price", "Action"];
    return (
        <Container>

            <DynamicTable columns={columns} data={props} title={"All Orders"} />
        </Container>
    )
}
export default AllProducts;