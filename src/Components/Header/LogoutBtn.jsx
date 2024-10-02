import React from 'react';
import authService from '../../appwrite/authService';
import { logout } from '../../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';


const logoutBtn = () => {
    const userData = useSelector(state => state.auth.userData)
    const dispatch = useDispatch();

    async function clickHandler() {
        // console.log(userData);
        authService.logout()
        .then(() => dispatch(logout())) // this will delete all sessions across all devices... improve it
    }
    return (
        <button
            className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={clickHandler}
        >logout</button>
    );
};

export default logoutBtn;