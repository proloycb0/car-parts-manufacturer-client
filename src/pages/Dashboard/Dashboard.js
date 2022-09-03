import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="drawer drawer-mobile px-12">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <h1 className='text-3xl ml-3 text-primary'>Welcome to your Dashboard</h1>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 mr-5 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Profile</Link></li>
                    <li><Link to="orders">My Orders</Link></li>
                    <li><Link to="review">Add a Review</Link></li>

                    <li><Link to="manageOrder">Manage all Orders</Link></li>
                    <li><Link to="product">Add a Product</Link></li>
                    <li><Link to="makeAdmin">Make Admin</Link></li>
                    <li><Link to="manageProduct">Manage Product</Link></li>


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;