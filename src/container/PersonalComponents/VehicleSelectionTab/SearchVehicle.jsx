import React from 'react'
import { Form, Formik } from 'formik';
import { searchVehicle } from '../../../config/constants/initialValues'
import { FormikForm } from '@/components/FormikForm';
import PrimaryBtn from '@/components/UI/PrimaryBtn';

const SearchVehicle = ({ setStep }) => {
    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        setStep(2)
    }
    return (
        <div>
            <Formik
                initialValues={searchVehicle}
                // validationSchema={profileValidationSchema}
                onSubmit={onSubmit}
                enableReinitialize>
                {({ handleSubmit }) => (
                    <Form>
                        <div className='grid grid-cols-2 gap-7 gap-y-4 my-7'>
                            <FormikForm.Select label='Make or Brand' name='brand' />
                            <FormikForm.Select label='Model' name='modal' />
                            <FormikForm.Select label='Body Style' name='bodyStyle' />
                            <FormikForm.Select label='Years' name='year' />
                        </div>
                        <div className='my-7'>
                            <p className='text-lg font-semibold text-[#000000B2] text-center'>OR</p>
                            <FormikForm.Input name="licensePlate" placeholder='Enter stock number' label='Search by stock number' styles='placeholder-[#00000066]  placeholder-sm' />
                        </div>
                        <PrimaryBtn title="Search All Vehicles" className='w-full text-xl' />

                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SearchVehicle