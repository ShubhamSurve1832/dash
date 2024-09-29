'use client'
import { useField, useFormikContext } from 'formik';
import clsx from 'clsx'
import { useState } from 'react';
// import { EyeClosed, EyeOpen } from '@/config/icons';


const formClasses = 'block w-full rounded-md aitek-input mt-1 block w-full rounded-md border !border-[#CCCCCC] p-2 outline-none'


const PasswordInput = (props) => {

    const [togglePassword, setTogglePassword] = useState(false)
    const { name, placeholder,contaeinrStyle, inlineStyle, label, type = "text", onChange, required, disabled = false, ...rest } = props;
    const [field, meta] = useField(name);
    const { setFieldTouched, setFieldValue } = useFormikContext();
    const renderError = () => {
        return (
            meta.touched && meta.error ? (
                <p className="text-red-600 text-xs">{meta.error}</p>
            ) : null
        )
    }

    return (
        <div className={`mb-3 ${contaeinrStyle}`} style={inlineStyle}>
            {
                label &&
                <label
                    htmlFor={name + '-id'}
                    className="block text-base font-semibold text-[#150C0B] mb-2 tracking-[1px]"
                >
                    {label}
                    {required && <span className="text-red-600 ml-1">*</span>}
                </label>
            }
            <div className='relative'>
                <input
                    disabled={disabled}
                    id={name + '-id'}
                    name={name}
                    {...field}
                    type={togglePassword ? "text" : "password"}
                    autoComplete="off"
                    placeholder={placeholder}
                    onChange={(e) => {
                        if (onChange) onChange(e);
                        setFieldTouched(name, true);
                        setFieldValue(name, e.target.value);
                    }}
                    className={clsx(formClasses, {
                        "p-invalid": meta.touched && meta.error
                    })}
                    {...rest}
                />
                {/* <div className='absolute place-eye cursor-pointer'>
                    {togglePassword ? <button type='button' onClick={() => setTogglePassword(prev => !prev)}><EyeOpen /></button> : <button type='button' onClick={() => setTogglePassword(prev => !prev)}> <EyeClosed /></button>}
                </div> */}
            </div>


            {renderError()}
        </div>
    );
}

export default PasswordInput
