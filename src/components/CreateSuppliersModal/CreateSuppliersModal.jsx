import SuppliersForm from 'components/SuppliersForm/SuppliersForm';
import Title from 'components/Title/Title';
import React from 'react';



const CreateSuppliersModal = ({ onClose }) => {

    return (
        <div>
            <Title>Add a new suppliers</Title>
            <SuppliersForm onClose={onClose} />
        </div>
    );
};

export default CreateSuppliersModal;