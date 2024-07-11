import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';

import { addProduct, editProduct, updateProduct } from 'store/operations'; // Импортируем действие для обновления продукта
import InputField from 'components/InputField/InputField';
import SelectField from 'components/SelectField/SelectField';
import CustomButton from 'components/CustomButton/CustomButton';
import { productAddSchema, productEditSchema } from 'schema/schema.js';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

const Box = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;
`;

const SuppliersForm = ({ onClose, supplier }) => {
    const dispatch = useDispatch();
    const methods = useForm({
        resolver: yupResolver(supplier ? productEditSchema : productAddSchema),
        defaultValues: supplier || {},
    });
    const { handleSubmit, reset, setValue } = methods;

    useEffect(() => {
        if (supplier) {
            for (const [key, value] of Object.entries(supplier)) {
                setValue(key, value);
            }
        }
    }, [supplier, setValue]);

    const handleAddOrUpdateProduct = (productData) => {

        if (supplier) {
            const { _id, id, ...dataWithoutId } = productData;
            console.log(dataWithoutId)
            dispatch(editProduct({ dataWithoutId, _id }));

        } else {

            dispatch(addProduct(productData));
        }
        onClose(false);
        reset();
    };

    const handleCancel = () => {
        onClose();
    };

    const categoryOptions = [
        {
            value: 'Active', label: 'Active'
        },
        { value: 'Deactive', label: 'Deactive' },

    ];

    return (
        <FormProvider {...methods}>
            <FormContainer onSubmit={handleSubmit(handleAddOrUpdateProduct)}>
                <InputField name="name" type="text" placeholder="Suppliers Info" />

                <InputField name="address" type="text" placeholder="Address" />
                <InputField name="company" type="text" placeholder="Company" />
                <InputField name="amount" type="text" placeholder="Amount" />
                <SelectField name="status" options={categoryOptions} />
                <Box>
                    <CustomButton type="submit">{supplier ? 'Save' : 'Add'}</CustomButton>
                    <CustomButton type="button" $cancel="true" onClick={handleCancel}>
                        Cancel
                    </CustomButton>
                </Box>
            </FormContainer>
        </FormProvider>
    );
};

export default SuppliersForm;
