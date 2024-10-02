import React, { useState } from "react";
import databaseService from "../appwrite/databaseService";
import { Input, Button } from "../Components/component";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

const AddExpense = () => {
  const [error, setError] = useState("");
  const {register, handleSubmit} = useForm();


  return (
    <div className="flex items-center justify-center p-8">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <h2 className="text-gray-700 text-2xl mb-4">Enter maximum target expenses in each categories:</h2>
        {/* if any error then show error */}
        {error && <P className="text-red-600 mt-8 text-center">{error}</P>}

        <form onSubmit={handleSubmit()}>
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
