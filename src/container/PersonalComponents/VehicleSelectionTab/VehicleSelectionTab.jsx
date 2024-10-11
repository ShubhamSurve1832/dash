'use client'
import React, { useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, } from "@headlessui/react";
import DownArrow from '@/images/icons/DownArrow';
import VehicleListing from './VehicleListing';
import DetailTab from './DetailTab';
import Progressbar from '@/components/UI/Progressbar';
import VehicleSelectionModal from './VehicleSelectionModal';
import SearchVehicle from './SearchVehicle';

const VehicleSelectionTab = () => {
    const [step, setStep] = useState(1)
    const [open, setOpen] = useState(false);
    return (
        <div className='p-4 bg-[#fff] rounded-[4px] mt-4'>
            <Disclosure as="div" defaultOpen={true}>
                <DisclosureButton className="p-3 group flex w-full items-center justify-between bg-[#F3F2F6]  rounded-[4px] tracking-[1px]">
                    <span className="text-xl font-semibold text-[#000000] group-data-[hover]:text-black/80">
                        Vehicle Selection
                    </span>
                    <div className="flex items-center justify-center text-black">
                        <DownArrow />
                    </div>
                </DisclosureButton>
                <DisclosurePanel className="pt-5">
                    <div>
                        <Progressbar steps={step} />
                        {step === 1 && (<SearchVehicle setStep={setStep} />)}
                        {step === 2 && (<VehicleListing setStep={setStep} />)}
                        {step === 3 && (<DetailTab setStep={setStep} />)}
                    </div>
                </DisclosurePanel>
            </Disclosure>
            {
                open &&
                <VehicleSelectionModal open={open} setOpen={setOpen} />
            }
        </div>
    )
}

export default VehicleSelectionTab;