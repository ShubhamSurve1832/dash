import React from 'react'
import Modal from '../UI/Modal'
import Cross from '@/images/icons/Cross'
import { Form, Formik } from 'formik'
import { FormikForm } from '../FormikForm'
import PrimaryBtn from '../UI/PrimaryBtn'

const PermissionModal = ({ open, setOpen }) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="fixed inset-0 bg-black/30" aria-hidden="true">
        <div className="flex justify-center items-center min-h-screen overflow-y-auto">
          <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center pb-3 border-b border-[#00000033]">
              <h3 className="text-xl text-[#000000] font-semibold">Permission</h3>
              <button className="text-sm font-semibold text-[#000000] hover:text-gray-900" onClick={() => setOpen(false)}>
                <Cross />
              </button>
            </div>
            <div>
              <Formik
                initialValues={{ comment: "" }}
                // validationSchema={profileValidationSchema}
                // onSubmit={onSubmit}
                enableReinitialize>
                {({ handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <p className='my-6'>I will proceed with the purchase if all deal terms are acceptable.</p>
                    <div className='my-6'>
                      <p className='text-[#000000B2] font-semibold text-lg'>Signature</p>
                      <div className='h-12 border-[#0000001A] border-b w-[25rem]'>

                      </div>    
                      <p className='font-semibold mt-4'>Lauren Smith</p>   
                      <p className='font-semibold mt-1'>05 October 2024</p>             
                    </div>
                    <PrimaryBtn title="Submit" className='w-full text-xl' />
                  </Form>
                )}
              </Formik>

            </div>

          </div>
        </div>
      </div>
    </Modal>
  )
}

export default PermissionModal