import React from 'react'
import styled from 'styled-components';
const StyledLine = styled("div")`
    margin: 0 8px;
     height: 12px;
      width: 1px;
background-color: rgba(29, 30, 33, 0.40);
 `
export const Line = () => {
    return (
        <StyledLine></StyledLine>
    )
}
export default Line;