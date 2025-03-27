

import React from 'react';

const Loader = () => {
  return (
    <div className='absolute w-full h-screen flex justify-center items-center '>
      <div className='w-32 h-32 flex justify-center items-center rounded-xl bg-white shadow-lg'>
        <div className='w-20 h-20 rounded-full border-8 border-gray-300 border-t-blue-700 animate-spin'></div>
        {/* <div className="w-20 h-20 border-8 border-dashed rounded-full animate-spin border-blue-500"></div> */}
      </div>

    </div>

  );
};

export default Loader;

// backdrop:blur-lg bg-white/50