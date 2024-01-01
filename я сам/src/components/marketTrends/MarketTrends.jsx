import { ModelMarketTrends } from "./model/ModelMarketTrends"


import loader from "../../../public/loader.gif"
import goodChart from '../../../public/chart-2-3.png'
import badChart from '../../../public/chart-2-6.png'
import BTCUSDT from '../../../public/btc.png'
import ETHUSDT from '../../../public/eth.png'
import BNBUSDT from '../../../public/bnb.png'
import LTCUSDT from '../../../public/usdt.png'
import { Link } from "react-router-dom"

const dataImage = [
    {
        img: BTCUSDT
    },
    {
        img: ETHUSDT
    },
    {
        img: BNBUSDT
    },
    {
        img: LTCUSDT
    }
]


export const MarketTrends = () => {
    const selector = ModelMarketTrends()

    console.log(selector)

    if (selector.length === 0) {
        return (
            <div className="container h-[210px]">
                <img className="h-[105px] m-auto" src={loader}/>
            </div>
        )
    }

    return (
        <div className="bg-table border-[1px] z-10 border-tableBorder rounded-[8px] relative after:bg-wispTable after:absolute after:w-[200px] after:h-[200px] after:blur-[200px] after:left-[50%] after:top-[50%] after:z-[-1] after:translate-x-[-50%] after:translate-y-[-50%] text-tableText after:md:hidden">
            <div className="grid minlg:grid-cols-6 minmd:grid-cols-5 minsm:grid-cols-4 sm:grid-cols-3 items-center text-tableText px-[30px] py-[20px] border-b-[1px] border-tableBorder lg:px-[15px] font-bold">
                <span className="sm:hidden">#</span>
                <span >COIN</span>
                <span className="text-center">LAST PRICE</span>
                <span className="text-center lg:hidden">CHANGE</span>
                <span className="text-center md:hidden">MARKET STATS</span>
                <span className="text-center sm:text-right">TRADE</span>
            </div>
            {
                selector.map((el, index) => {
                    return (
                        <div key={index} className="grid minlg:grid-cols-6  minmd:grid-cols-5 minsm:grid-cols-4 sm:grid-cols-3 items-center text-tableText px-[30px] py-[20px] border-b-[1px] border-tableBorder last:border-[0px] lg:px-[15px]">
                            <span className="sm:hidden">{index + 1}</span>
                            <div className="flex items-center gap-[10px]">
                                <img className="max-w-[35px] sm:hidden" src={dataImage[index].img} alt={el.symbol}/>
                                <span className="">
                                    {el.symbol}
                                </span>
                            </div>
                            <span className="text-center">${Number(el.lastPrice).toFixed(3)}</span>
                            <span className="text-center lg:hidden">{el.priceChangePercent}%</span>
                            <img src={el.priceChangePercent > 0 ? goodChart : badChart} alt='chart' className="m-auto  md:hidden"/>
                            <Link to='/trading' className="bg-lightGreen w-fit py-[6px] px-[20px] rounded-[8px] text-white font-bold duration-500 hover:text-darkGreen m-auto sm:m-0 sm:ml-auto ">
                                Trade
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

