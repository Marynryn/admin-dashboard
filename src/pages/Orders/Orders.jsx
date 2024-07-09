import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from 'store/operations';
import { selectGetOrders } from 'store/selectors';
import styled from 'styled-components';


const Container = styled.div`
    padding-top: 20px;
     
`;
const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector(selectGetOrders);

    useEffect(() => {
        dispatch(getOrders({}));
    }, [dispatch])
    if (orders.length === 0) return null;
    console.log(orders)
    return (
        <Container>
            <p>hhjjjj</p>
            {/* <Statistics props={dashboard} />
            <RecentCustomers props={dashboard.recentCustomers} />
            <Operations props={dashboard.operations} /> */}
        </Container>
    )
}
export default Orders;