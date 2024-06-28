import React from 'react'
import styled from 'styled-components';

const StyledSubTitle = styled("h5")`
    font-size: 12px;
font-style: normal;
font-weight: 400;
color: rgba(29, 30, 33, 0.40);


`

const SubTitle = ({ children }) => {
    return (
        <StyledSubTitle>
            {children}
        </StyledSubTitle>
    )
}
export default SubTitle;