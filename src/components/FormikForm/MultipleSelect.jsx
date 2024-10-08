import React from 'react';

// EXTERNAL LIBRARY
import { useField, useFormikContext } from 'formik';
import ReactSelect from 'react-select';

import makeAnimated from "react-select/animated";

export const animatedComponents = makeAnimated();

const MultipleSelect = (props) => {

    const { name, label, onChange, options, className, onInputChange, required, ...rest } = props;
    const [field, meta] = useField(name);
    const { setFieldTouched, setFieldValue } = useFormikContext();

    const renderError = () => {
        return (
            meta.touched && meta.error ? (
                <div className="p-error text-red-600 text-xs">{meta.error}</div>
            ) : null
        )
    }

    return (
        <div className='mb-3'>
            {
                label && <label
                    htmlFor={name + '-id'}
                    className="block text-base font-semibold text-[#150C0B] mb-2 tracking-[1px]"
                >
                    {label}
                    {required && <span className="text-red-600 ml-1">*</span>}
                </label>
            }

            <ReactSelect
                id={name + '-id'}
                name={name}
                options={options}
                components={animatedComponents}
                {...field}
                onChange={(val) => {
                    if (onChange) onChange({ target: { value: val.value, name, }, ids: val });
                    setFieldTouched(name, true);
                    setFieldValue(name, val ? val : []);
                }}
                className={`aitek-input rounded-md ${className}`}
                onInputChange={(val) => {
                    if (onInputChange && val) onInputChange({ target: { value: val, name } });
                }}
                onMenuOpen={() => {
                    setFieldTouched(name, true);
                }}
                {...rest}
            />
            {renderError()}
        </div>
    );
}


export default MultipleSelect