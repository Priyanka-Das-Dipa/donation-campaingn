import React from 'react';
import Home from '../pages/Home/Home';
import Donation from '../pages/Donation/Donation';
import Statistics from '../pages/Statistics/Statistics';
import Navbar from '../components/Header/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='max-w-screen-xl mx-auto py-4'>
            <Navbar></Navbar>
            <Outlet></Outlet>
           
        </div>
    );
};

export default MainLayout;