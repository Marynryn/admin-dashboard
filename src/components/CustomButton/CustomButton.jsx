
import React from 'react';
import styled from 'styled-components';


const StyledButton = styled('button')`
  background-color: ${({ $cancel }) => ($cancel ? 'rgba(29, 30, 33, 0.1)' : 'var(--green)')};
  border-radius: 60px;
  border: none;
  font-size: 12px;
  display:  flex;
  gap: 8px;
  justify-content: center;
align-items: center;
  color:${({ cancel }) => (cancel ? 'rgba(29, 30, 33, 0.4)' : '#fff')};;
  height: 44px;
  width: 100%;
 outline: none;
  &:hover {
    background-color: ${({ cancel }) => (cancel ? 'transparent' : 'rgba(63, 148, 95, 1)')};
border: ${({ cancel }) => (cancel ? ' 1px solid var(--green)' : 'none')};
scale: 1.01;
color: ${({ cancel }) => (cancel ? 'var(--green)' : '#fff')};
  }
  &:disabled {
    background-color: rgba(29, 30, 33, 0.1);
    color: rgba(29, 30, 33, 0.4);
}
@media(min-width: 768px) {
    font-size: 14px;

}
`;

const CustomButton = ({ cancel, ...props }) => {
  return <StyledButton $cancel={cancel} {...props} />;
};


export default CustomButton;
