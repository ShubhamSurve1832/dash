import PhoneIcon from '@/images/icons/PhoneIcon';
import PhoneIcon2 from '@/images/icons/PhoneIcon2';
import VideoCamIcon from '@/images/icons/VideoCamIcon';
import React from 'react'

const ChatBox = () => {
    return (
        <div className='w-full'>
            <div className='flex justify-between items-center py-3 px-6 border border-[#572E91]'>
                <div className='flex gap-3 items-center'>
                    <div className='w-12 h-12 rounded-full bg-[#D9D9D9] flex justify-center items-center'>
                    </div>
                    <h2 className='text-lg font-semibold'>Desk Manager</h2>
                </div>
                <div className='flex gap-3'>
                    <PhoneIcon2 />
                    <VideoCamIcon />
                </div>
            </div>
            <div className='border-l border-[#572E91] w-full h-[80vh] flex flex-col justify-end p-6'>
                <div className='message-box sm:max-h-[50vh] max-h-[70vh] overflow-auto hide-scroller pb-4'>
                    <div className='flex justify-center'>
                        <div className='bg-[#DBDBDB] rounded-[4px] text-base py-2 px-3 text-[#000000]'>
                            <span>09-09-2024</span>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-start gap-2 sm:mt-7 mt-4 sm:w-3/4 w-[90%]'>
                            <div className='w-8 h-8 rounded-full bg-[#D9D9D9] flex justify-center items-center'>
                            </div>
                            <div className='flex flex-col items-end bg-[#FFFFFF] rounded-[4px] px-4 py-2 max-sm:w-[90%]'>
                                <p className=' rounded-xl text-base input-bg-gradient-one rounded-tl-none'>Do forward me all the loan options available</p>
                                <span className='text-[12px] text-[#00000080]'>13:20</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end mt-4'>
                        <div className='flex gap-2 justify-end sm:w-3/4 w-[90%]'>
                            <div className='flex flex-col items-end bg-[#FFFFFF] rounded-[4px] px-4 py-2 max-sm:w-[90%]'>
                                <p className=' rounded-xl text-base input-bg-gradient-one rounded-tl-none'>I have forwarded the loan options to the customer</p>
                                <span className='text-[12px] text-[#00000080]'>13:20</span>
                            </div>
                            <div className='w-8 h-8 rounded-full bg-[#D9D9D9] flex justify-center items-center'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ChatBox;