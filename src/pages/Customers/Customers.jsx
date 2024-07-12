import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';
import CustomButton from 'components/CustomButton/CustomButton';
import InputField from 'components/InputField/InputField';
import FilterBox from 'components/FilterBox/FilterBox';
import AllCustomers from 'components/AllCustomers/AllCustomers';
import { getCustomers } from 'store/operations';
import { selectGetCustomers } from 'store/selectors';
import toast from 'react-hot-toast';

const Container = styled.div`
  padding-top: 40px;
  width: 100%;
`;

const Customers = () => {
    const dispatch = useDispatch();
    const methods = useForm();
    const customers = useSelector(selectGetCustomers);
    const [noResults, setNoResults] = useState(false);

    useEffect(() => {
        dispatch(getCustomers({}));
    }, [dispatch]);

    const onSubmitFilter = async (data) => {
        try {
            const customers = await dispatch(getCustomers({ query: data.Name || '' }));

            if (customers.payload.length === 0) {
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
            {noResults ? null : <AllCustomers props={customers} />}
        </Container>
    );
};

export default Customers;
