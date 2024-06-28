
import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

const InputField = ({ name, type }) => {
    const { register } = useFormContext();
    const StyledInput = styled('input')`
outline: none;
border-radius: 60px;
border: 1px solid rgba(29, 30, 33, 0.10);
height: 44px;
background: #FFF;
width:100%;
padding: 13px 18px;
font-size: 12px;
font-style: normal;
font-weight: 400;
    `
    return (
        <div >
            <label htmlFor={name}></label>
            <StyledInput type={type} {...register(name)} />


        </div>
    );
};

export default InputField;
