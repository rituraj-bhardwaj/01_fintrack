import React, { useState } from 'react';
import authService from '../appwrite/authService';
import { login as reduxLogin } from '../redux/authSlice';
import { useDispatch } from 'react-redux';
import { Button, Input } from './component';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';



const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const login = async (userInfo) => {
    setError("");
    try {
      const session = await authService.login(userInfo);
      if (session) {
        const userData = await authService.getCurrentUser();
        console.log('userData: ', userData);
        if (userData) {
          dispatch(reduxLogin(userData));
        }
      }
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className='flex items-center justify-center w-full'>
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        {/* logo */}
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            {/* <Logo width="100%" /> */}
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>

        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          {/* link to forward to signup page */}
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {/* if any error occured then to show error */}
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}


        <form onSubmit={handleSubmit(login)} className='mt-8'>
          <div className='space-y-5'>
            <Input
              label="Email: "
              type="email"
              placeHolder="Enter your eamil address"
              {...register('email', {
                required: true,
                validate: {
                  matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                }
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeHolder="Enter your password"
              {...register('password', {
                required: true
              })}
            />
            <Button
              children="Log in"
              type='submit'
              className='w-full'
            />
          </div>

        </form>

      </div>
    </div>
  );
};

export default Login;