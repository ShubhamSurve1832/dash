import React from 'react'

const UserBox = () => {
    return (
        <div className='px-4 py-3 bg-[#FFFFFF] rounded-md flex gap-3 w-full mt-4'>
            <div className='w-12 h-12 rounded-full bg-[#D9D9D9] flex justify-center items-center'>

            </div>
            <div className='flex flex-col justify-between'>
                <h2 className='text-lg font-semibold'>Desk Manager</h2>
                <p className='text-base text-[#00000080]'>Let me know what the final decision is</p>
            </div>
            <div className='ml-14'>
                <span>13:20</span>
            </div>

        </div>
    )
}

export default UserBox;