'use client'
import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, } from "@headlessui/react";
import DownArrow from '@/images/icons/DownArrow';
import { Form, Formik } from 'formik';
import { personalVals } from '../../../config/constants/initialValues'
import { FormikForm } from '@/components/FormikForm';

const PersonalTab = () => {
    return (
        <div className='p-4 bg-[#fff] rounded-[4px]'>
            <Disclosure
                as="div"
                defaultOpen={true}
            >
                <DisclosureButton className="p-3 group flex w-full items-center justify-between bg-[#F3F2F6]  rounded-[4px] tracking-[1px]">
                    <span className="text-xl font-semibold text-[#000000] group-data-[hover]:text-black/80">
                        Personal
                    </span>
                    <div className="flex items-center justify-center text-black">
                        <DownArrow />
                    </div>
                </DisclosureButton>
                <DisclosurePanel className="pt-5 pb-7">
                    <div>
                        <Formik
                            initialValues={personalVals}
                            // validationSchema={profileValidationSchema}
                            // onSubmit={onSubmit}
                            enableReinitialize>
                            {({ handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <h3 className='text-[#000000B2] font-medium text-xl pb-4 border-b'>Information</h3>
                                    <div className='grid grid-cols-2 gap-7 gap-y-4 my-7'>
                                        <FormikForm.Input name="firstName" placeholder='Enter your first name' label='First Name' styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.Input name="lastName" placeholder='Enter your last name' label='Last Name' styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.Input name="email" placeholder='Enter your email' label='Email' styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.Input name="mobileNumber" placeholder='Enter your mobile number' label='Mobile Number' styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.DatePicker placeholder='Enter your date of birth' label="Date of Birth" name="dateOfBirth" styles='placeholder-[#00000066]  placeholder-sm' />
                                    </div>

                                    <div className='mt-11'>
                                        <h3 className='text-[#000000B2] font-medium text-xl pb-4 border-b'>Identification</h3>
                                        <div className='grid grid-cols-2 gap-7 gap-y-4 my-7'>
                                            <FormikForm.Input name="ssn" placeholder='' label='SSN' styles='placeholder-[#00000066]  placeholder-sm' />
                                            <FormikForm.Input name="driverLicenseNumber" placeholder='' label='Driver License No.' styles='placeholder-[#00000066]  placeholder-sm' />
                                            <FormikForm.Select label='Driver License State' name='driverLicenseState' />
                                        </div>
                                    </div>

                                    <div className='mt-11'>
                                        <h3 className='text-[#000000B2] font-medium text-xl pb-4 border-b'>Address</h3>
                                        <div className='grid grid-cols-2 gap-7 gap-y-4 my-7'>
                                            <FormikForm.Input name="ssn" placeholder='' label='Street Address' styles='placeholder-[#00000066]  placeholder-sm' />
                                            <FormikForm.Select label='City' name='city' />
                                            <FormikForm.Select label='State' name='state' />
                                            <FormikForm.Input name="zipCode" placeholder='' label='Zipcode' styles='placeholder-[#00000066]  placeholder-sm' />
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>

                        <div className='mt-11'>
                            <h3 className='text-[#000000B2] font-medium text-xl pb-4 border-b'>Credit History</h3>
                            <div className='grid grid-cols-2 gap-7 gap-y-4 my-7'>
                                <div>
                                    <div className='p-6 rounded-[4px] border border-[#00000033]'>
                                        <h3 className='text-lg font-bold mb-6'>Credit Score</h3>
                                        <p className='text-[#344BFD] font-bold text-4xl'>700</p>
                                    </div>
                                    <div className='p-6 rounded-[4px] border border-[#00000033] mt-6'>
                                        <h3 className='text-lg font-bold mb-6'>Credit Score</h3>
                                        <div className='grid grid-cols-2 gap-6'>
                                            <div className='p-5 rounded-[4px] border border-[#00000033]'>
                                                <h4 className='text-sm font-bold mb-6'>Total Outstanding Loan</h4>
                                                <p className='text-[#F68D2B] font-bold text-4xl'>$100,000</p>
                                            </div>
                                            <div className='p-5 rounded-[4px] border border-[#00000033]'>
                                                <h4 className='text-sm font-bold mb-6'>Total Outstanding Loan</h4>
                                                <p className='text-[#F68D2B] font-bold text-4xl'>$100,000</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='p-6 rounded-[4px] border border-[#00000033] mt-6'>
                                        <h3 className='text-lg font-bold mb-6'>Risk Balancing Percentage</h3>
                                        <div className='grid grid-cols-3 gap-6'>
                                            <div className='p-5 rounded-[4px] border border-[#00000033]'>
                                                <h4 className='text-base font-bold text-[#666666] mb-2'>Min</h4>
                                                <p className='text-[#288827] font-bold text-4xl'>5%</p>
                                            </div>
                                            <div className='p-5 rounded-[4px] border border-[#00000033]'>
                                                <h4 className='text-base font-bold text-[#666666] mb-2'>Median</h4>
                                                <p className='text-[#288827] font-bold text-4xl'>5%</p>
                                            </div>
                                            <div className='p-5 rounded-[4px] border border-[#00000033]'>
                                                <h4 className='text-base font-bold text-[#666666] mb-2'>Max</h4>
                                                <p className='text-[#288827] font-bold text-4xl'>5%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-6 rounded-[4px] border border-[#00000033]'>
                                    <h3 className='text-lg font-bold mb-6'>Credit Mix</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </div>
    )
}

export default PersonalTab;