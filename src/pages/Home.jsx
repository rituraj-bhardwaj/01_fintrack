import React from 'react';
import authService from "../appwrite/authService"
import { useSelector } from 'react-redux';
import Landing from './Landing';

const Home = () => {
  const authStatus = useSelector((state) => state.auth.status)

  console.log(authStatus);
  return (
    <>
      {!authStatus ? <Landing /> : 
        <div className='w-full h-screen'>
          <div className='w-full h-1/3 bg-orange-100 flex items-center'>
            <div className='h-5/6 w-2/5 bg-orange-300'></div>
            <div className='h-5/6 w-3/5 bg-orange-400'></div>
          </div>

          <div className='w-full h-1/3 bg-orange-200 flex items-center'>
            <div className='h-5/6 w-3/5 bg-orange-300'></div>
            <div className='h-5/6 w-2/5 bg-orange-400'></div>
          </div>

          <div className='w-full h-1/3 bg-orange-100'></div>
        </div>
      }
      
    </>
  );
};

export default Home;