
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from 'store/operations';
import { selectGetOrders } from 'store/selectors';
import styled from 'styled-components';
import AllOrders from 'components/AllOrders/AllOrders';
import { FormProvider, useForm } from 'react-hook-form';
import FilterBox from 'components/FilterBox/FilterBox';
import toast from 'react-hot-toast';

const Container = styled.div`
    padding-top: 40px;
      width: 100%;
              @media(min-width: 1440px) {
  padding-top: 75px;
      
 padding-left: 40px }
`;


const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector(selectGetOrders);
    const [noResults, setNoResults] = useState(false);
    const methods = useForm();

    useEffect(() => {
        dispatch(getOrders({}));
    }, [dispatch]);

    const onSubmitFilter = async (data) => {
        try {
            const orders = await dispatch(getOrders({ query: data.Name || '' }));

            if (orders.payload.length === 0) {
                setNoResults(true);
                toast.error('No results found');
            } else {
                setNoResults(false);
            }
        } catch (error) {
            console.error('Error fetching customers:', error);
            toast.error('Failed to fetch customers');
        }
    };


    return (
        <Container>

            <FormProvider {...methods}>
                <FilterBox onSubmit={onSubmitFilter} />
            </FormProvider>

            {noResults ? null : <AllOrders props={orders} />}
        </Container>
    );
};

export default Orders;