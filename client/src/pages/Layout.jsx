import React, { useEffect } from 'react'
import logo from "../assets/logo.jpg"
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../store/reducerSlices/authSlice'
const Layout = () => {
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/");
    }
    return (
        <header>
            <div className='bg-black p-4 flex items-center justify-between'>
                <img src={logo} alt="site-logo" className='h-16 ' />
                {!user ? <Link to={'/login'} className="px-6 text-white py-3 text-lg font-semibold cursor-pointer bg-rose-500 hover:bg-rose-700 duration-200 rounded-lg text-center">Login</Link> :
                    (<div className='flex items-center space-x-5'>
                        <h2 className='text-white text-xl hidden md:block'>{user.name}</h2>
                        <button className="px-6 text-white py-3 text-lg font-semibold cursor-pointer bg-rose-500 hover:bg-rose-700 duration-200 rounded-lg text-center" onClick={logoutHandler}>LogOut</button>
                    </div>)}
            </div>
            <Outlet />
        </header>
    )
}

export default Layout