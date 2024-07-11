import CustomButton from 'components/CustomButton/CustomButton';
import InputField from 'components/InputField/InputField';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSuppliers } from 'store/operations';
import { selectGetSuppliers } from 'store/selectors';
import styled from 'styled-components';
import sprite from '../../img/svg/symbol-defs.svg'

import { FormProvider, useForm } from 'react-hook-form';
import AllSuppliers from 'components/AllSuppliers/AllSuppliers';
import Modal from 'components/Modal/Modal';
import CreateSuppliersModal from 'components/CreateSuppliersModal/CreateSuppliersModal';

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
const Button = styled.div`
width: 177px;
height: 44px;
font-size: 12px;
font-style: normal;
font-weight: 500;
border-radius: 30px;
text-align: center;
padding: 13px 30px;
border: 1px solid rgba(89, 177, 122, 0.50);
margin-bottom: 20px;
`;
const Suppliers = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const dispatch = useDispatch();
    const suppliers = useSelector(selectGetSuppliers);

    const methods = useForm();

    useEffect(() => {
        dispatch(getSuppliers({}));
    }, [dispatch]);

    const onSubmit = (data) => {
        dispatch(getSuppliers({ query: data.Name || '' }));
    };

    if (suppliers.length === 0) return null;
    const openModal = () => {
        setModalOpen(true);

    }
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
            <ButtonBox><Button type="button" onClick={openModal}> Add a new suppliers</Button></ButtonBox>
            <AllSuppliers props={suppliers} />
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <CreateSuppliersModal onClose={() => setModalOpen(false)} />


            </Modal>
        </Container>
    );
};

export default Suppliers;