'use client'
import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, } from "@headlessui/react";
import DownArrow from '@/images/icons/DownArrow';
import { Form, Formik } from 'formik';
import { employmentVals, FinalChecklistVals } from '../../../config/constants/initialValues'
import { FormikForm } from '@/components/FormikForm';
import PrimaryBtn from '@/components/UI/PrimaryBtn';

const FinalChecklistTab = () => {
    return (
        <div className='p-4 bg-[#fff] rounded-[4px] mt-4'>
            <Disclosure
                as="div"
                defaultOpen={true}
            >
                <DisclosureButton className="p-3 group flex w-full items-center justify-between bg-[#F3F2F6]  rounded-[4px] tracking-[1px]">
                    <span className="text-xl font-semibold text-[#000000] group-data-[hover]:text-black/80">
                        Final Walkthrough Checklist
                    </span>
                    <div className="flex items-center justify-center text-black">
                        <DownArrow />
                    </div>
                </DisclosureButton>
                <DisclosurePanel className="pt-5 pb-7">
                    <Formik
                        initialValues={FinalChecklistVals}
                        // validationSchema={profileValidationSchema}
                        // onSubmit={onSubmit}
                        enableReinitialize>
                        {({ handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
                                <h3 className='text-[#000000B2] font-medium text-xl pb-4 mb-4 border-b'>Lender Information</h3>
                                <div className='grid grid-cols-2 gap-7 gap-y-4 my-7'>
                                    <FormikForm.Input name="lenderName" placeholder='' label='Lender Name' styles='placeholder-[#00000066]  placeholder-sm' />
                                    <FormikForm.Input name="contactInformation" placeholder='' label='Contact Information' styles='placeholder-[#00000066]  placeholder-sm' />
                                    <FormikForm.Input name="date" placeholder='' label='Date' styles='placeholder-[#00000066]  placeholder-sm' />
                                    <FormikForm.Input name="lenderAddress" placeholder='' label='Lender Address' styles='placeholder-[#00000066]  placeholder-sm' />
                                </div>
                                <h3 className='text-[#000000B2] font-medium text-xl pb-4 mb-4 border-b'>Borrower Information</h3>
                                <div className='grid grid-cols-2 gap-7 gap-y-4 my-7'>
                                    <FormikForm.Input name="borrowerName" placeholder='' label='Borrower Name' styles='placeholder-[#00000066]  placeholder-sm' />
                                    <FormikForm.Input name="borrowerAddress" placeholder='' label='Borrower Address' styles='placeholder-[#00000066]  placeholder-sm' />
                                </div>
                                <h3 className='text-[#000000B2] font-medium text-xl pb-4 mb-4 border-b'>Vehicle Description</h3>
                                <div className='grid grid-cols-2 gap-7 gap-y-4 my-7'>
                                    <FormikForm.Input name="make" placeholder='' label='Make' styles='placeholder-[#00000066]  placeholder-sm' />
                                    <FormikForm.Input name="model" placeholder='' label='Model' styles='placeholder-[#00000066]  placeholder-sm' />
                                    <FormikForm.Input name="year" placeholder='' label='Year' styles='placeholder-[#00000066]  placeholder-sm' />
                                    <FormikForm.Input name="vin" placeholder='' label='VIN' styles='placeholder-[#00000066]  placeholder-sm' />
                                    <FormikForm.Input name="purchasePrice" placeholder='' label='Purchase price' styles='placeholder-[#00000066]  placeholder-sm' />
                                </div>
                                <div className=''>
                                    <h3 className='text-[#000000B2] font-medium text-xl pb-4 mb-4 border-b'>Lender Information</h3>
                                    <FormikForm.CheckBox name="singedLoan" placeholder='' label='Signed Loan Agreement' styles='placeholder-[#00000066]  placeholder-sm' />
                                    <FormikForm.CheckBox name="singedLoan" placeholder='' label='Signed Loan Agreement' styles='placeholder-[#00000066]  placeholder-sm' />
                                    <FormikForm.CheckBox name="carFax" placeholder='' label='CarFax Sign Off' styles='placeholder-[#00000066]  placeholder-sm' />
                                </div>
                                <div className='my-6'>
                                    <h3 className='text-[#000000B2] font-medium text-xl pb-4 mb-4 border-b'>Vehicle Inspection</h3>

                                </div>
                                <div className='my-6'>
                                    <h3 className='text-[#000000B2] font-medium text-xl pb-4 mb-4 border-b'>Key Hand Off</h3>

                                </div>
                                <div className='my-6'>
                                    <h3 className='text-[#000000B2] font-medium text-xl pb-4 mb-4 border-b'>Notes</h3>
                                    <FormikForm.Input type="textarea" name="employer" placeholder='' styles='placeholder-[#00000066]  placeholder-sm' />
                                </div>
                                <div>
                                    <DisclosureButton className="p-3 group flex w-full items-center justify-between bg-[#F3F2F6]  rounded-[4px] tracking-[1px]">
                                        <span className="text-xl font-semibold text-[#000000] group-data-[hover]:text-black/80">
                                            Additional Fees
                                        </span>
                                        <div className="flex items-center justify-center text-black">
                                            <DownArrow />
                                        </div>
                                    </DisclosureButton>
                                    <DisclosurePanel className="pt-5 pb-7">
                                        <div>
                                            <div className='mt-4 pb-3 border-b border-[#0000001A]'>
                                                <h3 className='font-semibold mb-3'>Prepayment</h3>
                                                <p>There are no penalties for prepayment. The borrower can pay off the loan early without any additional charges.</p>
                                            </div>
                                            <div className='mt-4 pb-3 border-b border-[#0000001A]'>
                                                <h3 className='font-semibold mb-3'>Late Payment Policy</h3>
                                                <p>Payments are considered late if not received within <span className='font-semibold'> 25 days</span> of the due date. </p>
                                                <p>A late fee of $10 will be charged if the payment is late.</p>
                                            </div>
                                            <div className='mt-4 pb-3 border-b border-[#0000001A]'>
                                                <h3 className='font-semibold mb-3'>Default Policy</h3>
                                                <p>If the borrower fails to make payments according to the terms of this agreement, the lender has the right to repossess the vehicle.</p>
                                            </div>
                                            <div className='mt-4 pb-3 border-b border-[#0000001A]'>
                                                <h3 className='font-semibold mb-3'>Gap Insurance</h3>
                                                <p>Include details if GAP insurance is offered</p>
                                            </div>
                                            <div className='mt-4 pb-3 border-b border-[#0000001A]'>
                                                <h3 className='font-semibold mb-3'>Extended Warranty / Service Contract</h3>
                                                <p>Include details if applicable</p>
                                            </div>
                                            <div className='mt-4 pb-3 border-b border-[#0000001A]'>
                                                <h3 className='font-semibold mb-3'>Required Documents</h3>
                                                <ol className='list-decimal list-inside'>
                                                    <li>Signed Credit Agreement</li>
                                                    <li>Proof of Insurance</li>
                                                    <li>Valid Driver’s License</li>
                                                    <li>Other (Specify any additional required documents)</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </DisclosurePanel>
                                </div>
                                <h3 className='text-[#000000B2] font-medium text-xl pb-4 mb-4 border-b'>Down Payment</h3>
                                <div className='my-6 grid grid-cols-2 gap-7 gap-y-4'>
                                    <FormikForm.Input name="downPaymentMethod" label="Down Payment Method" placeholder='' styles='placeholder-[#00000066]  placeholder-sm' />
                                    <FormikForm.Input name="nameOnCard" label="Name on Card" placeholder='' styles='placeholder-[#00000066]  placeholder-sm' />
                                    <FormikForm.DatePicker placeholder='' label="Employment Start Date" name="employmentStartDate" styles='placeholder-[#00000066]  placeholder-sm' />
                                    <FormikForm.Input name="cardNumber" label="Card Number" placeholder='1234 5678 9876 5432' styles='placeholder-[#00000066]  placeholder-sm' />
                                    <FormikForm.PasswordInput name="securityNumber" label="Security Number" placeholder='' styles='placeholder-[#00000066]  placeholder-sm' />
                                </div>

                                <PrimaryBtn title="Complete Purchase" className='w-full' />
                            </Form>
                        )}
                    </Formik>

                </DisclosurePanel>
            </Disclosure>
        </div>
    )
}

export default FinalChecklistTab