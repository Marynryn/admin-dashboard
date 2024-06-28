import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import InputField from 'components/InputField/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import { authSchema } from 'schema/schema';


import { useDispatch } from 'react-redux';
import { login } from 'store/operations';



const RegistrationForm = () => {
    const dispatch = useDispatch();
    const methods = useForm({
        resolver: yupResolver(authSchema)
    });
    const { handleSubmit, reset } = methods;


    const onSubmit = async (data) => {
        console.log(data);
        try {

            await dispatch(login(data));
            reset();
            toast.success("Registration successful");
        } catch (error) {

            toast.error("Failed to register");
        }
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="block gap-10 h-full">
                <h2 className="mb-10 text-6xl font-medium">Event registration</h2>

                <div className=" relative">

                    <InputField type="email" name="email" label="Email" />
                    <InputField type="password" name="password" label="Password" />

                </div>

                <div className='ml-32 mt-16'><button type="submit" >Login</button></div>

            </form>

        </FormProvider>
    );
};

export default RegistrationForm;
