import React from 'react'
import CarDetailsCard from './CarDetailsCard'
import PrimaryBtn from '@/components/UI/PrimaryBtn'

const DetailTab = () => {
  return (
    <div>
      <CarDetailsCard />
      <div className='mt-6'>
        <h3 className='text-[#000000B2] font-medium text-xl pb-4 border-b'>Car Details</h3>
        <div className='my-4'>
          <div className='flex my-4 gap-1'>
            <span className='font-semibold'>Brand : </span>
            <p> Kia</p>
          </div>
          <div className='flex my-4 gap-1'>
            <span className='font-semibold'>Model : </span>
            <p> 2021 Kia Forte</p>
          </div>
          <div className='flex my-4 gap-1'>
            <span className='font-semibold'>Colour : </span>
            <p> Red</p>
          </div>
          <div className='flex my-4 gap-1'>
            <span className='font-semibold'>Price : </span>
            <p> $15,995</p>
          </div>
        </div>
      </div>
      <div className='mt-6'>
        <h3 className='text-[#000000B2] font-medium text-xl pb-4 border-b'>Heading</h3>
        <div className='my-4'>

        </div>
      </div>
      <div className='mt-6'>
        <h3 className='text-[#000000B2] font-medium text-xl pb-4 border-b'>Summary</h3>
        <div className='my-4'>
          <div className='flex my-2 gap-1 justify-between'>
            <span className='font-semibold'>Total Amount : </span>
            <p> $8000</p>
          </div>
          <div className='flex my-2 gap-1 justify-between'>
            <span className='font-semibold'>Trade-in : </span>
            <p> $8000</p>
          </div>
          <div className='flex my-2 gap-1 justify-between'>
            <span className='font-semibold'>Down Payment : </span>
            <p> $8000</p>
          </div>
          <div className='flex my-2 gap-1 justify-between'>
            <span className='font-semibold'>Loan Amount : </span>
            <p> $8000</p>
          </div>
          <div className='flex gap-1 justify-between my-3 pt-3 border-t border-[#E9D9FF]'>
            <span className='font-semibold'>Loan Amount : </span>
            <p>$5000</p>
          </div>
        </div>
        <PrimaryBtn className=" w-full text-xl mt-6" title="Select" />
      </div>
    </div>
  )
}

export default DetailTab