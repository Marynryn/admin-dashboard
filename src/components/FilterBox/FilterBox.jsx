import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import sprite from '../../img/svg/symbol-defs.svg';
import CustomButton from 'components/CustomButton/CustomButton';
import InputField from 'components/InputField/InputField';

const Box = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 8px;
  margin-bottom: 14px;
  @media (min-width: 768px) {
    width: 354px;
  }
`;

const InputBox = styled.div``;

const ButtonBox = styled.div`
  width: 100%;
`;

const StyledSvg = styled.svg`
  stroke: var(--main-black);
  stroke-width: 1;
`;

const FilterBox = ({ onSubmit }) => {
    const { handleSubmit } = useFormContext();

    const handleFormSubmit = (data) => {
        onSubmit(data);
    };

    return (

        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Box>
                <InputBox>
                    <InputField placeholder="User Name" type="text" name="Name" />
                </InputBox>
                <ButtonBox>
                    <CustomButton type="submit">
                        <StyledSvg width={14} height={14}>
                            <use href={`${sprite}#icon-filter`} />
                        </StyledSvg>
                        Filter
                    </CustomButton>
                </ButtonBox> </Box>
        </form>

    );
};

export default FilterBox;
