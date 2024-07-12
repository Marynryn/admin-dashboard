
import SuppliersForm from 'components/SuppliersForm/SuppliersForm';
import Title from 'components/Title/Title';
import React from 'react'

export const EditSuppliersModal = ({ props, onClose }) => {

    return (
        <div>
            <Title>Edit data</Title>
            <SuppliersForm onClose={onClose} supplier={props} />
        </div>
    )
}
export default EditSuppliersModal;