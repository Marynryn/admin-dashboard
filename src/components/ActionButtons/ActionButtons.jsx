import React, { useState } from 'react'
import styled from 'styled-components';
import sprite from '../../img/svg/symbol-defs.svg'
import { useDispatch, useSelector } from 'react-redux';
import { productDelete } from 'store/operations';
import Modal from 'components/Modal/Modal';
import { setModal } from 'store/reducer';
import { selectGetModalIsOpen } from 'store/selectors';

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
    const modalOpen = useSelector(selectGetModalIsOpen)

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setModal(true));

    };
    const deleteProduct = () => {
        dispatch(productDelete(props));
    };


    return (<>
        <Box>
            <ButtonEdit onClick={handleClick()}>
                <StyledSvg width={16} height={16} style={{ stroke: "var(--green)", strokeWidth: 1 }}>
                    <use href={`${sprite}#icon-edit`}></use>
                </StyledSvg></ButtonEdit>
            <ButtonDelete onClick={() => deleteProduct()}>
                <StyledSvg width={16} height={16} style={{ stroke: "var(--red)", strokeWidth: 1 }}>
                    <use href={`${sprite}#icon-trash`}></use>
                </StyledSvg></ButtonDelete>
        </Box>
        <Modal isOpen={modalOpen} >
            <p>hhjjj</p>
        </Modal>

    </>
    )
}
export default ActionButtons;