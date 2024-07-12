
import OperationTablet from 'components/OperationTablet/OperationTablet';
import React from 'react'
import styled from 'styled-components';

const Box = styled.div`
 margin-top: 20px;
width: 100%;
 @media (min-width: 1440px) {
    margin-top: 0;}
`;
const Operations = ({ props }) => {

    const columns = ["Today", "", ""];

    return (
        <Box >

            <OperationTablet columns={columns} data={props} title={"Income/Expenses"} />
        </Box>
    )

}
export default Operations;