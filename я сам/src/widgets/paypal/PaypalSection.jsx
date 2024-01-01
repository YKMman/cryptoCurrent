
import mobile from '../../../public/phone-large.png'
import partner from '../../../public/hands-large.png'
import { Link } from 'react-router-dom'


export const PaypalSection = () => {
    return (
        <section className='overflow-x-hidden'>
            <div className="container flex items-center justify-between minlg:gap-[25px] mb-[75px] pb-[65px] lg:flex-col sm:gap-[20px] minsm:gap-[160px] sm:mb-[40px] sm:pb-[30px]">
                <div className="flex-auto flex flex-col gap-[35px] relative border-[1px] border-tableBorder rounded-[8px] bg-table py-[20px] px-[30px] w-full text-center h-[375px] justify-between lg:m-auto lg:w-auto lg:h-auto xs:items-center xs:text-center duration-300 hover:bg-hoverHeh hover:translate-y-[5px]">
                    <h3 className="text-white font-bold xs:text-[25px] text-[30px] minmd:text-[30px] minlg:text-[32px] minxl:text-[40px]">Payment - Visa, MasterCard, AmericanExpress, Apple Pay</h3>
                    <p className="text-text">Easily add funds to your crypto-wallet directly from your bank account for hassle-free and convenient replenishment</p>
                    <Link to='/' className="block w-fit ml-auto py-[9px] mb-[35px] px-[32px] border-[1px] border-myAltCoins rounded-[8px] text-white bg-gradient-to-b from-gray-20 to-gray-20 bg-opacity-20 duration-500 hover:bg-hoverMyAltCoins xs:m-auto">
                        Deposit
                    </Link>
                    <img src={mobile} alt='mobile' className="absolute left-0 bottom-0 translate-x-[-50px] translate-y-[90px] lg:bottom-[-60px] lg:left-[60px] sm:hidden"/>
                </div>
                <div className="flex-auto flex flex-col gap-[35px]  relative border-[1px] border-tableBorder rounded-[8px] bg-table py-[20px] px-[30px] w-full text-center h-[375px] justify-between lg:m-auto lg:w-auto lg:h-auto duration-300 hover:bg-hoverHeh hover:translate-y-[5px]">
                    <h3 className="text-white font-bold text-[30px] minmd:text-[30px] minlg:text-[32px] minxl:text-[40px]">Terms Of Service</h3>
                    <p className="text-text">
                        A binding agreement that outlines the terms of use and conditions for engaging in cryptocurrency-related activities.
                    </p>
                    <Link to='/' className="block w-fit mr-auto py-[9px] mb-[35px] px-[32px] border-[1px] border-myAltCoins rounded-[8px] text-white bg-gradient-to-b from-gray-20 to-gray-20 bg-opacity-20 duration-500 hover:bg-hoverMyAltCoins xs:m-auto">
                        Learn More
                    </Link>
                    <img src={partner} alt='mobile' className="absolute right-0 bottom-0 translate-x-[60px] translate-y-[60px] lg:bottom-[-40px] lg:right-[60px] sm:hidden"/>
                </div>
            </div>
        </section>
    )
}



