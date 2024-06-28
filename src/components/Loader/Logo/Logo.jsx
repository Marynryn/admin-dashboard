import React from 'react'
import styled from 'styled-components';

const Image = styled("img")`
        width: 40px;
        height: 40px;

    `
const Logo = () => {


    return (
        <div>
            <Image src="/src/img/img/logo.png" alt='logo' />
        </div>
    )
}
export default Logo;