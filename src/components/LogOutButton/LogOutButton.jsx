import React from 'react'
import sprite from '../../img/svg/symbol-defs.svg'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { logOut } from 'store/operations';
const ButtonLogOut = styled("button")`
width: 38px;
height: 38px;
border-radius: 100%;
display: flex;
  justify-content: center;
  align-items: center;
background-color: var(--green);
border: none;
    @media(min-width: 768px) {
  width: 44px;}
`;
const Svg = styled("svg")`
    width: 14px;
    height: 14px;
    fill: currentColor;
    @media(min-width: 768px) {
        width: 16px;
        height: 16px;
    }
`;


const LogOutButton = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {

        dispatch(logOut());
    }
    return (
        <div>
            <ButtonLogOut onClick={handleLogout}>
                <Svg width={14} height={14} >
                    <use href={`${sprite}#icon-logout`}></use>
                </Svg>
            </ButtonLogOut>
        </div>
    )
}
export default LogOutButton
