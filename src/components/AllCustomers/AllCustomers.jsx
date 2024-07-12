import DynamicTable from 'components/DynamicTable/DynamicTable'
import { Container } from 'components/RecentCustomers/RecentCustomers';
import React from 'react'

const AllCustomers = ({ props }) => {

    const columns = ["User Info", "Email", "Address", "Phone", "Register date"];
    return (
        <Container>

            <DynamicTable columns={columns} data={props} title={"All Customers"} />
        </Container>
    )
}
export default AllCustomers;