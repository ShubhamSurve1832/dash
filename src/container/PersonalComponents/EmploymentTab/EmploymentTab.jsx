'use client'
import React, { useEffect, useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, } from "@headlessui/react";
import DownArrow from '@/images/icons/DownArrow';
import { Form, Formik } from 'formik';
import { employmentVals } from '../../../config/constants/initialValues'
import { FormikForm } from '@/components/FormikForm';

const options = [
    { value: 'rent', label: 'Rent' },
    { value: 'own', label: 'Own' },
    { value: 'live with family', label: 'Live with family' },
]

const EmploymentTab = () => {
    const [initialValues, setInitialValues] = useState(employmentVals);


    useEffect(() => {
        setInitialValues({ employer: "Software Solutions ", occupation: "Software Engineer", employmentType: "W2/Full time", hourlyPay: "$ 43.5", hoursPerWeek: "40", biWeeklyIncome: "$ 3,480", monthlyIncome: "$ 7,540", annualIncome: "$ 90,480", employmentStartDate: "02/14/1995", employmentDurationYears: "", employmentDurationMonths: "", residentType: "", residentDuration: "", rentAmount: "$2,000", yourShareOfRent: "$500", numberOfPeopleOnLease: "", additionalPeopleOnRent: "", sort: "" })
    }, [])


    return (
        <div className='p-4 bg-[#fff] rounded-[4px] mt-4'>
            <Disclosure as="div" defaultOpen={true}
            >
                <DisclosureButton className="p-3 group flex w-full items-center justify-between bg-[#F3F2F6]  rounded-[4px] tracking-[1px]">
                    <span className="text-xl font-semibold text-[#000000] group-data-[hover]:text-black/80">
                        Employment & Residence
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
                            // onSubmit={onSubmit}
                            enableReinitialize>
                            {({ handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <h3 className='text-[#000000B2] font-medium text-xl pb-4 border-b'>Employment  & Income</h3>
                                    <div className='grid grid-cols-2 gap-7 gap-y-4 my-7'>
                                        <FormikForm.Input name="employer" placeholder='' label='Employer' styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.Input name="occupation" placeholder='' label='Occupation' styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.Input name="employmentType" placeholder='' label='Employment Type' styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.Input name="hourlyPay" placeholder='' label='Hourly Pay' styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.Input name="hoursPerWeek" placeholder='' label='Hours per Week' styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.Input name="biWeeklyIncome" placeholder='' label='Gross Bi-weekly Income' styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.Input name="monthlyIncome" placeholder='' label='Gross Monthly Income ' styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.Input name="annualIncome" placeholder='' label='Gross Annual Income ' styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.DatePicker placeholder='' label="Employment Start Date" name="employmentStartDate" styles='placeholder-[#00000066]  placeholder-sm' />
                                        <div>
                                            <label htmlFor="" className='block text-base  font-semibold text-[#150C0B] mb-2 tracking-[1px]'>Employment Duration</label>
                                            <div className='flex items-center gap-3'>
                                                <FormikForm.Select containerStyle='flex flex-row-reverse w-full gap-3 items-center !mb-0' styles='mb-2' label='year(s)' name='years' />
                                                <FormikForm.Select containerStyle='flex flex-row-reverse w-full gap-3 items-center !mb-0' styles='mb-2' label='month(s)' name='months' />
                                            </div>
                                        </div>
                                        <FormikForm.FileUpload value='' label="Pay Stub" name="or" updateFilesCb='' inlineStyle='mb-4'/>
                                    </div>
                                    <p className='italic text-[#00000099] text-base p-4 rounded-[4px] bg-[#FBBC051A] inline my-6'>Note: Since employment is less than 2 years, previous employment details are required.</p>
                                    <div className='mt-8'>
                                        <p className='inline-block border-b border-[#572E91] text-[#572E91] font-semibold cursor-pointer'>+ Add Employment Source</p>
                                    </div>

                                    <div className='mt-11'>
                                        <h3 className='text-[#000000B2] font-medium text-2xl pb-4 border-b'>Residence Information</h3>
                                        <h3 className='text-[#000000B2] font-medium text-xl pb-4 mt-5 border-b'>Current Residence</h3>
                                        <div className='grid grid-cols-2 gap-7 gap-y-4 my-7'>
                                            <FormikForm.RadioGroup className='!flex' name="rasidenType" placeholder='' label='Resident Type' options={options} styles='placeholder-[#00000066]  placeholder-sm' />
                                            <div>
                                                <label htmlFor="" className='block text-base  font-semibold text-[#150C0B] mb-2 tracking-[1px]'>Residence Duration</label>
                                                <div className='flex items-center gap-3'>
                                                    <FormikForm.Select containerStyle='flex flex-row-reverse w-full gap-3 items-center !mb-0' styles='mb-2' label='year(s)' name='years' />
                                                    <FormikForm.Select containerStyle='flex flex-row-reverse w-full gap-3 items-center !mb-0' styles='mb-2' label='month(s)' name='months' />
                                                </div>
                                            </div>
                                            <FormikForm.Input name="rentAmount" placeholder='' label='Rent Amount' styles='placeholder-[#00000066]  placeholder-sm' />
                                            <FormikForm.Select label='Number of People on Lease' name='numberOfPeopleOnLease' />
                                            <FormikForm.Input name="yourShareOfRent" placeholder='' label='Your Share of the Rent' styles='placeholder-[#00000066]  placeholder-sm' />
                                            <FormikForm.Select label='Additional People on Rent' name='additionalPeopleOnRent' />
                                        </div>
                                    </div>

                                    <div className='mt-6'>
                                        <h3 className='text-[#000000B2] font-medium text-lg pb-4 border-b'>Previous Residence</h3>
                                        <div className='grid grid-cols-2 gap-7 gap-y-4 my-7'>
                                            <FormikForm.RadioGroup className='!flex' name="rasidenType" placeholder='' label='Resident Type' options={options} styles='placeholder-[#00000066]  placeholder-sm' />
                                            <div>
                                                <label htmlFor="" className='block text-base  font-semibold text-[#150C0B] mb-2 tracking-[1px]'>Residence Duration</label>
                                                <div className='flex items-center gap-3'>
                                                    <FormikForm.Select containerStyle='flex flex-row-reverse w-full gap-3 items-center !mb-0' styles='mb-2' label='year(s)' name='years' />
                                                    <FormikForm.Select containerStyle='flex flex-row-reverse w-full gap-3 items-center !mb-0' styles='mb-2' label='month(s)' name='months' />
                                                </div>
                                            </div>
                                            <FormikForm.Input name="rentAmount" placeholder='' label='Rent Amount' styles='placeholder-[#00000066]  placeholder-sm' />
                                            <FormikForm.Select label='Number of People on Lease' name='numberOfPeopleOnLease' />
                                            <FormikForm.Input name="yourShareOfRent" placeholder='' label='Your Share of the Rent' styles='placeholder-[#00000066]  placeholder-sm' />
                                            <FormikForm.Select label='Additional People on Rent' name='additionalPeopleOnRent' />
                                        </div>
                                    </div>
                                    <div className='mt-8'>
                                        <p className='inline-block border-b border-[#572E91] text-[#572E91] font-semibold cursor-pointer'>+  Add Co-signer employment & residence details</p>
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

export default EmploymentTab;