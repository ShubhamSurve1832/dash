// EXTERNAL LIBRARY
import { useField, useFormikContext } from 'formik';
import { useState } from 'react';

const RadioGroup = (props) => {
  const { name, label, onChange, options, className, ...rest } = props;
  const [field, meta] = useField(name);

  const { setFieldTouched, setFieldValue } = useFormikContext();

  const renderError = () => {
    return meta.touched && meta.error ? (
      <div className="text-red-600 text-xs">{meta.error}</div>
    ) : null;
  };

  return (
    <div>
      {label && (
        <label
          htmlFor={name + '-id'}
          className="text-base font-semibold leading-7 text-gray-900"
        >
          {label}
        </label>
      )}
      <div className={` ${className} p-3 grid gap-3`}>
        {options.map((option, index) => {
          const isSelected = option.value === field.value;
          return (
            <div className="flex gap-2 items-center min-w-[100px]" key={option.value + '-key-' + index}>
              <input
                id={option.value + '-id'}
                {...field}
                value={option.value}
                checked={isSelected}
                type="radio"
                className="hidden" // Hide the default radio input
                onChange={(e) => {
                  if (onChange) onChange(e);
                  setFieldTouched(name, true);
                  setFieldValue(name, e.target.value);
                }}
                {...rest}
              />
              <div className="relative flex items-center cursor-pointer" onClick={() => setFieldValue(name, option.value)}>
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center border-2 transition-all ${
                    isSelected ? 'border-black' : 'border-gray-400'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all ${
                      isSelected ? 'bg-black' : 'bg-transparent'
                    }`}
                  ></div>
                </div>
                <label htmlFor={option.value + '-id'} className="ml-2">
                  {option.label}
                </label>
              </div>
            </div>
          );
        })}
      </div>
      {renderError()}
    </div>
  );
};

export default RadioGroup;
