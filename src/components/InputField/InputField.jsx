
import React from 'react';
import { useFormContext } from 'react-hook-form';

import styled from 'styled-components';
const StyledInput = styled.input`

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
@media (min-width: 768px){
    margin-bottom: 0;
}
    `;
const ErrorMessage = styled.div`
position: absolute;
  height: 8px;
  color: var(--red);
  font-size: 10px;
  margin: 2px 0 4px auto;
  text-align: right;
  right: 10px;
  top: 5px;
`;

const InputField = ({ name, type, placeholder }) => {
    const { register, formState: { errors } } = useFormContext();

    if (errors[name]) {
        if (/must be a `number` type/i.test(errors[name].message)) {
            errors[name].message = `${name.charAt(0).toUpperCase() + name.slice(1)} must be a number`;
        }
    }

    return (
        <div style={{ position: "relative", width: "100%" }}>
            <label htmlFor={name}></label>
            {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
            <StyledInput
                id={name}
                type={type}
                placeholder={placeholder}
                {...register(name)}
            />
        </div>
    );
};

export default InputField;