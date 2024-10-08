import Image from 'next/image';
import React from 'react'
import Decline from '../../../public/images/RedCallBtn.png'
import Accept from '../../../public/images/GreenCallBtn.png'

const CallBox = () => {
    return (
        <div className='flex justify-center items-center h-[90vh] w-full border-l border-[#572E91]'>
            <div className='text-center'>
                <div>
                    <h2 className='text-[32px] font-semibold'>Desk Manager</h2>
                    <p className='text-[#00000080] text-2xl'> Video Call</p>
                </div>
                <div className='w-60 h-60 rounded-full bg-[#D9D9D9] my-9'>

                </div>
                <div className='flex justify-between items-center'>
                    <div className='text-center'>
                        <Image src={Decline} width={50} height={50} alt='call button' className='mx-auto' />
                        <p className='text-[#00000080] text-2xl'>Decline</p>
                    </div>
                    <div className='text-center'>
                        <Image src={Accept} width={50} height={50} alt='call button' className='mx-auto' />
                        <p className='text-[#00000080] text-2xl'>Accept</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallBox;