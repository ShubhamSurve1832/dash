'use client'
import React, { useEffect, useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, } from "@headlessui/react";
import DownArrow from '@/images/icons/DownArrow';
import { Form, Formik } from 'formik';
import { personalVals } from '../../../../config/constants/initialValues'
import { FormikForm } from '@/components/FormikForm';
import PrimaryBtn from '@/components/UI/PrimaryBtn';
import CommentIcon from '@/images/icons/CommentIcon';

const PersonalTab = () => {
    const [initialValues, setInitialValues] = useState(personalVals);

    useEffect(() => {
        setInitialValues({ firstName: "Lauren", lastName: "Smith", email: "lauren@email.com", mobileNumber: "+1 123 456-7890", dateOfBirth: "", ssn: "387 - 43 - 4324", driverLicenseNumber: "D84738", driverLicenseState: "California", streetAddress: "Queen Towers", city: "Los Angeles", state: "California", zipCode: "90001" })
    }, [])

    const onSubmit = (values) => {
        console.log("values", values)
    }
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
                            initialValues={initialValues}
                            // validationSchema={profileValidationSchema}
                            onSubmit={onSubmit}
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
                                            <FormikForm.FileUpload value='' label="OR" name="or" updateFilesCb='' />
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
                                    <PrimaryBtn title="Search All Vehicles" className='w-full text-xl' />
                                </Form>
                            )}
                        </Formik>

                        <div className='mt-11'>
                            <h3 className='text-[#000000B2] font-medium text-xl pb-4 border-b'>Credit History</h3>
                            <div className='grid creadit-history-grid gap-7 gap-y-4 my-7'>
                                <div>
                                    <div className='p-6 rounded-[4px] border border-[#00000033] relative'>
                                        <div className='absolute right-1 top-1'>
                                            <CommentIcon />
                                        </div>
                                        <h3 className='text-lg font-bold mb-6'>Credit Score</h3>
                                        <p className='text-[#344BFD] font-bold text-4xl'>700</p>
                                    </div>
                                    <div className='p-6 rounded-[4px] border border-[#00000033] mt-6 relative'>
                                        <div className='absolute right-1 top-1'>
                                            <CommentIcon />
                                        </div>
                                        <h3 className='text-lg font-bold mb-6'>Credit Score</h3>
                                        <div className='grid grid-cols-2 gap-6'>
                                            <div className='p-5 rounded-[4px] border border-[#00000033] text-center'>
                                                <h4 className='text-sm font-semibold mb-6'>Total Outstanding Loan</h4>
                                                <p className='text-[#F68D2B] font-bold text-4xl'>$20,000</p>
                                            </div>
                                            <div className='p-5 rounded-[4px] border border-[#00000033] text-center'>
                                                <h4 className='text-sm font-semibold mb-6'>Minimum Payable Amount</h4>
                                                <p className='text-[#F68D2B] font-bold text-4xl'>$ 750</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='p-6 rounded-[4px] border-[0.5px] text-center border-[#00000033] mt-6 relative'>
                                        <div className='absolute right-1 top-1'>
                                            <CommentIcon />
                                        </div>
                                        <h3 className='text-lg font-bold mb-6'>Risk Balancing Percentage</h3>
                                        <div className='grid grid-cols-3 gap-6'>
                                            <div className='p-5 rounded-[4px] border-[0.5px] text-center border-[#00000033]'>
                                                <h4 className='text-base font-bold text-[#666666] mb-2'>Min</h4>
                                                <p className='text-[#288827] font-bold text-4xl'>3%</p>
                                            </div>
                                            <div className='p-5 rounded-[4px] border-[0.5px] text-center border-[#00000033]'>
                                                <h4 className='text-base font-bold text-[#666666] mb-2'>Median</h4>
                                                <p className='text-[#288827] font-bold text-4xl'>5%</p>
                                            </div>
                                            <div className='p-5 rounded-[4px] border-[0.5px] text-center border-[#00000033]'>
                                                <h4 className='text-base font-bold text-[#666666] mb-2'>Max</h4>
                                                <p className='text-[#288827] font-bold text-4xl'>7%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-6 rounded-[4px] border border-[#00000033] relative'>
                                    <div className='absolute right-1 top-1'>
                                        <CommentIcon />
                                    </div>
                                    <h3 className='text-lg font-bold mb-6'>Credit Mix</h3>
                                    <div className='bg-[#00000008] rounded-sm p-4'>
                                        <div className='flex gap-2 items-center pb-2 border-b-[0.5px] border-[#00000033]'>
                                            <span className='bg-[#49A677] w-2 h-2 rounded-full'></span>
                                            <h3 className='font-bold'>Education Summary</h3>
                                        </div>
                                        <div className='pt-4'>
                                            <div className='flex justify-between font-semibold text-sm pb-4'><p>Outstanding Balance</p><p>$ 10,000</p></div>
                                            <div className='flex justify-between font-semibold text-sm pb-4'><p>Principal </p><p>$ 100</p></div>
                                            <div className='flex justify-between font-semibold text-sm pb-4'><p>Interest</p><p>$ 200</p></div>
                                        </div>
                                        <div className='pt-4 border-t-[0.5px] border-[#00000033]'>
                                            <div className='flex justify-between font-semibold text-sm'><p>Total Payment</p><p>$ 300</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='inline-block border-b border-[#572E91] text-[#572E91] font-semibold cursor-pointer'>+ Add Co-applicant</p>
                        </div>

                    </div>
                </DisclosurePanel>
            </Disclosure>
        </div>
    )
}

export default PersonalTab;