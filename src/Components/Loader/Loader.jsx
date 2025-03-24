

import React from 'react';

const Loader = () => {
  return (
    <div className='absolute w-full h-screen flex justify-center items-center backdrop:blur-lg bg-white/50'>
      <div className='w-20 h-20 rounded-full border-8 border-gray-300 border-t-blue-700 animate-spin'></div>
      {/* <div className="w-20 h-20 border-8 border-dashed rounded-full animate-spin border-blue-500"></div> */}

    </div>

  );
};

export default Loader;