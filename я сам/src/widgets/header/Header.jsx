import { useState } from "react"
import { Link } from "react-router-dom"

import logo from '../../../public/logo.png'

import { IsAuthorized } from "./model/IsAuthorized"
import { HeaderFixed } from "./lib/HeaderFixed"



export const Header = () => {
    const [burger, setBurger] = useState(false)
    const isAuthorized = IsAuthorized()
    const fixed = HeaderFixed().scroll



    return (
        <header className={`py-[15px] ${fixed ? "fixed" : "sticky"}  left-0 right-0 top-0 bg-header border-b-[1px] z-50 border-header`}>
            <div className="container flex items-center justify-between gap-[20px]">
                <Link to='/' className="flex items-center gap-[5px]">
                    <img className="max-w-[65px]" src={logo} alt='logo'/>
                    <h4 className="text-white font-bold text-[26px]">MyAltCoins</h4>
                </Link>
                <nav className={`${burger ? "md:translate-y-[0] md:opacity-90 md:bg-black duration-500" : "ml-auto md:translate-y-[1200px] md:opacity-0 md:duration-500"} md:fixed md:left-0 md:right-0 md:top-0 md:bottom-0 `}>
                    <ul className={`flex flex-row md:flex-col md:gap-y-[30px] text-white md:h-full md:justify-center md:items-center ${burger ? "md:opacity-100" : "md:opacity-0"} gap-x-[15px] md:gap-x-[25px] lg:text-[12px]`}>
                        <li>
                            <Link to='/' className="duration-500 hover:text-green2">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/trading' className="duration-500 hover:text-green2">
                                Trading
                            </Link>
                        </li>
                        <li>
                            <Link to='/terms' className="duration-500 hover:text-green2">
                                Terms Of Service
                            </Link>
                        </li>
                        <li>
                            <Link to='/support' className="duration-500 hover:text-green2">
                                Support
                            </Link>
                        </li>
                        <li>
                            <Link to='/p2p' className="duration-500 hover:text-green2 relative">
                                P2P trading
                                <span className="absolute bg-adminBtnRemove text-[12px] px-[6px] flex items-center justify-center text-center top-[-20px] right-[-10px] rounded-[4px] text-[#c9dbd8] font-bold">HOT</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className="duration-500 hover:text-green2 relative">
                                NFT Market
                                <span className="absolute bg-adminBtn text-[12px] px-[6px] flex items-center justify-center text-center top-[-20px] right-[-25px] rounded-[4px] text-[#c9dbd8] font-bold">SOON</span>
                            </Link>
                        </li>
                        {
                            isAuthorized ? 
                            <>
                                <li className="minxs:hidden">
                                    <Link to='/profile' className="duration-500 hover:text-green2">
                                        Profile
                                    </Link>
                                </li>
                            </>
                                    : 
                            <>
                                <li className="minxs:hidden">
                                    <Link to='/signin' className="duration-500 hover:text-green2">
                                        Sign In
                                    </Link>
                                </li>
                                <li className="minxs:hidden">
                                    <Link to ='/singup' className="duration-500 hover:text-green2">
                                        Sign Up
                                    </Link> 
                                </li>
                            </>
                        }
                    </ul>
                </nav>  
                {
                    isAuthorized ? 
                    <Link to='/profile' className="xs:hidden ml-auto text-white bg-supportBorder border-[1px] border-black py-[10px] px-[10px] max-w-[100px] w-full text-center rounded-[8px] duration-500 hover:text-black">
                        Profile
                    </Link>
                                :
                    <div className="flex items-center gap-[10px] md:ml-auto xs:hidden ml-auto">
                        <Link to='/signin' className="text-white duration-500 hover:text-green2">
                            Sign In
                        </Link>

                        <Link to='/signup' className="bg-green py-[10px] px-[16px] rounded-[8px] text-white duration-500 hover:text-green2">
                            Sign Up
                        </Link>
                    </div>
                }
                <div onClick={() => setBurger((prev) => !prev)}
                className="relative hidden items-center w-[30px] h-[23px] cursor-pointer z-50 md:inline-flex">
                    <span className={`inline-block h-[1px] bg-white duration-500
                    after:absolute after:inline-block after:w-full after:h-[1px] after:bg-white after:top-0 after:duration-500
                    before:absolute before:inline-block before:w-full before:h-[1px] before:bg-white before:bottom-0 before:duration-500
                    ${burger ? "w-0 after:rotate-[45deg] after:top-[50%] before:bottom-[50%] before:rotate-[-45deg]" : "w-full"}
                    `}></span>
                </div>
            </div>
        </header>  
    )
}


