import { Link } from "react-router-dom"

import { MarketTrend } from "../../components/marketTrend/MarketTrend"

import exodus from '/public/partners2/exodus.png'
import metamask from '/public/partners2/metamask.png'
import safepal from '/public/partners2/safepal.png'
import trustwallet from '/public/partners2/trustwallet.png'
import walletconnect from '/public/partners2/walletconnect.png'


const data = [
    {
        img: exodus,
        link: 'https://www.exodus.com/'
    },
    {
        img: metamask,
        link: 'https://metamask.io/'
    },
    {
        img: safepal,
        link: 'https://www.safepal.com/ru/'
    },
    {
        img: trustwallet,
        link: 'https://trustwallet.com/ru'
    },
    {
        img: walletconnect,
        link: 'https://walletconnect.com/'
    },
]

export const HeroSection = () => {

    return (
        <section className="bg-hero bg-black h-full pb-[120px] bg-cover bg-center minsm:pb-[80px] sm:pb-[40px]">
            <div className="container pt-[60px]">
                <div className="m-auto mb-[45px] flex flex-col rounded-[8px] py-[13px] px-[20px] border-[1px] border-myAltCoins backdrop-blur-myAltCoins bg-gradient-to-b from-gray-20 to-gray-20 bg-opacity-20 w-[510px] text-left md:w-auto">
                    <h1 className="text-[70px] lg:text-[50px] xs:text-[42px] md:text-center  font-bold bg-myAltCoins bg-clip-text text-transparent tracking-[0.5px]">MyAltCoins</h1>
                    <p className="text-[16px] text-white leading-[20px] md:text-center">Be calm about your cryptocurrency assets. The best way to receive send and trade cryptocurrency</p>
                </div>
                <Link to='/' className="block w-fit m-auto mb-[60px] py-[9px] px-[32px] border-[1px] border-myAltCoins rounded-[8px] text-white bg-gradient-to-b from-gray-20 to-gray-20 bg-opacity-20 duration-500 hover:bg-hoverMyAltCoins">
                    Start trading
                </Link>
                <ul className="flex flex-wrap max-w-[700px] w-full m-auto gap-x-[50px] items-center justify-center gap-y-[25px] mb-[60px]">
                    {
                        data.map((el,index) => {
                            return (
                                <li key={index}>
                                    <Link to={el.link} className="duration-200 relative hover:top-[-5px]">
                                        <img src={el.img} alt={el.img}/>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <MarketTrend/>
            </div>
        </section>
    )
}













