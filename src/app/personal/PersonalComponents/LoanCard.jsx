import { FormikForm } from '@/components/FormikForm'
import PrimaryBtn from '@/components/UI/PrimaryBtn'
import SecondaryBtn from '@/components/UI/SecondaryBtn'
import { employmentVals } from '@/config/constants/initialValues'
import { Form, Formik } from 'formik'
import React from 'react'

const LoanCard = () => {
    return (
        <div className='border border-[#572E91] rounded-lg p-5'>
            <div className='flex justify-between border-b border-[#0000001A] pb-3'>
                <h3 className='text-base'>Bank of America</h3>
                <div>

                </div>
            </div>
            <div className='bg-[#0078D21A] rounded-xl p-4 flex justify-between items-center my-4'>
                <p className='text-[#666666] text-sm font-semibold'>Dealership Margin</p>
                <span className='text-[#0078D2] font-bold text-xl'>10%</span>
            </div>
            <Formik
                initialValues={employmentVals}
                // validationSchema={profileValidationSchema}
                // onSubmit={onSubmit}
                enableReinitialize>
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <FormikForm.RangeSelect />
                        <div className='flex justify-between gap-3'>
                            <SecondaryBtn className="w-full  text-xl mt-4" title="Compare" />
                            <PrimaryBtn className="w-full  text-xl mt-4" title="Select" />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LoanCard
