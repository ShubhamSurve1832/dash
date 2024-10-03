'use client'
import React from 'react'
import Modal from '../UI/Modal'
import Cross from '@/images/icons/Cross'
import { FormikForm } from '../FormikForm'
import { Form, Formik } from 'formik'
import PrimaryBtn from '../UI/PrimaryBtn'

const CommentModal = ({ open, setOpen }) => {
    return (
        <Modal open={open} setOpen={setOpen}>
            <div className="fixed inset-0 bg-black/30" aria-hidden="true">
                <div className="flex justify-center items-center min-h-screen overflow-y-auto">
                    <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
                        <div className="flex justify-between items-center pb-3 border-b border-[#00000033]">
                            <h3 className="text-xl text-[#000000] font-semibold">Comment</h3>
                            <button className="text-sm font-semibold text-[#000000] hover:text-gray-900" onClick={() => setOpen(false)}>
                                <Cross />
                            </button>
                        </div>
                        <div>
                            <Formik
                                initialValues={{comment:""}}
                                // validationSchema={profileValidationSchema}
                                // onSubmit={onSubmit}
                                enableReinitialize>
                                {({ handleSubmit }) => (
                                    <Form onSubmit={handleSubmit}>
                                        <FormikForm.Input type='textarea' name="comment" placeholder='Enter your comment' label="" styles="placeholder-[#00000066] placeholder-sm" inlineStyle="my-3" />
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

export default CommentModal