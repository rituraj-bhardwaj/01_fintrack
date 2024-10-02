import React, { useEffect } from 'react';
import authService from "../appwrite/authService"
import { useSelector } from 'react-redux';
import Landing from './Landing';
import databaseService from '../appwrite/databaseService';
import { data } from 'autoprefixer';

const Home = () => {
  const authStatus = useSelector((state) => state.auth.status)
  const userData = useSelector((state) => state.auth.userData);

  // useEffect(() => {
  //   // console.log(userData);
  //   const user_id = userData.$id;
  //   const monthly_income = 100000;
  //   const fixed_exp = 10;
  //   const food_exp = 0, transport_exp = 0, entertainment_exp = 0, shopping_exp = 0, healthcare_exp = 0, total_exp = 10;

  //   const apiCall = async () => {
  //     const res1 = await databaseService.createIncome({user_id, monthly_income});
  //     console.log(res1);

  //     const res2 = await databaseService.create_actual_exp({user_id, fixed_exp, food_exp, transport_exp, entertainment_exp, shopping_exp, healthcare_exp, total_exp});
  //     console.log(res2);

  //     const res3 = await databaseService.plan_categoryWise_exp({user_id, fixed_exp, food_exp, transport_exp, entertainment_exp, shopping_exp, healthcare_exp, total_exp});
  //     console.log(res3);

  //     const actual_exp_id = res2.actual_exp_id, income_id = res1.income_id, planned_category_exp_id = res3.category_id
  //     const res4 = await databaseService.create_collections_id({user_id, actual_exp_id, income_id, planned_category_exp_id})
  //     console.log(res4);
  //   }

  //   apiCall();
  // }, []);


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