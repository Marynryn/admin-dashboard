import SuppliersForm from 'components/SuppliersForm/SuppliersForm';
import Title from 'components/Title/Title';
import React from 'react';



const CreateSuppliersModal = ({ onClose, isNew }) => {

    return (
        <div>
            <Title>Add a new suppliers</Title>
            <SuppliersForm isNew={isNew} onClose={onClose} />
        </div>
    );
};

export default CreateSuppliersModal;