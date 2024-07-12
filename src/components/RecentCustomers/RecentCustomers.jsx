import DynamicTable from 'components/DynamicTable/DynamicTable'
import React from 'react'
import styled from 'styled-components';


export const Container = styled.div`
width: 100%;
margin-top: 20px;
padding-bottom: 20px;
 @media (min-width: 768px) {
margin-top: 20px;
padding-bottom: 0;
 }
 

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