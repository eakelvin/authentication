import React, { useState } from 'react';
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { clearCredentials } from '../slices/authSlice';

const Navbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userInfo } = useSelector((state) => state.auth)
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [logoutApiCall] = useLogoutMutation()

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    try {
        await logoutApiCall().unwrap()
        dispatch(clearCredentials())
        navigate('/')
    } catch (error) {
        console.log(error);
    }

  }

  return (
    <>
      <nav className="bg-black text-white border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">EA Auth!</span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            { userInfo ? (
                <>
                <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                    <button
                        id="dropdownAvatarNameButton"
                        data-dropdown-toggle="dropdownAvatarName"
                        className="p-3 flex items-center text-sm pe-1 font-medium text-white rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
                        type="button"
                        onClick={toggleDropdown}
                    >
                        {/* <img className="w-8 h-8 me-2 rounded-full" src="" alt="user photo" /> */}
                        {userInfo.name}
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>

                    {/* Dropdown menu */}
                    {isDropdownOpen && (
                        <div id="dropdownAvatarName" className="bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownAvatarNameButton">
                            <li>
                                <Link to='/profile' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    Profile
                                </Link>
                            </li>
                        </ul>
                        <div className="py-2">
                            <div onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer">
                                Logout
                            </div>
                        </div>
                        </div>
                    )}
                    </div>
                </>
            ) : (
                <>
                <Link to='/login' className="flex">
                    <IoLogIn size={22} />
                    <span className='text-sm text-white dark:text-blue-500 hover:underline'>Login</span>
                </Link>
                <Link to='/signup' className="flex flex-row">
                    <IoLogOut size={22} />
                    <span className='text-sm text-white dark:text-blue-500 hover:underline'>Sign Up</span>
                </Link>
                </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
