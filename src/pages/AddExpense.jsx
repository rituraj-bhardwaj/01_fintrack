import React, { useState } from "react";
import databaseService from "../appwrite/databaseService";
import { Input, Button } from "../Components/component";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AddExpense = () => {
  const [error, setError] = useState("");
  const {register, handleSubmit} = useForm();
  const navigate = useNavigate();

  var user_id;
  const userData = useSelector((state) => state.auth.userData);
  if(userData) user_id = userData.$id;

  const addExpense = async (expense) => {
    setError("");
    console.log(expense);
    const inputEntertain = parseInt(expense.entertainment);
    const inputFixed = parseInt(expense.fixedExp);
    const inputFood  = parseInt(expense.foodExp);
    const inputHealth = parseInt(expense.healthcare);
    const inputShop = parseInt(expense.shopping);
    const inputTransport = parseInt(expense.transportation);

    const collectionData = await databaseService.get_collections_id(user_id);
    if(collectionData) {
      const actual_exp_id = collectionData.actual_exp_id;

      const expenseData = await databaseService.get_actual_exp(actual_exp_id);
      if(expenseData) console.log(expenseData);

      const entertainment_exp = expenseData.entertainment_exp + inputEntertain;
      const fixed_exp = expenseData.fixed_exp + inputFixed;
      const food_exp = expenseData.food_exp + inputFood;
      const healthcare_exp = expenseData.healthcare_exp + inputHealth;
      const shopping_exp = expenseData.shopping_exp + inputShop;
      const transport_exp = expenseData.transport_exp + inputTransport;
      const total_exp = entertainment_exp + fixed_exp + food_exp + healthcare_exp + shopping_exp + transport_exp;

      const update = await databaseService.update_actual_exp({user_id, actual_exp_id, fixed_exp, food_exp, transport_exp, entertainment_exp, shopping_exp, healthcare_exp, total_exp});
      if(update) console.log("success: ", update);
    }

    navigate('/');
  }


  return (
    <div className="flex items-center bg-gray-100 justify-center p-8">
      <div
        className={`mx-auto w-full max-w-3xl bg-gray-100 rounded-xl p-10 border-2 border-gray-300`}
      >
        <h2 className="text-gray-700 text-4xl mb-4">Enter expenses in each categories:</h2>
        {/* if any error then show error */}
        {error && <P className="text-red-600 mt-8 text-center">{error}</P>}

        <form onSubmit={handleSubmit(addExpense)} className="w-full">
          <div className="space-y-5">
            <Input
              label="1. Fixed Expenses(Rent + Insurance + Education + Loan)* "
              placeHolder="Enter in INR..."
              {...register("fixedExp", {
                required: true,
              })}
            />
            <Input
              label="2. Food* "
              placeHolder="Enter in INR..."
              {...register("foodExp", {
                required: true
              })}
            />
            <Input
              label="3. Transportation* "
              placeHolder="Enter in INR..."
              {...register("transportation", {
                required: true,
              })}
            />
            <Input
              label="4. Healthcare* "
              placeHolder="Enter in INR..."
              {...register("healthcare", {
                required: true,
              })}
            />
            <Input
              label="5. Entertainment* "
              placeHolder="Enter in INR..."
              {...register("entertainment", {
                required: true,
              })}
            />
            <Input
              label="6. Shopping* "
              placeHolder="Enter in INR..."
              {...register("shopping", {
                required: true,
              })}
            />
            <Button
              children="Add Expenses"
              type="submit"
              className="w-full text-white bg-gray-700"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExpense;
