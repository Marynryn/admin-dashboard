import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import sprite from '../../img/svg/symbol-defs.svg'
import ReactDOM from 'react-dom';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color:rgba(29, 30, 33, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
position: relative;
  background-color: white;
  padding:  40px 20px;
  border-radius: 8px;
 
  width: 335px;
  width: 295px;
     @media(min-width: 768px) {
   width: 536px;
}
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  right: 0;
  top:0;
  padding: 14px;
`;

const ModalContent = styled.div`
  
`;

const Modal = ({ isOpen, onClose, children }) => {
    const handleCloseModal = useCallback(() => {
        onClose(false);
    }, [onClose]);

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            handleCloseModal();
        }
    };

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                handleCloseModal();
            }
        };
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleCloseModal]);
    return isOpen ? ReactDOM.createPortal(
        <ModalBackground onClick={handleBackdropClick}>
            <ModalContainer>


                <CloseButton onClick={handleCloseModal}> <svg width={24} height={24} style={{ stroke: "var(--main-black)", strokeWidth: 1 }}>
                    <use href={`${sprite}#icon-x`}></use>
                </svg></CloseButton>

                <ModalContent>
                    {children}
                </ModalContent>
            </ModalContainer>
        </ModalBackground >, document.getElementById('modal-root')
    ) : null;
};

export default Modal;
