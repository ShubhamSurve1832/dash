'use client'
import React from 'react'
import { FormikForm } from '@/components/FormikForm';
import { Form, Formik } from 'formik';
import UserBox from './UserBox';

const ListiingCard = ({state}) => {
    return (
        <div className='max-w-[30rem] w-full'>
            <h2 className='text-2xl font-semibold tracking-[1px]'>{state==="Chat" ? "Chats" : "Calls"}</h2>
            <Formik
                initialValues={{ search: "" }}
                enableReinitialize
            >
                {({ handleSubmit, values, setFieldValue }) => {
                    return (
                        <>
                            <Form onSubmit={handleSubmit} className='relative'>
                                <FormikForm.Input name="search" placeholder="Search by ID, First Name, or Last Name" inlineStyle='w-full' styles=' p-2 rounded-xl' />
                            </Form>
                        </>
                    );
                }}
            </Formik >
            <div className='h-[70vh] overflow-y-auto hidden-scroller'>
                <UserBox />
                <UserBox />
                <UserBox />
                <UserBox />
                <UserBox />
                <UserBox />
                <UserBox />
            </div>
        </div>
    )
}

export default ListiingCard;