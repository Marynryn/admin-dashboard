import React, { useCallback, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import ReactDOM from 'react-dom';
import sprite from '../../img/svg/symbol-defs.svg';

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(29, 30, 33, 0.3);
  display: flex;
  justify-content: flex-start; 
  align-items: flex-start;
`;

const ModalContainer = styled.div`
  background-color: rgba(247, 248, 250, 1);
  padding: 92px 20px 20px;
  border-radius: 8px 0 0 8px;
  width: 78px;
position: relative;
  min-height: 100vh; 
  animation: ${slideIn} 0.3s ease-out;
  @media(min-width: 768px) {
    width: 84px;
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
  padding: 20px 14px;
`;

const ModalContent = styled.div`
   height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
  align-content: space-between;
`;

const MobileMenu = ({ isOpen, onClose, children }) => {
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
                <ModalHeader>
                    <CloseButton onClick={handleCloseModal}>
                        <svg width={32} height={32} style={{ stroke: "var(--main-black)" }}>
                            <use href={`${sprite}#icon-x`}></use>
                        </svg>
                    </CloseButton>
                </ModalHeader>
                <ModalContent>
                    {children}
                </ModalContent>
            </ModalContainer>
        </ModalBackground>, document.getElementById('modal-root')
    ) : null;
};

export default MobileMenu;
