import React from 'react'
import styled from 'styled-components';

const StyledTitle = styled("h2")`
font-size: 20px;
font-weight: 600;
@media(max-width: 768px) {
    font-size: 24px;
}
 `
const Title = () => {
    return (
        <StyledTitle>Medicine store</StyledTitle>
    )
}
export default Title;