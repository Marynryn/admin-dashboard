import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import InputField from 'components/InputField/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import { authSchema } from 'schema/schema';
import { useDispatch } from 'react-redux';
import { login } from 'store/operations';
import CustomButton from 'components/CustomButton/CustomButton';
import styled from 'styled-components';
import sprite from '../../img/svg/symbol-defs.svg'

const ButtonContainer = styled.div`
width: 100%;
margin-top: 40px;
`;
const Form = styled.form`
    width: 100%;
     @media(min-width: 768px) {
  width: 323px;
}
`;
const ButtonEye = styled.button`
position: absolute;
background-color: transparent;
border: none;
right:18px;
top:13px;
`;

const RegistrationForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const methods = useForm({
        resolver: yupResolver(authSchema)
    });
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const { handleSubmit, reset } = methods;


    const onSubmit = async (data) => {

        try {

            await dispatch(login(data));
            reset();
            toast.success("Registration successful");
        } catch (error) {

            toast.error("Failed to register");
        }
    };

    return (
        <FormProvider {...methods}>
            <Form onSubmit={handleSubmit(onSubmit)} >


                <div >

                    <InputField type="email" name="email" label="Email" placeholder="Email address" />
                    <div style={{ position: "relative" }}>
                        <InputField type={showPassword ? 'text' : 'password'} name="password" label="Password" placeholder="Password" />
                        <ButtonEye onClick={handleClickShowPassword}>
                            {showPassword ? (
                                <svg width={18} height={18} style={{ stroke: 'var(--main-black)', fill: " white" }}>
                                    <use href={`${sprite}#icon-eye-off`}></use>
                                </svg>
                            ) : (
                                <svg width={18} height={18} style={{ stroke: 'var(--main-black)', fill: " white" }}>
                                    <use href={`${sprite}#icon-eye`}></use>
                                </svg>
                            )}</ButtonEye>
                    </div>
                </div>

                <ButtonContainer ><CustomButton type="submit" >Login</CustomButton></ButtonContainer>

            </Form>

        </FormProvider>
    );
};

export default RegistrationForm;
