import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, } from "@headlessui/react";

import DownArrow from '@/images/icons/DownArrow';
import Modal from '@/components/UI/Modal'
import Cross from '@/images/icons/Cross'
import { Form, Formik } from 'formik';
import { FormikForm } from '@/components/FormikForm';
import { filterVals } from '@/config/constants/initialValues';

export const Roundedbtn = ({ title }) => {
    return (
        <button className="text-sm font-semibold text-[#000000] hover:text-gray-900 border px-3 py-2 border-[#00000033] rounded-[37px]">
            {title}
        </button>
    )
}

const FilterModal = ({ open, setOpen }) => {


    return (
        <Modal open={open} setOpen={setOpen}>
            <div className="fixed inset-0 z-1000 overflow-y-auto">
                <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center ">
                    <div className="relative transform overflow-hidden p-6 rounded-lg bg-white text-left shadow-xl transition-all sm:my-auto w-full sm:max-w-4xl">
                        <div className="flex justify-between items-center pb-3 border-b border-[#00000033]">
                            <h3 className="text-xl text-[#000000] font-semibold">Filters</h3>
                            <button className="text-sm font-semibold text-[#000000] hover:text-gray-900" onClick={() => setOpen(false)}>
                                <Cross />
                            </button>
                        </div>
                        <Formik
                            initialValues={filterVals}
                            // validationSchema={profileValidationSchema}
                            // onSubmit={onSubmit}
                            enableReinitialize>
                            {({ handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <div>
                                        <Disclosure
                                            as="div"
                                            defaultOpen={true}
                                        >
                                            <DisclosureButton className="py-3 mt-4 border-b-[0.5px] border-[#00000033] group flex w-full items-center justify-between rounded-[4px] tracking-[1px]">
                                                <span className="text-xl font-semibold text-[#000000] group-data-[hover]:text-black/80">
                                                    Price Range
                                                </span>
                                                <div className="flex items-center justify-center text-black">
                                                    <DownArrow />
                                                </div>
                                            </DisclosureButton>
                                            <DisclosurePanel className="pt-5">
                                                <div>

                                                    <div className='flex gap-5 flex-wrap '>
                                                        <Roundedbtn title='Below $ 10,000' />
                                                        <Roundedbtn title='$ 10,000 - $ 20,000 ' />
                                                        <Roundedbtn title='$20,000 - $ 30,000' />
                                                        <Roundedbtn title='$ 30000 - $ 40,000' />
                                                        <Roundedbtn title='$ 40000 - $ 50,000' />
                                                        <Roundedbtn title='$ 50,000 +' />
                                                    </div>

                                                </div>
                                            </DisclosurePanel>
                                        </Disclosure>

                                        <Disclosure
                                            as="div"
                                            defaultOpen={true}
                                        >
                                            <DisclosureButton className="py-3 mt-4 border-b-[0.5px] border-[#00000033] group flex w-full items-center justify-between rounded-[4px] tracking-[1px]">
                                                <span className="text-xl font-semibold text-[#000000] group-data-[hover]:text-black/80">
                                                    Car Age
                                                </span>
                                                <div className="flex items-center justify-center text-black">
                                                    <DownArrow />
                                                </div>
                                            </DisclosureButton>
                                            <DisclosurePanel className="pt-5">
                                                <div>

                                                </div>
                                            </DisclosurePanel>
                                        </Disclosure>

                                        <Disclosure
                                            as="div"
                                            defaultOpen={true}
                                        >
                                            <DisclosureButton className="py-3 mt-4 border-b-[0.5px] border-[#00000033] group flex w-full items-center justify-between rounded-[4px] tracking-[1px]">
                                                <span className="text-xl font-semibold text-[#000000] group-data-[hover]:text-black/80">
                                                    Fuel Type
                                                </span>
                                                <div className="flex items-center justify-center text-black">
                                                    <DownArrow />
                                                </div>
                                            </DisclosureButton>
                                            <DisclosurePanel className="pt-5">
                                                <div>

                                                </div>
                                            </DisclosurePanel>
                                        </Disclosure>

                                        <Disclosure
                                            as="div"
                                            defaultOpen={true}
                                        >
                                            <DisclosureButton className="py-3 mt-4 border-b-[0.5px] border-[#00000033] group flex w-full items-center justify-between rounded-[4px] tracking-[1px]">
                                                <span className="text-xl font-semibold text-[#000000] group-data-[hover]:text-black/80">
                                                    Miles
                                                </span>
                                                <div className="flex items-center justify-center text-black">
                                                    <DownArrow />
                                                </div>
                                            </DisclosureButton>
                                            <DisclosurePanel className="pt-5">
                                                <div>

                                                </div>
                                            </DisclosurePanel>
                                        </Disclosure>

                                        <Disclosure
                                            as="div"
                                            defaultOpen={true}
                                        >
                                            <DisclosureButton className="py-3 mt-4 border-b-[0.5px] border-[#00000033] group flex w-full items-center justify-between rounded-[4px] tracking-[1px]">
                                                <span className="text-xl font-semibold text-[#000000] group-data-[hover]:text-black/80">
                                                    Transmission Type
                                                </span>
                                                <div className="flex items-center justify-center text-black">
                                                    <DownArrow />
                                                </div>
                                            </DisclosureButton>
                                            <DisclosurePanel className="pt-5">
                                                <div>

                                                </div>
                                            </DisclosurePanel>
                                        </Disclosure>

                                        <Disclosure
                                            as="div"
                                            defaultOpen={true}
                                        >
                                            <DisclosureButton className="py-3 mt-4 border-b-[0.5px] border-[#00000033] group flex w-full items-center justify-between rounded-[4px] tracking-[1px]">
                                                <span className="text-xl font-semibold text-[#000000] group-data-[hover]:text-black/80">
                                                    Colors
                                                </span>
                                                <div className="flex items-center justify-center text-black">
                                                    <DownArrow />
                                                </div>
                                            </DisclosureButton>
                                            <DisclosurePanel className="pt-5">
                                                <div>

                                                </div>
                                            </DisclosurePanel>
                                        </Disclosure>

                                        <Disclosure
                                            as="div"
                                            defaultOpen={true}
                                        >
                                            <DisclosureButton className="py-3 mt-4 border-b-[0.5px] border-[#00000033] group flex w-full items-center justify-between rounded-[4px] tracking-[1px]">
                                                <span className="text-xl font-semibold text-[#000000] group-data-[hover]:text-black/80">
                                                    Additional Features
                                                </span>
                                                <div className="flex items-center justify-center text-black">
                                                    <DownArrow />
                                                </div>
                                            </DisclosureButton>
                                            <DisclosurePanel className="pt-5">
                                                <div className='grid grid-cols-2 gap-4 w-1/2'>
                                                    <FormikForm.CheckBox name="sunRoof" label='Sun roof' styles='placeholder-[#000000]  placeholder-sm' />
                                                    <FormikForm.CheckBox name="cruiseControl" label='Cruise Control' styles='placeholder-[#000000]  placeholder-sm' />
                                                    <FormikForm.CheckBox name="fourWheelDrive" label='Four wheel drive' styles='placeholder-[#000000]  placeholder-sm' />
                                                    <FormikForm.CheckBox name="hillHoldControl" label='Hill Hold Control' styles='placeholder-[#000000]  placeholder-sm' />
                                                    <FormikForm.CheckBox name="musicSystem" label='Music system' styles='placeholder-[#000000]  placeholder-sm' />
                                                    <FormikForm.CheckBox name="ventilatedSeats" label='Ventilated Seats' styles='placeholder-[#000000]  placeholder-sm' />
                                                </div>
                                            </DisclosurePanel>
                                        </Disclosure>

                                        <Disclosure
                                            as="div"
                                            defaultOpen={true}
                                        >
                                            <DisclosureButton className="py-3 mt-4 border-b-[0.5px] border-[#00000033] group flex w-full items-center justify-between rounded-[4px] tracking-[1px]">
                                                <span className="text-xl font-semibold text-[#000000] group-data-[hover]:text-black/80">
                                                    Engine Capacity
                                                </span>
                                                <div className="flex items-center justify-center text-black">
                                                    <DownArrow />
                                                </div>
                                            </DisclosureButton>
                                            <DisclosurePanel className="pt-5">
                                                <div>

                                                </div>
                                            </DisclosurePanel>
                                        </Disclosure>

                                        <Disclosure
                                            as="div"
                                            defaultOpen={true}
                                        >
                                            <DisclosureButton className="py-3 mt-4 border-b-[0.5px] border-[#00000033] group flex w-full items-center justify-between rounded-[4px] tracking-[1px]">
                                                <span className="text-xl font-semibold text-[#000000] group-data-[hover]:text-black/80">
                                                    Seating Capacity
                                                </span>
                                                <div className="flex items-center justify-center text-black">
                                                    <DownArrow />
                                                </div>
                                            </DisclosureButton>
                                            <DisclosurePanel className="pt-5">
                                                <div>

                                                </div>
                                            </DisclosurePanel>
                                        </Disclosure>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default FilterModal;