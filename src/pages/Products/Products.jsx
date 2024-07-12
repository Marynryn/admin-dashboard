
import CustomButton from 'components/CustomButton/CustomButton';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'store/operations';
import { selectGetProducts } from 'store/selectors';
import styled from 'styled-components';
import sprite from '../../img/svg/symbol-defs.svg'
import { FormProvider, useForm } from 'react-hook-form';
import AllProducts from 'components/AllProducts/Allproducts';
import Modal from 'components/Modal/Modal';
import CreateProductModal from 'components/CreateProductModal/CreateProductModal';
import toast from 'react-hot-toast';
import FilterBox from 'components/FilterBox/FilterBox';

const Container = styled.div`
    padding-top: 40px;
      width: 100%;
`;
const Box = styled.div`
   display: flex;
  align-items: center;
   gap: 8px;
  margin-bottom: 20px;
  @media (min-width: 768px){
       margin-bottom: 0;}
`;
export const ButtonsContainer = styled.div`
@media (min-width: 768px){
 display: flex;
justify-content: space-between
}

`;
const Text = styled.p`
 margin:0;
 font-size: 14px;
font-weight: 500;
     
`;
const ButtonBox = styled.div`
 width: 44px;
 height: 44px;
   
`;
const StyledSvg = styled.svg`
 
     
`;

const Products = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const dispatch = useDispatch();
    const products = useSelector(selectGetProducts);
    const [noResults, setNoResults] = useState(false);
    const methods = useForm();

    useEffect(() => {
        dispatch(getProducts({}));
    }, [dispatch]);

    const onSubmitFilter = async (data) => {
        try {
            const products = await dispatch(getProducts({ query: data.Name || '' }));

            if (products.payload.length === 0) {
                toast.error('No results found');
                setNoResults(true);
            } else {
                setNoResults(false);
            }
        } catch (error) {
            console.error('Error fetching :', error);
            toast.error('Failed to fetch ');
        }
    };

    const openModal = () => {
        setModalOpen(true);

    }
    return (
        <Container>
            <ButtonsContainer>
                <FormProvider {...methods}>
                    <FilterBox onSubmit={onSubmitFilter} />
                </FormProvider>
                <Box>
                    <ButtonBox>
                        <CustomButton type="submit" onClick={openModal}>
                            <StyledSvg width={16} height={16} style={{ stroke: "var(--white)", strokeWidth: 1 }}>
                                <use href={`${sprite}#icon-plus`}></use>
                            </StyledSvg>
                        </CustomButton>

                    </ButtonBox>
                    <Text>Add a new product</Text></Box></ButtonsContainer>
            {noResults ? null : <AllProducts props={products} />}
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <CreateProductModal onClose={() => setModalOpen(false)} />


            </Modal>
        </Container>

    );
};

export default Products;