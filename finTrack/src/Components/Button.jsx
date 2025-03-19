import React from 'react';

const Button = ({
    children,
    type='button',
    className='bg-blue-500 text-white',
    ...props
}) => {
  return (
    <button className={`${className} px-4 py-2 rounded-lg border-gray-100 border-2 hover:border-white active:border-8`} {...props}>
      {children}
    </button>
  );
};

export default Button;