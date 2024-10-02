import React, { forwardRef, useId } from 'react';

const Input = forwardRef(({
  className = "",
  type = 'text',
  placeHolder = 'Enter text',
  value,
  label,
  ...props
}, ref) => {
  const id = useId();

  return (
    <div className='w-fulls'>
      {label && <label
      className='inline-block mb-1 pl-1'
      htmlFor={id}
      >{label}</label>
      }

      <input
        id={id}
        className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full`}
        type={type}
        placeholder={placeHolder}
        value={value && value}
        ref={ref}
        {...props}
      />
    </div>
  );
});

export default Input;