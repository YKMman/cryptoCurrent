import { Link, NavLink, useOutlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"


import { userAsyncSlice, userStore } from "../store/user/userSlice"

import { Footer } from "../widgets/footer/Footer"
import { Header } from "../widgets/header/Header"
import { UserSection } from "../widgets/user/UserSection"


import logo from '../../public/profile/profile.png'
import update from '../../public/profile/Refresh.png'
import notifications from '../../public/profile/notifications.png'

import deposit from '../../public/profile/Deposit.png'
import withdraw from '../../public/profile/Withdraw.png'
import invest from '../../public/profile/Invest.png'
import swap from '../../public/profile/Swap.png'
import history from '../../public/profile/History.png'
import transfer from '../../public/profile/Transfer.png'
import refresh from '../../public/profile/Refresh.png'



export const ProfilePage = () => {
    const [select, setSelect] = useState(false)
    const [notification, setNotification] = useState(false)
    const outlet = useOutlet()
    const userInfo = useSelector(userStore)
    const dispatch = useDispatch()

    console.log(userInfo)

    const handleRefresh = () => {
        dispatch(userAsyncSlice())
    }

    const handleSelect = () => {
        if (notification) {
            setNotification(false)
        }
        setSelect((prev) => !prev)
    }

    const handleNotification = () => {
        if (select) {
            setSelect(false)
        }
        setNotification((prev) => !prev)
    }

    const handleLogOut = () => {
        var cookies = document.cookie.split(/;/);
        for (var i = 0, len = cookies.length; i < len; i++) {
            var cookie = cookies[i].split(/=/);
            document.cookie = cookie[0] + "=;max-age=-1";
        }
    }

    return (
        <div className="min-h-full flex flex-col">
            <Header/>
                <main className="flex-auto">
                        <div className="bg-[#031815] border-b-[1px] border-header">
                        <div className="container relative py-[10px] flex items-center justify-between gap-[20px] xs:flex-col">
                            <ul className="flex items-center flex-wrap gap-[20px] md:gap-[10px] text-text pl-[20px] border-l-[1px] border-grey xs:border-l-0 xs:border-b-[1px] xs:pl-0 xs:pb-[20px]">
                                <li>
                                    <NavLink to='/profile/deposit' className={({ isActive }) => (isActive ? "bg-withdrawBtn flex items-center py-[2px] px-[4px] rounded-[3px] border-[0.2px] border-myAltCoins gap-[6px] duration-300 hover:translate-x-[5px] hover:text-white" : "py-[2px] px-[4px] rounded-[3px] border-[0.2px] border-hidden flex items-center gap-[6px] duration-300 hover:translate-x-[5px] hover:text-white")} >
                                        <img src={deposit} alt='deposit'/>
                                        <span className="text-[#9197A4]">
                                            Deposit
                                        </span>
                                    </NavLink>
                                </li>
                                <li>
                                <NavLink to='/profile/withdraw' className={({ isActive }) => (isActive ? "bg-withdrawBtn flex items-center py-[2px] px-[4px] rounded-[3px] border-[0.2px] border-myAltCoins gap-[6px] duration-300 hover:translate-x-[5px] hover:text-white" : "py-[2px] px-[4px] rounded-[3px] border-[0.2px] border-hidden flex items-center gap-[6px] duration-300 hover:translate-x-[5px] hover:text-white")} >
                                        <img src={withdraw} alt='withdraw'/>
                                        <span>
                                        Withdraw
                                        </span>
                                    </NavLink>
                                </li>
                                <li>
                                <NavLink to='/profile/invest' className={({ isActive }) => (isActive ? "bg-withdrawBtn flex items-center py-[2px] px-[4px] rounded-[3px] border-[0.2px] border-myAltCoins gap-[6px] duration-300 hover:translate-x-[5px] hover:text-white" : "py-[2px] px-[4px] rounded-[3px] border-[0.2px] border-hidden flex items-center gap-[6px] duration-300 hover:translate-x-[5px] hover:text-white")} >
                                    <img src={invest} alt='invest'/>
                                        <span>
                                        Invest
                                        </span>
                                    </NavLink>
                                </li>
                                <li>
                                <NavLink to='/profile/swap' className={({ isActive }) => (isActive ? "bg-withdrawBtn flex items-center py-[2px] px-[4px] rounded-[3px] border-[0.2px] border-myAltCoins gap-[6px] duration-300 hover:translate-x-[5px] hover:text-white" : "py-[2px] px-[4px] rounded-[3px] border-[0.2px] border-hidden flex items-center gap-[6px] duration-300 hover:translate-x-[5px] hover:text-white")} >
                                    <img src={swap} alt='swap'/>
                                        <span>
                                        Swap
                                        </span>
                                    </NavLink>
                                </li>
                                <li>
                                <NavLink to='/profile/history' className={({ isActive }) => (isActive ? "bg-withdrawBtn flex items-center py-[2px] px-[4px] rounded-[3px] border-[0.2px] border-myAltCoins gap-[6px] duration-300 hover:translate-x-[5px] hover:text-white" : "py-[2px] px-[4px] rounded-[3px] border-[0.2px] border-hidden flex items-center gap-[6px] duration-300 hover:translate-x-[5px] hover:text-white")} >
                                    <img src={history} alt='history'/>
                                        <span>
                                        History
                                        </span>
                                    </NavLink>
                                </li>
                                <li>
                                <NavLink to='/profile/transfer' className={({ isActive }) => (isActive ? "bg-withdrawBtn flex items-center py-[2px] px-[4px] rounded-[3px] border-[0.2px] border-myAltCoins gap-[6px] duration-300 hover:translate-x-[5px] hover:text-white" : "py-[2px] px-[4px] rounded-[3px] border-[0.2px] border-hidden flex items-center gap-[6px] duration-300 hover:translate-x-[5px] hover:text-white")} >
                                    <img src={transfer} alt='transfer'/>
                                        <span>
                                        Transfer
                                        </span>
                                    </NavLink>
                                </li>
                                <li onClick={handleRefresh} className="flex items-center gap-[6px] duration-300 hover:translate-x-[5px] hover:text-white cursor-pointer">
                                    <img src={refresh} alt='refresh'/>
                                        <span>
                                        Refresh
                                        </span>
                                </li>
                            </ul>
                            <div className="flex items-center gap-[20px] xs:items-end xs:ml-auto xs:w-full xs:justify-between">
                                <div className="flex flex-col">
                                    <span className="text-text">Balance:</span>
                                    <div className="flex items-center gap-[5px]">
                                        <span className="text-white">
                                            {userInfo.Wallet.USD}$
                                        </span>
                                        <img  className="cursor-pointer" src={update} alt='update' onClick={handleRefresh}/>
                                    </div>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="cur">
                                        <img className="max-w-[35px] cursor-pointer duration-200 hover:scale-110" onClick={handleNotification} src={notifications} alt='notifications'/>
                                        {
                                        notification &&
                                            <div className="absolute top-[100%] right-[0] text-white bg-[#031815] border-[1px] border-header z-50">
                                            <div className="flex items-center gap-[10px] py-[10px] px-[15px] border-b-[1px] border-header cursor-pointer duration-300 hover:bg-[#053225]">
                                                <img className="max-w-[45px] mx-auto" src={notifications} alt='notifications'/>
                                            </div>
                                            <div className="p-[30px] text-center text-white">
                                                <span>Notification</span>
                                            </div>
                                        </div>
                                        }
                                    </div>
                                    <div onClick={handleSelect}>
                                        <img className="max-w-[35px] cursor-pointer duration-200 hover:scale-110" src={logo} alt='profile' />
                                        {
                                            select &&
                                            <div className="absolute top-[100%] right-[0] text-white bg-[#031815] border-[1px] border-header z-50">
                                                <div className="flex items-center gap-[10px] py-[10px] px-[15px] border-b-[1px] border-header cursor-pointer duration-300 hover:bg-[#053225]">
                                                    <img className="max-w-[45px]" src={logo} alt='profile'/>
                                                    <div className="flex flex-col text-white">
                                                        <span className="text-[16px]">{userInfo.Login}</span>
                                                        <span className="text-[12px]">{userInfo.Email}</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col">
                                                    <div className="cursor-pointer duration-500 py-[5px] text-center px-[45px] hover:bg-[#053225] text-[16px]">
                                                        Wallet
                                                    </div>
                                                    <Link to='settings' className="cursor-pointer duration-500 py-[5px] text-center px-[45px] hover:bg-[#053225] text-[16px]">
                                                        Settings
                                                    </Link>
                                                    <div onClick={handleLogOut} className="cursor-pointer duration-500 py-[5px] text-center px-[45px] hover:bg-[#053225] text-[16px]">
                                                        Log Out
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        outlet ?
                        outlet
                                :
                        <UserSection/>
                    }
                </main>
            <Footer/>
        </div>
    )
}


