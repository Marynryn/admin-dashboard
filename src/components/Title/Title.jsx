import React from 'react'
import styled from 'styled-components';

const StyledTitle = styled("h2")`
font-size: 20px;
font-weight: 600;
margin-bottom: 4px;
@media(min-width: 768px) {
    font-size: 24px;
}
 `
const Title = () => {
    return (
        <StyledTitle>Medicine store</StyledTitle>
    )
}
export default Title;