'use client'
import React, { useEffect, useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, } from "@headlessui/react";
import DownArrow from '@/images/icons/DownArrow';
import { Form, Formik } from 'formik';
import { FormikForm } from '@/components/FormikForm';
import PrimaryBtn from '@/components/UI/PrimaryBtn';
import SecondaryBtn from '@/components/UI/SecondaryBtn';

const PreviewTab = () => {
    return (
        <div className='p-4 bg-[#fff] rounded-[4px] mt-4'>
            <Disclosure
                as="div"
                defaultOpen={true}
            >
                <DisclosureButton className="p-3 group flex w-full items-center justify-between bg-[#F3F2F6]  rounded-[4px] tracking-[1px]">
                    <span className="text-xl font-semibold text-[#000000] group-data-[hover]:text-black/80">
                        Preview
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
                                    <h3 className='text-[#000000B2] font-medium text-xl pb-4 mb-4 border-b'>Customer Details</h3>
                                    <div className='grid grid-cols-3 gap-7 gap-y-4 my-7'>
                                        <div>
                                            <h3 className='text-xl font-semibold'>Primary Applicant</h3>
                                            <div>
                                                <div className='bg-[#00000008] p-3 mt-3'>
                                                    <p>First name:</p>
                                                    <p>Lauren</p>
                                                </div>
                                                <div className='bg-[#00000008] p-3 mt-3'>
                                                    <p>Last name:</p>
                                                    <p>Smith</p>
                                                </div>
                                                <div className='bg-[#00000008] p-3 mt-3'>
                                                    <p>Phone number:</p>
                                                    <p>+1 123 456-7890</p>
                                                </div>
                                                <div className='bg-[#00000008] p-3 mt-3'>
                                                    <p>Credit score:</p>
                                                    <p>700</p>
                                                </div>
                                                <div className='bg-[#00000008] p-3 mt-3'>
                                                    <p>Gross Annual Income:</p>
                                                    <p>$ 90,480</p>
                                                </div>
                                                <div className='bg-[#00000008] p-3 mt-3'>
                                                    <p>Employment Type:</p>
                                                    <p>W2/Full time</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className='text-xl font-semibold'>Co-Applicant</h3>
                                            <div>
                                                <div className='bg-[#00000008] p-3 mt-3'>
                                                    <p>First name:</p>
                                                    <p>Lauren</p>
                                                </div>
                                                <div className='bg-[#00000008] p-3 mt-3'>
                                                    <p>First name:</p>
                                                    <p>Lauren</p>
                                                </div>
                                                <div className='bg-[#00000008] p-3 mt-3'>
                                                    <p>Phone number:</p>
                                                    <p>+1 123 456-7890</p>
                                                </div>
                                                <div className='bg-[#00000008] p-3 mt-3'>
                                                    <p>Credit score:</p>
                                                    <p>450</p>
                                                </div>
                                                <div className='bg-[#00000008] p-3 mt-3'>
                                                    <p>Gross Annual Income:</p>
                                                    <p>$ 30,000</p>
                                                </div>
                                                <div className='bg-[#00000008] p-3 mt-3'>
                                                    <p>Employment Type:</p>
                                                    <p>W2/Part time</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className='text-xl font-semibold'>Car Details</h3>
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

export default PreviewTab