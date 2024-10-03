import React, { useState, useEffect } from 'react';
import authService from "../appwrite/authService"
import { useSelector } from 'react-redux';
import Landing from './Landing';
import databaseService from '../appwrite/databaseService';
import Pi from '../Components/Charts/Pi';
import Donot from '../Components/Charts/Donot';
import Bar from '../Components/Charts/Bar';
import AddExpense from './AddExpense';

const Home = () => {
  const [income, setIncome] = useState({});
  const [planned, setPlanned] = useState({});
  const [expense, setExpense] = useState({});

  const currentIncome = income.monthly_income;
  const fixed = planned.fixed_exp;
  const food = planned.food_exp;
  const transport = planned.transport_exp;
  const healthcare = planned.healthcare_exp;
  const entertainment = planned.entertainment_exp;
  const shopping = planned.shopping_exp;
  const totalExp = planned.total_exp;
  // console.log(planned);

  const authStatus = useSelector((state) => state.auth.status);

  const userData = useSelector((state) => state.auth.userData);
  
  const dataFunction = async (userData) => {
    const user_id = userData.$id;
    try {
      console.log("user id: ", user_id);
      const collectionData = await databaseService.get_collections_id(user_id);
      if(collectionData){
        // fetching income....
        const income_id = collectionData.income_id;
        const incomeData = await databaseService.getIncome(income_id);
        if(incomeData) 
        setIncome(incomeData);

        // planned category data...
        const plannedCategory_id = collectionData.planned_category_exp_id;
        const categoryData = await databaseService.get_planned_categoryWise_exp(plannedCategory_id);
        if(categoryData)
        setPlanned(categoryData);

        // actual expense data...
        const actual_exp_id = collectionData.actual_exp_id;
        const expenseData = await databaseService.get_actual_exp(actual_exp_id);
        if(expenseData)
        setExpense(expenseData);

      }


    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    dataFunction(userData);
  }, []);

  return (
    <>
      {!authStatus ? (
        <Landing />
      ) : (
        <div className="w-full">
          <div className="w-full flex ">
            <div className="w-1/3 bg-slate-200 flex justify-center p-10">
              <Pi incomeData={income} expenseData={expense} />
            </div>
            <div className="w-1/3 bg-slate-200 flex justify-center p-8">
              <Donot categoryData={planned} />
            </div>
            <div className="w-1/3">
            <div className='w-full p-4 mt-4 bg-gray-100 border-2 rounded-lg border-gray-300'>
              <h2 className='text-2xl text-center mb-4 text-gray-700'>Detailed Budget analysis:</h2>
              <h3 className='text-xl text-blue-700'>Current Income: {currentIncome} /-</h3>
              <h3 className='text-xl text-red-700'>Expense: {totalExp} /-</h3>
              <h3 className='text-xl text-green-700'>Saving: {currentIncome - totalExp} /-</h3>
              <br />
              <h3 className='text-xl text-center text-gray-700 mb-2'>Expenses in each categories: </h3>
              <p className='text-gray-600 '>Fixed (Rent, Insurance, Education, Loan): {fixed} /-</p>
              <p className='text-gray-600 '>Food: {food} /-</p>
              <p className='text-gray-600 '>Transportation: {transport} /-</p>
              <p className='text-gray-600 '>Healthcare: {healthcare} /-</p>
              <p className='text-gray-600 '>Entertainment: {entertainment} /-</p>
              <p className='text-gray-600 '>Shopping: {shopping} /-</p>
            </div>
            </div>
          </div>

          <div className="w-full bg-orange-200 flex items-center">
            <div className="w-3/5 bg-orange-300"></div>
            <div className="w-2/5 bg-orange-400"></div>
          </div>

          <div className="w-full bg-slate-200">
            <div className="p-12">
              <Bar plannedExpense={planned} actualExpense={expense} />
            </div>
            <div className="w-1/5"></div>
          </div>

          <div className="w-full bg-gray-100">
            <h2 className="text-gray-700 text-4xl text-center p-4">
              Add Your Expenses:
            </h2>

            <div className="w-full">
              <AddExpense />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;