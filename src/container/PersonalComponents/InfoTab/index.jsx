'use client'
import React, { useEffect, useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, } from "@headlessui/react";
import DownArrow from '@/images/icons/DownArrow';
import { Form, Formik } from 'formik';
import { FormikForm } from '@/components/FormikForm';
import PrimaryBtn from '@/components/UI/PrimaryBtn';
import SecondaryBtn from '@/components/UI/SecondaryBtn';

const InfoTab = () => {
    return (
        <div className='p-4 bg-[#fff] rounded-[4px] mt-4'>
            <Disclosure
                as="div"
                defaultOpen={true}
            >
                <DisclosureButton className="p-3 group flex w-full items-center justify-between bg-[#F3F2F6]  rounded-[4px] tracking-[1px]">
                    <span className="text-xl font-semibold text-[#000000] group-data-[hover]:text-black/80">
                    Info
                    </span>
                    <div className="flex items-center justify-center text-black">
                        <DownArrow />
                    </div>
                </DisclosureButton>
                <DisclosurePanel className="pt-5 pb-7">
                    <div>
                        <Formik
                            // initialValues={initialValues}
                            // validationSchema={profileValidationSchema}
                            // onSubmit={onSubmit}
                            enableReinitialize>
                            {({ handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <h3 className='text-[#000000B2] font-medium text-xl pb-4 mb-4 border-b'>Lender Information</h3>
                                    <div className='grid grid-cols-2 gap-7 gap-y-4 my-7'>
                                        <FormikForm.Input label="Lender Name" name="lenderName" placeholder="Loan Amount" />
                                        <FormikForm.Input label="Contact Information" name="contactInformation" placeholder="Down Payment" />
                                         <FormikForm.DatePicker placeholder='' label="Loan Date" name="loanDate" styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.Input label="Lender Address" name="lenderAddress" placeholder="Loan Duration" />
                                    </div>
                                    <h3 className='text-[#000000B2] font-medium text-xl pb-4 mb-4 border-b'>Borrower Information</h3>
                                    <div className='grid grid-cols-2 gap-7 gap-y-4 my-7'>
                                        <FormikForm.Input label="Borrower Name" name="borrowerName" placeholder="" />
                                        <FormikForm.Input label="Borrower Address" name="borrowerAddress" placeholder="" />
                                        <FormikForm.Input label="Email" name="email" placeholder="" />
                                        <FormikForm.Input label="Mobile Number" name="mobileNumber" placeholder="" />
                                        <FormikForm.DatePicker placeholder='' label="Date of Birth" name="dateOfBirth" styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.Input label="SSN" name="ssn" placeholder="" />
                                    </div>
                                    <div className='flex justify-between p-4 border border-[#28A820] rounded-[4px] text-[#28A820] mt-6' >
                                        <p className='text-xl'>Total Finance Charge</p>
                                        <p className='text-xl text-right'>$100</p>
                                    </div>

                                    <div className='mt-6 p-5'>
                                        <h3 className='text-[#000000B2] font-medium text-xl pb-4 mb-4 border-b'>Acceptance</h3>
                                        <div>
                                            <p>To accept this loan offer, please sign and return this document by <span className='font-bold'> 25th November 2024.</span>  This offer is valid until
                                                <span className='font-bold'>30th November 2024.</span> </p>
                                            <div className='mt-6'>
                                                <p className='text-[#000000B2] font-semibold text-lg'>Signature</p>
                                                <div className='h-12 border-[#0000001A] border-b w-[25rem]'>

                                                </div>
                                                <SecondaryBtn className=" w-full text-xl mt-6" title="Upload" />

                                            </div>
                                        </div>

                                    </div>

                                    <PrimaryBtn className=" w-full text-xl mt-6" title="Accept Offer" />
                                </Form>
                            )}
                        </Formik>
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </div>
    )
}

export default InfoTab;