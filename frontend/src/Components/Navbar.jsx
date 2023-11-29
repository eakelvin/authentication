import React from 'react';
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="bg-black text-white border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">EA Auth!</span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link to='/login' className="flex">
                <IoLogIn size={22} />
                <span className='text-sm text-white dark:text-blue-500 hover:underline'>Login</span>
            </Link>
            <Link to='/signup' className="flex flex-row">
                <IoLogOut size={22} />
                <span className='text-sm text-white dark:text-blue-500 hover:underline'>Sign Up</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
