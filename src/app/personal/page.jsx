'use client'
import React, { useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

import ShareIcon from '@/images/icons/ShareIcon';
import HistoryClockIcon from '@/images/icons/HistoryClockIcon';
import PersonalTab from '../../container/PersonalComponents/PersonalTab/PersonalTab';
import EmploymentTab from '../../container/PersonalComponents/EmploymentTab/EmploymentTab';
import AutoLoanTab from '../../container/PersonalComponents/AutoLoanTab/AutoLoanTab';
import VehicleSelectionTab from '../../container/PersonalComponents/VehicleSelectionTab/VehicleSelectionTab';
import LoanOptionTab from '../../container/PersonalComponents/LoanOptionTab/LoanOptionTab';
import FinalChecklistTab from '../../container/PersonalComponents/FinalChecklistTab/FinalChecklistTab';
import NotificationModal from '@/components/Shared/NotificationModal';
import GreenChecked from '@/images/icons/GreenChecked';
import OffersTab from '../../container/PersonalComponents/OffersTab';
import InfoTab from '../../container/PersonalComponents/InfoTab';
import CoApplicantTab from '../../container/PersonalComponents/CoApplicantTab/CoApplicantTab';
import PreviewTab from '../../container/PersonalComponents/PreviewTab/PreviewTab';
import SendDocModal from '../../components/Shared/SendDocModal';


const page = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='persnal-tabs'>
            {/* LEFT SIDE TABS */}
            <div className='sideBar rounded-[4px]'>
                <div className='asideTabs bg-[#28A8200D]'>
                    <p>Personal</p>
                    <GreenChecked className='w-5 h-5' />
                </div>
                <div className='asideTabs'>
                    <p>Employment &
                        Residence</p>
                </div>
                <div className='asideTabs'>
                    <p>Auto Loan
                        Requirement</p>
                </div>
                <div className='asideTabs'>
                    <p>Vehicle Selection</p>
                </div>
            </div>

            {/* RIGHT SIDE SECTION  */}
            <div>
                <div className='p-4 bg-[#fff] mb-4 rounded-[4px]' >
                    <div className='bg-[#E9D9FF33] p-4 flex justify-between items-center rounded-t-md'>
                        <div className='personal-header'>
                            <h1 className='text-[#000000B2] text-3xl font-medium mb-2'>Lauren Smith</h1>
                            <div className='flex items-center gap-2'>
                                <span className='text-[#00000080]'>Id: 252</span>
                                <div className='flex items-center gap-2 cursor-pointer' onClick={() => setOpen(true)}>
                                    <ShareIcon />
                                    <p className='text-[#572E91] border-b border-[#572E91] inline-block leading-[16px]'>Send Document Upload Link</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <Menu>
                                <MenuButton className={`capitalize 2xl:text-lg text-base desktop flex items-center gap-2 bg-[#FFFFFF1A] rounded-[10px] font-medium`}>
                                    <HistoryClockIcon />
                                </MenuButton>

                                <MenuItems
                                    transition
                                    anchor="bottom end"
                                    className={`2xl:text-lg text-base p-8 desktop  bg-[#fff] !top-28 !bottom-8 w-[30rem] origin-top-right rounded-xl !right-16 !left-auto shadow-lg transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 z-[9999] hidden-scroller`}
                                >

                                    <MenuItem>
                                        {/* <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[hover]:bg-[#ffffff8f] data-[focus]:bg-white/10">
                                            
                                        </button> */}

                                        <NotificationModal />
                                    </MenuItem>
                                </MenuItems>
                            </Menu>

                        </div>
                    </div>
                </div>
                <div className=''>
                    <PersonalTab />
                    <CoApplicantTab />
                    <EmploymentTab />
                    <AutoLoanTab />
                    <VehicleSelectionTab />
                    <LoanOptionTab />
                    <FinalChecklistTab />
                    <PreviewTab />
                    <OffersTab />
                    <InfoTab />
                </div>
            </div>
            { open && (
                <SendDocModal open={open} setOpen={setOpen} />
            )
            }
        </div>
    )
}

export default page;