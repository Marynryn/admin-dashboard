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

const ProductForm = ({ onClose, product }) => {
    const dispatch = useDispatch();
    const methods = useForm({
        resolver: yupResolver(product ? productEditSchema : productAddSchema),
        defaultValues: product || {},
    });
    const { handleSubmit, reset, setValue } = methods;

    useEffect(() => {
        if (product) {
            for (const [key, value] of Object.entries(product)) {
                setValue(key, value);
            }
        }
    }, [product, setValue]);

    const handleAddOrUpdateProduct = (productData) => {

        if (product) {
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
        { value: 'Medicine', label: 'Medicine' },
        { value: 'Head', label: 'Head' },
        { value: 'Hand', label: 'Hand' },
        { value: 'Dental Care', label: 'Dental Care' },
        { value: 'Skin Care', label: 'Skin Care' },
        { value: 'Eye Care', label: 'Eye Care' },
        { value: 'Vitamins & Supplements', label: 'Vitamins & Supplements' },
        { value: 'Orthopedic Products', label: 'Orthopedic Products' },
        { value: 'Baby Care', label: 'Baby Care' },
        { value: 'Leg', label: 'Leg' },
    ];

    return (
        <FormProvider {...methods}>
            <FormContainer onSubmit={handleSubmit(handleAddOrUpdateProduct)}>
                <InputField name="name" type="text" placeholder="Product Info" />
                <SelectField name="category" options={categoryOptions} />
                <InputField name="stock" type="number" placeholder="Stock" />
                <InputField name="suppliers" type="text" placeholder="Suppliers" />
                <InputField name="price" type="text" placeholder="Price" />
                <Box>
                    <CustomButton type="submit">{product ? 'Save' : 'Add'}</CustomButton>
                    <CustomButton type="button" $cancel="true" onClick={handleCancel}>
                        Cancel
                    </CustomButton>
                </Box>
            </FormContainer>
        </FormProvider>
    );
};

export default ProductForm;
