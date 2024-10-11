import { FormError } from '.'
import * as Yup from 'yup'

const YUP_STRING = Yup.string().trim()

export const SendDocValidation = Yup.object().shape({
    firstName: YUP_STRING
        .required('First name is required'),
    lastName: YUP_STRING
        .required('Last name is required'),
    email: YUP_STRING
        .email('Email address should be in the format - example@email.com')
        .required('Required Field'),
})