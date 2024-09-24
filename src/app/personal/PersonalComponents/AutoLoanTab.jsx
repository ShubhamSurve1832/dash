'use client'
import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, } from "@headlessui/react";
import DownArrow from '@/images/icons/DownArrow';
import { Form, Formik } from 'formik';
import { autoLoanVals } from '../../../config/constants/initialValues'
import { FormikForm } from '@/components/FormikForm';

const AutoLoanTab = () => {


    return (
        <div className='p-4 bg-[#fff] rounded-[4px] mt-4'>
            <Disclosure
                as="div"
                defaultOpen={true}
            >
                <DisclosureButton className="p-3 group flex w-full items-center justify-between bg-[#F3F2F6]  rounded-[4px] tracking-[1px]">
                    <span className="text-xl font-semibold text-[#000000] group-data-[hover]:text-black/80">
                        Auto Loan Requirement
                    </span>
                    <div className="flex items-center justify-center text-black">
                        <DownArrow />
                    </div>
                </DisclosureButton>
                <DisclosurePanel className="pt-5 pb-7">
                    <div>
                        <Formik
                            initialValues={autoLoanVals}
                            // validationSchema={profileValidationSchema}
                            // onSubmit={onSubmit}
                            enableReinitialize>
                            {({ handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <h3 className='text-[#000000B2] font-medium text-xl pb-4 border-b'>Desired Loan Terms</h3>
                                    <div className='grid grid-cols-2 gap-7 gap-y-4 my-7'>
                                        <FormikForm.Input name="employer" placeholder='Enter your employer name' label='Requested Monthly Payment' styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.Input name="occupation" placeholder='Enter your occupation' label='Requested Down Payment' styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.Input name="employmentType" placeholder='Enter interest rate' label='Interest Rate' styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.Input name="hourlyPay" placeholder='Enter your loan term in months' label='Loan Term (Months)' styles='placeholder-[#00000066]  placeholder-sm' />
                                    </div>

                                    <div className='mt-11'>
                                        <h3 className='text-[#000000B2] font-medium text-xl pb-4 border-b'>Current Loan Terms</h3>
                                        <div className='grid grid-cols-2 gap-7 gap-y-4 my-7'>
                                            <FormikForm.Input name="ssn" placeholder='Enter your employer name' label='FICO Score' styles='placeholder-[#00000066]  placeholder-sm' />
                                            <FormikForm.Input name="ssn" placeholder='' label='Remaining Loan Balance' styles='placeholder-[#00000066]  placeholder-sm' />
                                            <FormikForm.Input name="rentAmount" placeholder='' label='Monthly Payment' styles='placeholder-[#00000066]  placeholder-sm' />
                                            <FormikForm.Input name="ssn" placeholder='' label='Remaining Number of Payments' styles='placeholder-[#00000066]  placeholder-sm' />
                                            <FormikForm.Input name="ssn" placeholder='' label='Current Interest Rate' styles='placeholder-[#00000066]  placeholder-sm' />
                                        </div>
                                    </div>

                                    <div className='mt-11'>
                                        <h3 className='text-[#000000B2] font-medium text-xl pb-4 border-b'>Trade-in Vehicle</h3>
                                        <div className='grid grid-cols-2 gap-7 gap-y-4 my-7'>
                                            <FormikForm.Input name="vin" placeholder='Enter your employer name' label='VIN' styles='placeholder-[#00000066]  placeholder-sm' />
                                            <FormikForm.Input name="licensePlate" placeholder='' label='License Plate' styles='placeholder-[#00000066]  placeholder-sm' />
                                            <FormikForm.Input name="year" placeholder='' label='Year' styles='placeholder-[#00000066]  placeholder-sm' />
                                            <FormikForm.Input name="make" placeholder='' label='Make' styles='placeholder-[#00000066]  placeholder-sm' />
                                            <FormikForm.Select label='Model' name='model' />
                                            <FormikForm.Input name="trim" placeholder='' label='Trim' styles='placeholder-[#00000066]  placeholder-sm' />
                                            <FormikForm.Select label='Current Miles' name='currentMiles' />
                                            <FormikForm.Input name="notesOnCarCondition" placeholder='Enter current interest rate' inlineStyle='col-span-2' label='Notes on Car Condition' styles='placeholder-[#00000066]  placeholder-sm' />
                                        </div>
                                    </div>

                                    <div className='mt-11'>
                                        <h3 className='text-[#000000B2] font-medium text-xl pb-4 border-b'>Upload Images</h3>
                                        <div className='grid grid-cols-2 gap-7 gap-y-4 my-7'>
                                            <FormikForm.FileUpload value='' label="Car Mikes" name="carMikes" updateFilesCb='' />
                                            <FormikForm.FileUpload value='' label="VIN" name="uploadVIN" updateFilesCb='' />
                                            <FormikForm.FileUpload value='' label="Damages to Vehicle" name="uploadDamages" updateFilesCb='' />
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </div>
    )
}

export default AutoLoanTab;