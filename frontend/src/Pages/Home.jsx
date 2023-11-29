import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className="bg-slate-300 dark:bg-gray-900 p-5 mt-10">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                            <span className="font-extrabold">EA's Authentication w MERN Stack!</span>
                        </h2>
                        <p className="mb-4 font-medium">
                            User Authentication has been giving me a hard time ever since I started creating full-stack projects so this is a boilerplate for my Authentication.
                        </p>
                        <p className='mb-4 font-light'>
                            Although, there are platforms that provide secure user authentication solutions, I decided to get familiar with the MERN Stack Authentication. This approach stores a JWT in an HTTP-Only cookie and also uses Redux Toolkit and Tailwind CSS
                        </p>

                        <div className='flex justify-center'>
                            <Link to='/login'>
                                <button 
                                    type="button" 
                                    className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                        Sign In
                                </button>
                            </Link>
                            <Link to='/signup'>
                                <button 
                                    type="button" 
                                    className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                        Sign Up
                                </button>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home