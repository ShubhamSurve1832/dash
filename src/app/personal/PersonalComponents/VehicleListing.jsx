'use client'
import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, } from "@headlessui/react";
import DownArrow from '@/images/icons/DownArrow';
import { Form, Formik } from 'formik';
import { employmentVals } from '../../../config/constants/initialValues'
import { FormikForm } from '@/components/FormikForm';
import ListingCard from './ListingCard';

const VehicleListing = () => {
    return (
        <>            
                <div>
                    <Formik
                        initialValues={employmentVals}
                        // validationSchema={profileValidationSchema}
                        // onSubmit={onSubmit}
                        enableReinitialize>
                        {({ handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
                                <div className='flex gap-4 mb-6'>
                                    <div className='categoryBtn'>
                                        <FormikForm.CheckBox name="singedLoan" placeholder='' label='New' styles='placeholder-[#00000066] mb-0 placeholder-sm' />
                                    </div>
                                    <div className='categoryBtn'>
                                        <FormikForm.CheckBox name="singedLoan" placeholder='' label='Used' styles='placeholder-[#00000066] mb-0 placeholder-sm' />
                                    </div>
                                    <div className='categoryBtn'>
                                        <FormikForm.CheckBox name="singedLoan" placeholder='' label='Certified' styles='placeholder-[#00000066] mb-0 placeholder-sm' />
                                    </div>
                                </div>
                                <h3 className='text-[#000000B2] font-medium text-xl pb-4 border-b'>25 Vehicles</h3>

                                <div className='grid justify-between grid-cols-3 gap-5 mt-4'>
                                    <ListingCard />
                                    <ListingCard />
                                    <ListingCard />
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>  
        </>
    )
}

export default VehicleListing