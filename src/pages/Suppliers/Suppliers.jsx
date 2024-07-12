
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSuppliers } from 'store/operations';
import { selectGetSuppliers } from 'store/selectors';
import styled from 'styled-components';
import { FormProvider, useForm } from 'react-hook-form';
import AllSuppliers from 'components/AllSuppliers/AllSuppliers';
import Modal from 'components/Modal/Modal';
import CreateSuppliersModal from 'components/CreateSuppliersModal/CreateSuppliersModal';
import FilterBox from 'components/FilterBox/FilterBox';
import toast from 'react-hot-toast';
import { ButtonsContainer } from 'pages/Products/Products';

const Container = styled.div`
    padding-top: 40px;
      width: 100%;
`;

const Box = styled.div`
   
`;


const ButtonBox = styled.div`
 width: 177px;
     
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
@media (min-width: 768px) {
    margin-bottom: 0;}
`;
const Suppliers = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const dispatch = useDispatch();
    const suppliers = useSelector(selectGetSuppliers);
    const [noResults, setNoResults] = useState(false);
    const methods = useForm();

    useEffect(() => {
        dispatch(getSuppliers({}));
    }, [dispatch]);

    const onSubmitFilter = async (data) => {
        try {
            const suppliers = await dispatch(getSuppliers({ query: data.Name || '' }));

            if (suppliers.payload.length === 0) {
                toast.error('No results found');
                setNoResults(true);
            } else {
                setNoResults(false);
            }
        } catch (error) {
            console.error('Error fetching suppliers:', error);
            toast.error('Failed to fetch suppliers');
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

                <ButtonBox>
                    <Button type="button" onClick={openModal}> Add a new suppliers</Button>
                </ButtonBox></ButtonsContainer>
            {noResults ? null : <AllSuppliers props={suppliers} />}
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <CreateSuppliersModal onClose={() => setModalOpen(false)} />


            </Modal>
        </Container>
    );
};

export default Suppliers;