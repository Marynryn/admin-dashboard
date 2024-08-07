import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import { addSuppliers, editSuppliers } from 'store/operations';
import InputField from 'components/InputField/InputField';
import SelectField from 'components/SelectField/SelectField';
import CustomButton from 'components/CustomButton/CustomButton';
import { supplierAddSchema, supplierEditSchema } from 'schema/schema.js';
import DeliveryPicker from 'components/DeliveryPicker/DeliveryPiccker';
import { Container, RowBox } from 'components/ProductForm/ProductForm';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

const Box = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;
  @media (min-width: 768px) {
    width: 274px;
  }
`;

const SuppliersForm = ({ onClose, supplier, isNew }) => {
    const dispatch = useDispatch();
    const methods = useForm({
        resolver: yupResolver(supplier ? supplierEditSchema : supplierAddSchema),
        defaultValues: supplier || {},
    });
    const { handleSubmit, reset, } = methods;

    useEffect(() => {
        if (supplier) {
            for (const [key, value] of Object.entries(supplier)) {
                methods.setValue(key, value);
            }
        }
    }, [supplier, methods]);

    const handleAddOrUpdate = async (supplierData) => {

        const dataToSend = {
            ...supplierData,
            amount: supplierData.amount.toString(),
        };

        if (supplier) {
            const { _id, ...dataWithoutId } = dataToSend;

            await dispatch(editSuppliers({ ...dataWithoutId, _id }));
        } else {
            await dispatch(addSuppliers(dataToSend));
        }
        onClose(false);
        reset();
    };

    const handleCancel = () => {
        onClose();
    };

    const categoryOptions = [
        { value: 'Active', label: 'Active' },
        { value: 'Deactive', label: 'Deactive' },
    ];

    return (
        <FormProvider {...methods}>
            <FormContainer onSubmit={handleSubmit(handleAddOrUpdate)}>
                <Container>
                    <RowBox>
                        <InputField name="name" type="text" placeholder="Suppliers Info" />
                        <InputField name="address" type="text" placeholder="Address" />
                    </RowBox>
                    <RowBox>
                        <InputField name="suppliers" type="text" placeholder="Company" />
                        <DeliveryPicker name="date" isNew={isNew} />
                    </RowBox>
                    <RowBox>
                        <InputField name="amount" type="text" placeholder="Amount" />
                        <SelectField name="status" options={categoryOptions} />
                    </RowBox>
                    <Box>
                        <CustomButton type="submit">{supplier ? 'Save' : 'Add'}</CustomButton>
                        <CustomButton type="button" $cancel="true" onClick={handleCancel}>
                            Cancel
                        </CustomButton>
                    </Box>
                </Container>
            </FormContainer>
        </FormProvider>
    );
};

export default SuppliersForm;
