import React from 'react'
import styled from 'styled-components';

const StyledSubTitle = styled("h5")`

    font-size: 10px;
font-style: normal;
font-weight: 400;
color: rgba(29, 30, 33, 0.40);


        @media(min-width: 375px) {
 font-size: 12px;
}

`

const SubTitle = ({ children }) => {
    return (
        <StyledSubTitle>
            {children}
        </StyledSubTitle>
    )
}
export default SubTitle;