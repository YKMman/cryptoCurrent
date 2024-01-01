import { Link } from "react-router-dom"

import BTC from '../../../public/btc-large.png'

const Staking = () => {
    return ( 
        <section className="my-[30px] minsm:my-[40px] relative before:absolute before:left-0 before:top-0 before:bg-bigImage before:h-[2220px] before:w-[950px] before:bg-contain before:bg-no-repeat before:z-[-1] minmd:before:w-[450px] md:before:w-[320px]">   
            <div className="container">
                <div className="border-[1px] border-tableBorder rounded-[8px] bg-table py-[20px] px-[30px] w-full flex items-center gap-[20px] justify-between md:flex-col md:items-center duration-300 hover:translate-y-[5px] hover:bg-hoverHeh">
                    <div className="flex flex-col gap-[40px]">
                        <h2 className="text-white text-[52px] md:text-center sm:text-[42px]">Staking and Investing</h2>
                        <p className="text-text text-[16px] max-w-[940px]">Our cryptocurrency exchange operates with high efficiency and security, ensuring a profitable trading experience for users. Join us today and start earning profits from your investments.</p>
                        <Link to='' className="block w-fit md:mx-auto mr-auto py-[9px] px-[32px] border-[1px] border-myAltCoins rounded-[8px] text-white bg-gradient-to-b from-gray-20 to-gray-20 bg-opacity-20 duration-500 hover:bg-hoverMyAltCoins xs:m-auto">
                            Invest now
                        </Link>
                    </div>
                    <div>
                        <img src={BTC} alt='btc' className="duration-100 animate-waving-hand"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Staking
