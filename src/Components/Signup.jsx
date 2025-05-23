import React, { useState } from "react";
import { Input, Button } from "./component";
import { useForm } from "react-hook-form";
import authService from "../appwrite/authService";
import { login as reduxLogin } from "../redux/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import databaseService from "../appwrite/databaseService";
import { makeCollection } from "../redux/collectionSlice";
import { Loader } from "./component";

const Signup = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signup = async (userInfo) => {
        setError("");
        // setLoading(true);

        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(userInfo.email)) {
            setError("Please provide a valid email.");
            // setLoading(false);
            return;
        } else if (userInfo.password.length < 8) {
            setError("Password should be at least 8 characters long.");
            // setLoading(false);
            return;
        }

        try {
            setLoading(true);
            // first check does user already exist.
            const response = await authService.createAccount(userInfo);
            console.log(response);
            if (response) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(reduxLogin(userData));

                const user_id = userData.$id;
                const name = userData.name;
                const email = userData.email;
                const monthly_income = 0;
                const fixed_exp = 0;
                const food_exp = 0,
                    transport_exp = 0,
                    entertainment_exp = 0,
                    shopping_exp = 0,
                    healthcare_exp = 0,
                    total_exp = 0;

                const res1 = await databaseService.createUserInfo({
                    user_id,
                    name,
                    email,
                });

                const res2 = await databaseService.createIncome({
                    user_id,
                    monthly_income,
                });

                const res3 = await databaseService.create_actual_exp({
                    user_id,
                    fixed_exp,
                    food_exp,
                    transport_exp,
                    entertainment_exp,
                    shopping_exp,
                    healthcare_exp,
                    total_exp,
                });

                const res4 = await databaseService.plan_categoryWise_exp({
                    user_id,
                    fixed_exp,
                    food_exp,
                    transport_exp,
                    entertainment_exp,
                    shopping_exp,
                    healthcare_exp,
                    total_exp,
                });

                const actual_exp_id = res3.actual_exp_id,
                    income_id = res2.income_id,
                    planned_category_exp_id = res4.category_id;
                const res5 = await databaseService.create_collections_id({
                    user_id,
                    actual_exp_id,
                    income_id,
                    planned_category_exp_id,
                });
                if (res5) dispatch(makeCollection(res5));

                navigate("/plan-budget", { state: { userData } });
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center">
            {loading && <Loader />}
            <div
                className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
            >
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        {/* <Logo width="100%" /> */}
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">
                    Sign up to create account
                </h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    {/* link to login if already logged in */}
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {/* if any error then show error */}
                {error && <p className="text-red-600 m-4 text-center">{error}</p>}

                <form onSubmit={handleSubmit(signup)} className="mt-8">
                    <div className="space-y-5">
                        <Input
                            label="Full Name: "
                            placeHolder="Enter your full name..."
                            {...register("fullName", {
                                required: true,
                            })}
                        />
                        <Input
                            label="Email: "
                            type="email"
                            placeHolder="Enter email address..."
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                },
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeHolder="Enter password..."
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button
                            children="create account"
                            type="submit"
                            className="w-full"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
