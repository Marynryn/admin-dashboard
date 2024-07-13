import React, { useRef } from 'react';
import DatePicker from 'react-datepicker';
import { useFormContext } from 'react-hook-form';
import { format } from 'date-fns';
import { registerLocale } from 'react-datepicker';
import enGB from 'date-fns/locale/en-GB';
import sprite from '../../img/svg/symbol-defs.svg';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('en-GB', enGB);

const CustomTextField = styled.input`
  outline: none;
  padding: 0 10px;
  border-radius: 60px;
  border: none;
  background: #FFF;
  width: 100%;
  padding: 13px 18px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;

const CustomBox = styled.div`
  position: relative;
  border-radius: 60px;
  width: 100%;
  border: 1px solid rgba(29, 30, 33, 0.10);
  height: 44px;
  svg {
    position: absolute;
    right: 12px;
    top: 12px;
    width: 18px;
    height: 18px;
    fill: white;
    stroke: black;
    cursor: pointer;
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

const DeliveryPicker = ({ name, isNew }) => {
    const datePickerRef = useRef(null);
    const { setValue, register, formState: { errors }, watch } = useFormContext();

    const handleIconClick = () => {
        if (datePickerRef.current) {
            datePickerRef.current.setOpen(true);
        }
    };

    const handleDateChange = (date) => {
        const formattedDate = format(date, 'MMMM d, yyyy');
        setValue(name, formattedDate);
    };

    const selectedDate = watch(name);

    return (
        <CustomBox>
            <DatePicker
                selected={selectedDate ? new Date(selectedDate) : null}
                onChange={handleDateChange}
                customInput={
                    <CustomTextField
                        placeholder="Delivery date"
                        {...register(name)}
                    />
                }
                locale="en-GB"
                placeholderText="Delivery date"
                minDate={isNew ? new Date() : null}
                dateFormat="MMMM d, yyyy"
                ref={datePickerRef}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
            />
            <svg onClick={handleIconClick}>
                <use href={`${sprite}#icon-calendar`} />
            </svg>
            {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
        </CustomBox>
    );
};

export default DeliveryPicker;
