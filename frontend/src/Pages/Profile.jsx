import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdLogOut } from "react-icons/io";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import LoadingSpinner from '../Components/Spinner';
import { setCredentials } from '../slices/authSlice';
import { useUpdateUserMutation } from '../slices/usersApiSlice';

const Profile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('')
    const [gender, setGender] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')

    const { userInfo } = useSelector((state) => state.auth)
    const [updateProfile, {isLoading}] = useUpdateUserMutation()

    // useEffect(() => {
    //     setName(userInfo.name)
    //     setEmail(userInfo.email)
    //     setPhone(userInfo.phone)
    //     setCountry(userInfo.country)
    //     setGender(userInfo.gender)
    //     setDateOfBirth(userInfo.DateOfBirth)
    // }, [userInfo.setName, userInfo.setEmail, userInfo.setPhone, userInfo.setCountry, userInfo.setGender, userInfo.setDateOfBirth])

    useEffect(() => {
        console.log(userInfo);
        if (userInfo) {
          setName(userInfo.name);
          setEmail(userInfo.email);
          setPhone(userInfo.phone);
          setCountry(userInfo.country);
          setGender(userInfo.gender);
          setDateOfBirth(userInfo.dateOfBirth);
        }
      }, [userInfo]);
      

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            toast.error('Passwords do not match!')
        } else {
            try {
                const res = await updateProfile({
                    _id: userInfo._id,
                    name, email, password, phone, country, gender, dateOfBirth
                }).unwrap()
                dispatch(setCredentials({ ...res }))
                toast.success("Profile Updated")
            } catch (error) {
                toast.error(error?.data?.message || error.error)
            }
        }
    }

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900 mt-10">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Update User Profile
                            </h1>
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Your name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Your Gender
                                    </label>
                                    <input
                                        type="gender"
                                        name="gender"
                                        id="gender"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Gender"
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Your Phone Number
                                    </label>
                                    <input
                                        type="number"
                                        name="phone"
                                        id="phone"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Phone Number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Your Date of Birth
                                    </label>
                                    <input
                                        type="date"
                                        name="dateOfBirth"
                                        id="dateOfBirth"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={dateOfBirth}
                                        onChange={(e) => setDateOfBirth(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Your Country
                                    </label>
                                    <input
                                        type="country"
                                        name="country"
                                        id="country"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Country"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        // required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Confirm password
                                    </label>
                                    <input
                                        type="password"
                                        name="confirm-password"
                                        id="confirm-password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        // required
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>

                                { isLoading && <LoadingSpinner />}

                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Update User
                                </button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Profile