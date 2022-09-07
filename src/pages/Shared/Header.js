import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allProduct">All Product</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
    </>
    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">CarnoCar</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

            <div className="navbar-end pr-2">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <div class="dropdown dropdown-end">
                    <label tabindex="1" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src={user ? user?.photoURL : 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg'} alt=''/>
                        </div>
                    </label>
                    <ul tabindex="1" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>{user ? <>
                            <h5 className='text-primary'>Name: {user?.displayName}</h5>
                            <h5 className='text-primary'>Email: {user?.email}</h5>
                            <button onClick={() => signOut(auth)} className="btn btn-ghost">Sign Out</button>
                        </> : <Link to="/login">Login</Link>}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;