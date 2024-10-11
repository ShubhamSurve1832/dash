'use client'
import React, { useState } from 'react'
import SearchVehicle from '@/container/PersonalComponents/VehicleSelectionTab/SearchVehicle'
import VehicleListing from '@/container/PersonalComponents/VehicleSelectionTab/VehicleListing'
import DetailTab from '@/container/PersonalComponents/VehicleSelectionTab/DetailTab'
import Progressbar from '@/components/UI/Progressbar'

const inventory = () => {
    const [step, setStep] = useState(1)
    return (
        <div className='bg-white p-4 rounded-md'>
            <div className="p-3 group w-full bg-[#F3F2F6]  rounded-[4px] tracking-[1px]">
                <span className="text-xl font-semibold text-[#000000] group-data-[hover]:text-black/80">
                    Vehicle Selection
                </span>
            </div>
            <Progressbar steps={step} />
            {step === 1 && (<SearchVehicle setStep={setStep} />)}
            {step === 2 && (<VehicleListing setStep={setStep} />)}
            {step === 3 && (<DetailTab setStep={setStep}/>)}

        </div>
    )
}

export default inventory