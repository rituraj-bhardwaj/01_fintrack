import React, { useState, useEffect } from "react";
import databaseService from "../appwrite/databaseService";
import { Input, Button } from "../Components/component";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";


const AddBudget = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const {register, handleSubmit} = useForm();
  // useSelector((state) => {setUserData(state.auth.userData)});
  var user_id;
  const userData = location.state?.userData || useSelector((state) => state.auth.userData);;
  if(userData) user_id = userData.$id;
  console.log(userData, user_id);

  const makeBudget = async (budget) => {

    console.log(userData);
    console.log(user_id);
    
    setError("");

    // data got from form....
    const inputIncome = parseInt(budget.monthlyIncome);
    const inputEntertain = parseInt(budget.entertainment);
    const inputFixed = parseInt(budget.fixedExp);
    const inputFood  = parseInt(budget.foodExp);
    const inputHealth = parseInt(budget.healthcare);
    const inputShop = parseInt(budget.shopping);
    const inputTransport = parseInt(budget.transportation);

    const collectionData = await databaseService.get_collections_id(user_id);
    if(collectionData){

      const income_id = collectionData.income_id, category_id = collectionData.planned_category_exp_id;

      const incomeData = await databaseService.getIncome(income_id);
      if(incomeData) console.log("income data: ", incomeData);

      const monthly_income = inputIncome;
      // const monthly_income = inputIncome + incomeData.monthly_income;

      const categoryData = await databaseService.get_planned_categoryWise_exp(category_id);
      if(categoryData) console.log("category data: ", categoryData);
      // const entertainment_exp = categoryData.entertainment_exp + inputEntertain;
      // const fixed_exp = categoryData.fixed_exp + inputFixed;
      // const food_exp = categoryData.food_exp + inputFood;
      // const healthcare_exp = categoryData.healthcare_exp + inputHealth;
      // const shopping_exp = categoryData.shopping_exp + inputShop;
      // const transport_exp = categoryData.transport_exp + inputTransport;
      // const total_exp = entertainment_exp + fixed_exp + food_exp + healthcare_exp + shopping_exp + transport_exp;
      const entertainment_exp = inputEntertain;
      const fixed_exp = inputFixed;
      const food_exp = inputFood;
      const healthcare_exp = inputHealth;
      const shopping_exp = inputShop;
      const transport_exp = inputTransport;
      const total_exp = entertainment_exp + fixed_exp + food_exp + healthcare_exp + shopping_exp + transport_exp;
      // console.log(
      //   categoryData.entertainment_exp,
      //   categoryData.fixed_exp,
      //   categoryData.food_exp,
      //   categoryData.healthcare_exp,
      //   categoryData.shopping_exp,
      //   categoryData.transport_exp,
      //   categoryData.total_exp
      // );

      // console.log("updated: ", { user_id, income_id, monthly_income});
      // console.log("udated: ", {user_id, category_id, tFixed, tFood, tTransport, tEntertain, tShop, tHealth, tTotal});
      const update1 = await databaseService.updateIncome({ user_id, income_id, monthly_income});
      if(update1) console.log("success: ", update1);

      const update2 = await databaseService.update_planned_categoryWise_exp({user_id, category_id, fixed_exp, food_exp, transport_exp, entertainment_exp, shopping_exp, healthcare_exp, total_exp});
      if(update2) console.log("succes: ", update2);

      navigate('/');
    }
  }


  return (
    <div className="flex items-center justify-center p-16">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        {/* if any error then show error */}
        {error && <P className="text-red-600 mt-8 text-center">{error}</P>}

        <form onSubmit={handleSubmit(makeBudget)}>
          <div className="space-y-5">
            <Input
              label="Your Monthly Income* "
              placeHolder="Enter your monthly income(INR)..."
              {...register("monthlyIncome", {
                required: true,
              })}
            />
            <h2 className="text-gray-700 text-2xl mb-4">Enter your monthly planned expenses in each categories:</h2>
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
              children="Add Budget"
              type="submit"
              className="w-full text-white bg-gray-700"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBudget;
