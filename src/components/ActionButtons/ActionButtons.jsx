import React, { useState } from 'react'
import styled from 'styled-components';
import sprite from '../../img/svg/symbol-defs.svg'
import { useDispatch } from 'react-redux';
import { productDelete } from 'store/operations';
import Modal from 'components/Modal/Modal';

import EditProductModal from 'components/EditProductModal/EditProductModal';
import { useLocation } from 'react-router-dom';

const Box = styled.div`
display: flex;
gap: 8px;
`;
const ButtonEdit = styled.div`
width: 32px;
height: 32px;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
color: rgba(89, 177, 122, 0.50);
border: 1px solid rgba(89, 177, 122, 0.50);
`;
const Button = styled.div`
width: 82px;
height: 32px;
font-size: 16px;
font-style: normal;
font-weight: 500;
border-radius: 30px;
display: flex;
gap: 6px;
justify-content: center;
align-items: center;
color: rgba(89, 177, 122, 0.50);
border: 1px solid rgba(89, 177, 122, 0.50);
`;
const ButtonDelete = styled.div`
width: 32px;
height: 32px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100%;
border: 1px solid rgba(232, 80, 80, 0.50);
`;
const StyledSvg = styled.svg`

`;

const ActionButtons = ({ props }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);
    const location = useLocation();
    const dispatch = useDispatch();
    const handleClick = () => {
        setModalOpen(true);
    };
    const handleOpen = () => {
        setModalOpen2(true);
    };
    const deleteProduct = () => {
        dispatch(productDelete(props._id));
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    const closeModal2 = () => {
        setModalOpen(false);
    };
    const isSuppliersPage = location.pathname === "/suppliers"
    return (
        <> {isSuppliersPage ? (<Button onClick={handleOpen}>
            <StyledSvg width={16} height={16} style={{ stroke: "var(--green)", strokeWidth: 1 }}>
                <use href={`${sprite}#icon-edit`}></use>

            </StyledSvg>  Edit
        </Button>) :
            <Box>
                <ButtonEdit onClick={handleClick}>
                    <StyledSvg width={16} height={16} style={{ stroke: "var(--green)", strokeWidth: 1 }}>
                        <use href={`${sprite}#icon-edit`}></use>
                    </StyledSvg>
                </ButtonEdit>
                <ButtonDelete onClick={deleteProduct}>
                    <StyledSvg width={16} height={16} style={{ stroke: "var(--red)", strokeWidth: 1 }}>
                        <use href={`${sprite}#icon-trash`}></use>
                    </StyledSvg>
                </ButtonDelete>
            </Box>}
            <Modal isOpen={modalOpen} onClose={closeModal}>
                <EditProductModal onClose={closeModal} props={props} />
            </Modal>
            <Modal isOpen={modalOpen2} onClose={closeModal2}>
                {/* <EditSuppliersModal onClose={closeModal2} props={props} /> */}
            </Modal>
        </>
    );
};

export default ActionButtons;
