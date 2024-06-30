import Statistics from 'components/Statistics/Statistics';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDashboard } from 'store/operations';
import { selectGetDashboard } from 'store/selectors';
import styled from 'styled-components';

const Container = styled.div`
    padding-top: 20px;
     padding-bottom: 20px;
`;
const Dashboard = () => {
    const dispatch = useDispatch();
    const dashboard = useSelector(selectGetDashboard);
    useEffect(() => {
        dispatch(getDashboard());
    }, [dispatch])

    return (
        <Container>
            <Statistics props={dashboard} />
        </Container>
    )
}
export default Dashboard;