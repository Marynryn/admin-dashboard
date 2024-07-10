
import CustomButton from 'components/CustomButton/CustomButton';
import InputField from 'components/InputField/InputField';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'store/operations';
import { selectGetProducts } from 'store/selectors';
import styled from 'styled-components';
import sprite from '../../img/svg/symbol-defs.svg'

import { FormProvider, useForm } from 'react-hook-form';
import AllProducts from 'components/AllProducts/Allproducts';

const Container = styled.div`
    padding-top: 40px;
      width: 100%;
`;
const Box = styled.div`
   display: flex;
  align-items: center;
   gap: 8px;
  margin-bottom: 20px;
     
`;
const InputBox = styled.div`
 width: 100%;
     
`;
const Text = styled.p`
 margin:0;
 font-size: 14px;
font-weight: 500;
     
`;
const ButtonBox = styled.div`
 width: 42px;
 height: 42px;
     
`;
const StyledSvg = styled.svg`
 
     
`;

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectGetProducts);

    const methods = useForm();

    useEffect(() => {
        dispatch(getProducts({}));
    }, [dispatch]);

    const onSubmit = (data) => {
        dispatch(getProducts({ query: data.Name || '' }));
    };

    if (products.length === 0) return null;
    console.log(products)
    return (
        <Container>

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <InputBox>
                        <InputField placeholder={"Product Name"} type={"text"} name={"Name"} />
                    </InputBox>

                </form>
            </FormProvider>
            <Box>
                <ButtonBox>
                    <CustomButton type="submit">
                        <StyledSvg width={16} height={16} style={{ stroke: "var(--white)", strokeWidth: 1 }}>
                            <use href={`${sprite}#icon-plus`}></use>
                        </StyledSvg>
                    </CustomButton>

                </ButtonBox>
                <Text>Add a new product</Text></Box>
            <AllProducts props={products} />
        </Container>
    );
};

export default Products;