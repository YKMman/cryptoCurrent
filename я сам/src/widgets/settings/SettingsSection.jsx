import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { userAsyncSlice, userStore } from "../../store/user/userSlice"


import logo from '../../../public/profile/profile.png'


export const SettingsSection = () => {
    const userInfo = useSelector(userStore)

    return (
        <section className="bg-bgProfile relative h-full bg-no-repeat bg-contain bg-center my-[60px]">
            <div className="container">
                <div className="flex flex-col text-white p-[20px] bg-select rounded-[8px] gap-[10px] mb-[30px]">
                    <h2 className="text-[32px] font-medium xs:text-[26px]">Account Verification</h2>
                    <p className="text-[16px] xs:text-[14px]">To Increase user limits, you need to pass the verification of a intermediate user or a Advanced user, you must provide personal
                    information, a photo of an identity document, and a photo of your face.</p>
                    <Link to='/profile/verification' className="bg-green text-center rounded-[8px] py-[7px] px-[21px] w-fit text-[16px] inline-block duration-500 hover:shadow-xl">
                        Verification page
                    </Link>
                </div>
                <div className="bg-select py-[20px] px-[60px] rounded-[8px] flex items-center justify-between mb-[30px] md:flex-col sm:px-[20px]">
                    <div className="flex flex-col max-w-[50%] w-full pr-[15px] md:max-w-full">
                        <div className="mb-[20px]">
                            <label className="flex flex-col gap-[10px] text-white">
                                <span className="text-[22px]">Your Username</span>
                                <input type='text' value={userInfo.Login} className="p-[10px] bg-input outline-none" disabled/>
                            </label>
                        </div>
                        <div className="flex items-center gap-[10px] mb-[20px] ">
                            <img className="max-w-[40px]" src={logo} alt='logo'/>
                            <div className="flex flex-col text-white">
                                <span>Profile Avatar</span>
                                <span>Max file size is 1mb</span>
                            </div>
                        </div>
                        <div className="mb-[20px]">
                            <label>
                                <input type="file" className="text-white"/>
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-[50%] w-full pl-[15px] border-l-[1px] border-green md:max-w-full md:border-none md:pl-0">
                        <label className="flex flex-col gap-[10px] mb-[20px] text-white">
                            <span>Phone Number</span>
                            <input type='number' className="p-[5px] bg-input" />
                        </label>

                        <label className="flex flex-col gap-[10px] mb-[20px] text-white">
                            <span>Old Password</span>
                            <input type='password' className="p-[5px] bg-input"/>
                        </label>

                        <label className="flex flex-col gap-[10px] mb-[20px] text-white">
                            <span>News Password</span>
                            <input type='password' className="p-[5px] bg-input"/>
                        </label>
                        <button className="text-white py-[10px] px-[16px] bg-select text-center w-full max-w-[155px] duration-500 hover:shadow-xl">Save</button>
                    </div>
                </div>
                <div className="bg-select p-[20px] rounded-[8px]">
                    <h2 className="text-white text-[32px] mb-[40px] pb-[20px] border-b-[1px] border-green">Personal Information</h2>
                    <div className="grid grid-cols-2 gap-[30px] mb-[30px] sm:grid-cols-1">
                        <div className="flex flex-col gap-[30px]">
                            <label className="flex flex-col gap-[10px] text-white">
                                <span className="text-[22px] md:text-[16px]">Your Username</span>
                                <input type='text' value={userInfo.Login} className="p-[10px] bg-input outline-none" disabled/>
                            </label>
                            <label className="flex flex-col gap-[10px] text-white">
                                <span className="text-[22px] md:text-[16px]">Date of birth</span>
                                <input type='date' className="p-[10px] bg-input outline-none"/>
                            </label>
                            <label className="flex flex-col gap-[10px] text-white">
                                <span className="text-[22px] md:text-[16px]">Permanent Address</span>
                                <input type='text' className="p-[10px] bg-input outline-none"/>
                            </label>
                            <label className="flex flex-col gap-[10px] text-white">
                                <span className="text-[22px] md:text-[16px]">Postal Code</span>
                                <input type='text' className="p-[10px] bg-input outline-none"/>
                            </label>
                        </div>
                        <div className="flex flex-col gap-[30px]">
                            <label className="flex flex-col gap-[10px] text-white">
                                <span className="text-[22px] md:text-[16px]">Current email</span>
                                <input type='text' value={userInfo.Email} className="p-[10px] bg-input outline-none" disabled/>
                            </label>
                            <label className="flex flex-col gap-[10px] text-white">
                                <span className="text-[22px] md:text-[16px]">Present address</span>
                                <input type='text' className="p-[10px] bg-input outline-none"/>
                            </label>
                            <label className="flex flex-col gap-[10px] text-white">
                                <span className="text-[22px] md:text-[16px]">City</span>
                                <input type='text' className="p-[10px] bg-input outline-none"/>
                            </label>
                            <label className="flex flex-col gap-[10px] text-white">
                                <span className="text-[22px] md:text-[16px]">Country</span>
                                <input type='text' className="p-[10px] bg-input outline-none"/>
                            </label>
                        </div>
                    </div>
                    <button className="duration-500 hover:shadow-xl py-[5px] px-[45px] rounded-[8px] bg-deposit text-white text-[16px]">Save</button>
                </div>
            </div>
        </section>
    )
}


