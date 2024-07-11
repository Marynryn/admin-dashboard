import React from 'react';
import Title from 'components/Title/Title';
import ProductForm from 'components/ProductForm/ProductForm';


const CreateProductModal = ({ onClose }) => {

    return (
        <div>
            <Title>Add a new product</Title>
            <ProductForm onClose={onClose} />
        </div>
    );
};

export default CreateProductModal;
