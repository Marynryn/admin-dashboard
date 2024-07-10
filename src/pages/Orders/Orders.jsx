import CustomButton from 'components/CustomButton/CustomButton';
import InputField from 'components/InputField/InputField';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from 'store/operations';
import { selectGetOrders } from 'store/selectors';
import styled from 'styled-components';
import sprite from '../../img/svg/symbol-defs.svg'
import AllOrders from 'components/AllOrders/AllOrders';
import { FormProvider, useForm } from 'react-hook-form';

const Container = styled.div`
    padding-top: 40px;
      width: 100%;
`;
const Box = styled.div`
   display: grid;
   grid-template-columns: 2fr 1fr;
   gap: 8px;
  
     
`;
const InputBox = styled.div`
 
     
`;
const ButtonBox = styled.div`
 width: 100%;
     
`;
const StyledSvg = styled.svg`
 
     
`;

const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector(selectGetOrders);

    const methods = useForm();

    useEffect(() => {
        dispatch(getOrders({}));
    }, [dispatch]);

    const onSubmit = (data) => {
        dispatch(getOrders({ query: data.Name || '' }));
    };

    if (orders.length === 0) return null;

    return (
        <Container>

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}> <Box>
                    <InputBox>
                        <InputField placeholder={"User Name"} type={"text"} name={"Name"} />
                    </InputBox>
                    <ButtonBox>
                        <CustomButton type="submit">
                            <StyledSvg width={14} height={14} style={{ stroke: "var(--main-black)", strokeWidth: 1 }}>
                                <use href={`${sprite}#icon-filter`}></use>
                            </StyledSvg>Filter
                        </CustomButton>
                    </ButtonBox></Box>
                </form>
            </FormProvider>

            <AllOrders props={orders} />
        </Container>
    );
};

export default Orders;