import Operations from 'components/Operations/Operations';
import RecentCustomers from 'components/RecentCustomers/RecentCustomers';
import Statistics from 'components/Statistics/Statistics';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDashboard } from 'store/operations';
import { selectGetDashboard } from 'store/selectors';
import styled from 'styled-components';

const Container = styled.div`
    padding-top: 20px;
    width: 100%;
      @media(min-width: 1440px) {
 padding-left: 40px } 
`;
const Box = styled.div`
        @media(min-width: 1440px) {
display: flex;
gap: 20px;


    }
  
`;
const Dashboard = () => {
    const dispatch = useDispatch();
    const dashboard = useSelector(selectGetDashboard);
    useEffect(() => {
        dispatch(getDashboard());
    }, [dispatch])
    if (dashboard.length === 0) return null;

    return (
        <Container>
            <Statistics props={dashboard} />
            <Box>
                <RecentCustomers props={dashboard.recentCustomers} />
                <Operations props={dashboard.operations} /></Box>
        </Container>
    )
}
export default Dashboard;