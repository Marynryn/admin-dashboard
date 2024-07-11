import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import Select from 'react-select';
import styled from 'styled-components';

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: '#FFF',
        boxShadow: 'none',
        marginBottom: "14px",
        borderRadius: "60px",
        fontSize: "12px",
        border: "1px solid rgba(29, 30, 33, 0.10)",
        height: "44px",
        color: "black",
        outline: "none",
        '&:hover': {
            borderColor: '#aaa',
        },
    }),
    valueContainer: (provided) => ({
        ...provided,
        paddingLeft: "14px",
    }),
    placeholder: (base) => ({
        ...base,

        color: 'rgba(0, 0, 0, 0.5)',
    }),
    input: (provided) => ({
        ...provided,
        paddingLeft: "6px",
    }),
    singleValue: (provided) => ({
        ...provided,

        color: "var(--primary-color)",
        textTransform: 'capitalize',
        fontSize: "12px",
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        display: 'none',
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: "black",
        paddingRight: "14px",
    }),
    menu: (provided) => ({
        ...provided,
        borderRadius: "15px",
    }),
    menuList: (provided) => ({
        ...provided,
        borderRadius: "15px",
        maxHeight: "114px",
        backgroundColor: "var(--green)",
        color: "white",
        padding: "13px 10px 13px 18px ",
        "::-webkit-scrollbar": {
            width: '8px',
        },
        "::-webkit-scrollbar-thumb": {
            background: 'rgba(0,0,0,0.2)',
            borderRadius: '10px',
        },
    }),
    option: (provided, state) => ({
        ...provided,
        padding: '3px 0',
        color: state.isFocused ? 'white' : "rgba(255, 255, 255, 0.50)",
        backgroundColor: state.isFocused ? 'transparent' : 'transparent',
        fontSize: "12px",
    }),
};

const ErrorMessage = styled.p`
position: absolute;
  height: 8px;
  color: var(--red);
  font-size: 10px;
  margin: 2px 0 4px auto;
  text-align: right;
  right: 10px;
  top: 5px;
  z-index: 3;
`;

const SelectField = ({ name, options }) => {
    const { control, formState: { errors } } = useFormContext();

    return (
        <div style={{ position: "relative" }}>
            <label htmlFor={name}></label>
            {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Select
                        {...field}
                        options={options}
                        styles={customStyles}
                        placeholder="Category"
                        onChange={(selectedOption) => field.onChange(selectedOption.value)}
                        value={options.find(option => option.value === field.value)}
                    />
                )}
            />
        </div>
    );
};

export default SelectField;