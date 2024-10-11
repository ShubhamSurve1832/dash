import React from 'react'
import Modal from '../UI/Modal';
import { Form, Formik } from 'formik';
import PrimaryBtn from '../UI/PrimaryBtn';
import Cross from '@/images/icons/Cross';
import { FormikForm } from '../FormikForm';
import { SendDocValidation } from '@/config/constants/schema';
import { sendDocVals } from '@/config/constants/initialValues';

const SendDocModal = ({open, setOpen}) => {
    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        resetForm();
        setOpen(false);
    };
  return (
    <Modal open={open} setOpen={setOpen}>
    <div className="fixed inset-0 bg-black/30" aria-hidden="true">
      <div className="flex justify-center items-center min-h-screen overflow-y-auto">
        <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-md">
          <div className="flex justify-between items-center pb-3 border-b border-[#00000033]">
            <h3 className="text-xl text-[#000000] font-semibold">Send Documents</h3>
            <button className="text-sm font-semibold text-[#000000] hover:text-gray-900" onClick={() => setOpen(false)}>
              <Cross />
            </button>                                                                     
          </div>
          <div className='mt-3'>
            <Formik
              initialValues={sendDocVals}
              validationSchema={SendDocValidation}
              onSubmit={onSubmit}
              enableReinitialize>
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>                 
                  <FormikForm.Input inlineStyle='mt-2' label="First Name" name="firstName" placeholder="Enter your first name" />
                  <FormikForm.Input inlineStyle='mt-2' label="last Name" name="lastName" placeholder="Enter your last name" />
                  <FormikForm.Input inlineStyle='mt-2' label="Email" name="email" placeholder="Enter your email ID" />
                  <PrimaryBtn title="Submit" className='w-full text-xl mt-6' />
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

export default SendDocModal;