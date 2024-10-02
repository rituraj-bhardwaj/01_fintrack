import React, { useState } from "react";
import databaseService from "../appwrite/databaseService";
import { Input, Button } from "../Components/component";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

const AddBudget = () => {
  const [error, setError] = useState("");
  const {register, handleSubmit} = useForm();


  return (
    <div className="flex items-center justify-center p-16">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        {/* if any error then show error */}
        {error && <P className="text-red-600 mt-8 text-center">{error}</P>}

        <form onSubmit={handleSubmit()}>
          <div className="space-y-5">
            <Input
              label="Your Monthly Income: "
              placeHolder="Enter your monthly income(INR)..."
              {...register("monthlyIncome", {
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
