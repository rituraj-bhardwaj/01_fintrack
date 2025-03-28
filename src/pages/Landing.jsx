import React from 'react';
import { Button } from '../Components/component';
import finTrackImg from '../assets/finTrack.png';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const nevigate = useNavigate();

  const handleClick = () => {
    nevigate('/login');
  }

  return (
    <div className='w-full h-screen bg-slate-200'>

      <div className='w-full h-3/5 flex p-8'>
        <div className='w-1/2'>
          <div className='w-full text-6xl text-gray-800 p-4'>
            <h1>"FinTrack: Your Path to Smarter Savings!"</h1>
          </div>
          <div className='w-full '>
            <p className='text-gray-600 p-4'>"Your financial goals aren’t just dreams anymore—FinTrack helps turn them into reality. Start tracking, start saving, and unlock a financially secure future."</p>
          </div>

          <div className='w-4/5'>
            <Button 
              children={"Get Started"}
              type='button'
              className='text-xl px-6 py-2 rounded-lg text-white bg-gray-800 hover:bg-gray-700 active:bg-gray-800 hover:scale-110 transition-transform duration-300'
              onClick={handleClick}
            />
          </div>
        </div>
        <div className='w-1/2 border'>
          <div className='w-full py-auto rounded-lg border-2 border-gray-400 mt-auto mb-auto'>
            <img src={finTrackImg} alt="" className='w-full rounded-lg border-2 border-gray-300 hover:scale-110 transition-transform duration-300' />
          </div>
        </div>
      </div>
      
      <div className='w-full h-2/5 flex justify-around items-center '>
          <div className='w-1/4 h-4/5 bg-gray-100 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300'>
            <h1 className='text-gray-800 text-3xl p-4'>Easy Tracking:</h1>
            <p className='text-gray-600 p-4'>Visualize your financial habits through intuitive pie charts and bar charts. Monitor your planned vs. actual expenses and make smarter decisions to stay on target.</p>
          </div>
          <div className='w-1/4 h-4/5 bg-gray-100 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300'>
            <h1 className='text-gray-800 text-3xl p-4'>Visual Insights:</h1>
            <p className='text-gray-600 p-4'>visualize your expenses and easily consider your next expense</p>
          </div>
          <div className='w-1/4 h-4/5 bg-gray-100 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300'>
            <h1 className='text-gray-800 text-3xl p-4'>Budgeting made easy:</h1>
            <p className='text-gray-600 p-4'>tackling out your budgeting problem will make your budgeting problem easier for you </p>
          </div>
      </div>
    </div>
  );
};

export default Landing;