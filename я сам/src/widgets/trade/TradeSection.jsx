import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'

import { Chart } from "../../components/chart/Chart"
import { Coins } from "../../components/coins/Coins"
import { Buy } from "../../components/buy-sell/Buy"
import { Sell } from "../../components/buy-sell/Sell"
import { Order } from "../../components/order/Order"


import { usdtStore } from "../../store/usdt/usdtSlice"


export const TradeSection = () => {
    const value = useSelector(usdtStore)
    // active coin
    const [coinActive, setCoinActive] = useState('BTCUSDT')
    // устанавливаем здесь монету. По умолчанию BTC
    // массив монет - передаём в coins, выводим их. 
    const [usdt, setUsdt] = useState([
        {
            'usdt': {
                'coin': 'BTCUSDT',
                'connect': true
            },
        },
        {
            'usdt': {
                'coin': 'ETHUSDT',
                'connect': false
            },
        },
        {
            'usdt': {
                'coin': 'BNBUSDT',
                'connect': false
            },
        },
        {
            'usdt': {
                'coin': 'LTCUSDT',
                'connect': false
            },
        }
    ])



    useEffect(() => {
        // console.log(coinActive)
        const findUSDTCOIN = () => {
            // eslint-disable-next-line react/prop-types
            usdt.map(el => {
                if (el.usdt.connect) {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    setCoinActive(el.usdt.coin.toLowerCase())
                }
            })
        }

        findUSDTCOIN()
    }, [usdt])


    return (
        <section className=" relative h-full after:top-0 after:left-0 after:right-0 after:bottom-0 after:z-[-1] after:absolute after:bg-bgProfile after:bg-no-repeat after:bg-contain after:bg-center my-[60px] backdrop-blur-[5.5px]">
            <div className="container">
                <h2 className="text-white text-left mb-[10px] text-[22px] flex items-center gap-[5px] bg-[#0b1917] p-[5px] rounded-[8px]">
                        <span className="uppercase pl-[10px] block border-r-[1px] border-text pr-[15px]">
                        {coinActive}
                        </span>
                    </h2>
            </div>
            <div className="container flex justify-center gap-[10px] lg:flex-col">
                <Order coinActive={coinActive}/>
                <div className="flex flex-col gap-[10px] justify-between w-full">
                    <div className="flex items-start gap-[10px] xl:flex-col">
                        <Chart coinActive={coinActive}/>
                        <Coins value={value} setUsdt={setUsdt}/>
                    </div>
                    <div className="flex items-center justify-center gap-[20px] p-[5px] h-full sm:flex-col rounded-[8px]">
                        <Buy value={value} coinActive={coinActive}/>
                        <Sell value={value} coinActive={coinActive}/>
                    </div>
                </div>
            </div>
        </section>
    )
}


