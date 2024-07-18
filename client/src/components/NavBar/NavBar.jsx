import React from 'react'
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Avatar, Dropdown } from 'flowbite-react';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const path = useLocation().pathname;
    const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="w-5/6 mx-auto flex gap-5 text-black max-md:flex-wrap  py-12 px-6">
      <NavLink to="/" className="flex-auto my-auto text-3xl font-black">HIRAV</NavLink>
      <div className="flex gap-5 text-2xl">
        <div className="flex flex-auto gap-8 justify-between pr-5 my-auto font-medium ">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-emerald-600" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-emerald-600 lg:p-0`
            }
          >About</NavLink>
            <NavLink to="/services"
             className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-emerald-600" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-emerald-600 lg:p-0`
            }>Services</NavLink>
            <NavLink to="/marketplace" 
             className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-emerald-600" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-emerald-600 lg:p-0`
            }>MarketPlace</NavLink>
            <NavLink to="/news" 
             className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-emerald-600" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-emerald-600 lg:p-0`
            }>News</NavLink>
            <NavLink to="/invest"
             className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-emerald-600" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-emerald-600 lg:p-0`
            }>Investment Planner</NavLink>
        </div>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <img alt='user' src={currentUser.profilePicture}  className='w-10 h-10 rounded-full'/>
            }
            className='p-1'
          >
            <Dropdown.Header>
              <span className='block text-sm'>{currentUser.fname}</span>
              <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
            </Dropdown.Header>
            <hr />
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <hr />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/signin" className="justify-center px-5 py-1.5 font-black rounded-3xl border-black border-solid border-[3px]">
          Sign in
        </Link>
        )}
       
      </div>
    </div>
  );
}

export default NavBar



