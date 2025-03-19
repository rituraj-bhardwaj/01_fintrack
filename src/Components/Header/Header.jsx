import React, { useId } from 'react';
import { Container } from '../component';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authService from '../../appwrite/authService';
import { useNavigate } from 'react-router-dom';
import { LogoutBtn } from '../component';

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);

  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      url: '/',
      active: true
    },
    // {
    //   name: 'About',
    //   url: '/about',
    //   active: false
    // },
    {
      name: "Login",
      url: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      url: "/signup",
      active: !authStatus,
    },
    {
      name: "Add Expense",
      url: "/add-expense",
      active: authStatus,
    },
    
    {
      name: "Update Budget",
      url: "/plan-budget",
      active: authStatus,
    },
  ]
  return (
    <header className='bg-slate-300 w-full flex justify-center text-lg text-gray-800 font-bold p-4 border border-b-2 border-r-0 border-t-0 border-gray-400'>
      <div className= 'w-3/4'>
        <nav className='flex'>
          <div className='mr-6'>
            <h1 className='mx-2 text-3xl text-purple-700'>FinTrack</h1>
            {/* <Link to='/' > */}
              {/* <Logo width='70px' /> */}
            {/* </Link> */}
          </div>

          <ul className='flex ml-auto'>
            {navItems.map(item =>
              item.active ? (<li key={item.name}>
                <button
                  className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  onClick={() => navigate(item.url)}
                >{item.name}</button>
              </li>) : null
            )}

            {authStatus && (<li><LogoutBtn /></li>)}
          </ul>


        </nav>
      </div>

    </header>

  );
};

export default Header;