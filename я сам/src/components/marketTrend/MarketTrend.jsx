import { ModelMarketTrend } from './model/ModelMarketTrend'


import loader from "../../../public/loader.gif"
import goodChart from '../../../public/chart-2-3.png'
import badChart from '../../../public/chart-2-6.png'
import BTCUSDT from '../../../public/btc.png'
import ETHUSDT from '../../../public/eth.png'
import BNBUSDT from '../../../public/bnb.png'
import LTCUSDT from '../../../public/usdt.png'

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

export const MarketTrend = () => {

    const selector = ModelMarketTrend()

    if (selector.length === 0) {
        return (
            <div className="container h-[210px]">
                <img className="h-[105px] m-auto" src={loader}/>
            </div>
        )
    }

    return (
        <div className='mt-auto'>
            <p className="text-white text-[26px] mb-[22px]">Market Trend</p>
            <ul className="grid items-center gap-[30px] minlg:grid-cols-4 minsm:grid-cols-2 minsm:gap-[20px] sm:grid-cols-1">
                {
                    selector.map((coin, index) => {
                        return (
                            <li key={index} className="flex flex-col bg-banner border-[1px] border-tableBorder rounded-[8px] p-[20px] duration-500 hover:bg-banner2 relative hover:top-[-5px]">
                                <div className="flex items-center justify-start mb-[5px] pb-[10px] border-b-[2px] border-tableBorder gap-[10px]">
                                    <img className="max-w-[40px]" src={dataImage[index].img} alt={coin.symbol}/>
                                    <p className="text-white text-[18px] font-bold">
                                        {coin.symbol}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between gap-[10px]">
                                    <div className="flex flex-col">
                                        <p className="text-white text-[18px] uppercase font-bold">${Number(coin.weightedAvgPrice).toFixed(3)}</p>
                                        <p className="text-white">{coin.priceChangePercent}%</p>
                                    </div>
                                    <div>
                                        <img src={coin.priceChangePercent > 0 ? goodChart : badChart} alt='chart'/>
                                    </div>
                                </div>
                            </li>
                        ) 
                    })
                }
            </ul>
        </div>
    )
}












