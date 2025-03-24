import React from 'react';

const Button = ({
    children,
    type='button',
    className='bg-blue-500 text-white',
    ...props
}) => {
  return (
    <button className={`${className} px-4 py-2 rounded-lg bg-gray-700 border-2 hover:bg-gray-600 text-white active:bg-gray-100 active:text-gray-800`} {...props}>
      {children}
    </button>
  );
};

export default Button;