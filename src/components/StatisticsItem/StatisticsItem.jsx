import React from 'react'
import styled from 'styled-components'
import sprite from '../../img/svg/symbol-defs.svg'
import SubTitle from 'components/SubTitle/SubTitle';
import { formatNumber } from 'helpers/formatNumber';
const Container = styled.div`
    width: 157px;
height: 98px;
padding: 14px;
border-radius: 8px;
border: 1px solid rgba(29, 30, 33, 0.10);

background: #FFF;
`;
const Value = styled.h3`
    font-size: 16px;
    font-weight: 600;
 
    margin-top: 32px;
`
const StatisticsItem = ({ name, value, icon }) => {

    return (
        <Container>
            <div style={{ display: "flex", gap: "8px" }}>
                <svg width={18} height={18} style={{ stroke: "var(--main-black)", fill: "white", strokeWidth: 1 }}>
                    <use href={`${sprite}${icon}`}></use>
                </svg>
                <SubTitle>{name}</SubTitle>
            </div>
            <Value>{formatNumber(value)}</Value>

        </Container>
    )
}
export default StatisticsItem;