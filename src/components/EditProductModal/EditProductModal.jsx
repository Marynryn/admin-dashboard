
import ProductForm from 'components/ProductForm/ProductForm';
import Title from 'components/Title/Title';
import React from 'react'

export const EditProductModal = ({ props, onClose }) => {
    return (
        <div>
            <Title>Edit data</Title>
            <ProductForm onClose={onClose} product={props} />
        </div>
    )
}
export default EditProductModal;