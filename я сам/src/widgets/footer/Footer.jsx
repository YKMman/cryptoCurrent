import { Link } from "react-router-dom"

import logo from '../../../public/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"

export const Footer = () => {
    return (
        <footer className="bg-footer py-[25px] relative z-10">
            <div className="container flex flex-col gap-[20px]">
                <div className="flex justify-between items-center gap-[20px] pb-[20px] border-b-[1px] border-gray-300 lg:flex-col xs:gap-[40px]">
                    <div className="flex w-full max-w-[625px] lg:w-fit lg:max-w-fit">
                        <div className="flex flex-col  w-full gap-[25px]">
                            <Link to='/' className="flex items-center gap-[10px] w-fit">
                                <img src={logo} alt='logo' className="max-w-[75px]"/>
                                <h5 className="text-white text-[28px]">MyAltCoins</h5>
                            </Link>
                            <p className="text-text text-[14px]">
                            Innovative cryptocurrency exchange with advanced financial services. We rely on blockchain technology to provide everything you need for wise trading and investment.
                            </p>
                            <p className="text-text text-[14px]">
                            Subscribe to receive the latest MyAltCoins news, discounts and more.
                            </p>
                            <label className="text-[14px] flex items-center relative w-fit cursor-pointer">
                                <input type='email' placeholder="Enter Your E-Mail" className="bg-transparent border-[1px] border-green px-[13px] py-[6px] rounded-[8px] outline-none text-text"/>
                                <FontAwesomeIcon icon={faArrowRightLong}  className="absolute right-[6px] text-green"/>
                            </label>
                        </div>
                    </div>
                    <div className="flex items-start justify-between w-full xs:flex-wrap gap-x-[20px] gap-y-[30px]">
                        <div className="flex flex-col gap-[20px]">
                            <h5 className="text-white text-[22px]">Features</h5>
                            <nav>
                                <ul className="flex flex-col text-text gap-[5px]">
                                    <li>
                                        <Link to='/' className="duration-300 hover:text-white">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/trading' className="duration-300 hover:text-white">
                                            Trading
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/profile' className="duration-300 hover:text-white">
                                            Wallet
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/profile/invest' className="duration-300 hover:text-white">
                                            Invest
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/p2p' className="duration-300 hover:text-white">
                                            P2P
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='' className="duration-300 hover:text-white">
                                            Support
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <h5 className="text-white text-[22px]">Market Tools</h5>
                            <nav>
                                <ul className="flex flex-col text-text gap-[5px]">
                                    <li>
                                        <Link to='/tools/marketcrypto' className="duration-300 hover:text-white">
                                            Crypto Market Cap
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/tools/screener' className="duration-300 hover:text-white">
                                            Market Screener
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/tools/analysis' className="duration-300 hover:text-white">
                                            Technical Analysis
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/tools/cross-rates' className="duration-300 hover:text-white">
                                            Cross Rate
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/tools/heat-map' className="duration-300 hover:text-white">
                                            Currency Heat Map
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <h5 className="text-white text-[22px]">Legal</h5>
                            <nav>
                                <ul className="flex flex-col text-text gap-[5px]">
                                    <li>
                                        <Link className="duration-300 hover:text-white">
                                        Terms of Service
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="duration-300 hover:text-white">
                                        Privacy Notice
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="duration-300 hover:text-white">
                                        Cookies Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="duration-300 hover:text-white">
                                        AML & KYC Policy
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-text text-[12px]">The Transactions offered by this Website can beexecuted only by fully competent adults. Transactions with financial instruments offered on the Website involve substantial risk and trading may be very risky. ©2023. All rights reserved by myaltcoins.org</p>
                </div>
            </div>
        </footer>
    )
}

