import DynamicTable from 'components/DynamicTable/DynamicTable'
import React from 'react'
import styled from 'styled-components';


const Container = styled.div`


`;
const RecentCustomers = ({ props }) => {


    const filteredData = props.map(({ image, name, email, spent }) => ({ image, name, email, spent }));
    const columns = ["Name", "Email", "Spent"];
    return (
        <Container>

            <DynamicTable columns={columns} data={filteredData} title={"Recent Customers"} />
        </Container>
    )
}
export default RecentCustomers;