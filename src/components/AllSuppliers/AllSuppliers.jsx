import DynamicTable from 'components/DynamicTable/DynamicTable'
import { Container } from 'components/RecentCustomers/RecentCustomers';
import React from 'react'

const AllSuppliers = ({ props }) => {

    const columns = ["Suppliers Info", "Address", "Company", "Delivery date", "Amount", "Status", "Action"];

    return (
        <Container>

            <DynamicTable columns={columns} data={props} title={"All Suppliers"} />
        </Container>
    )
}
export default AllSuppliers;