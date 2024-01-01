import { useEffect, useState } from "react"
import { orderApi } from "../../api/orderApi"


import loader from '../../../public/loader.gif'

// eslint-disable-next-line react/prop-types
export const Order = ({coinActive}) => {
    const [dataAsks, setDataAsks] = useState([])
    const [dataBids, setDataBids] = useState([])

    useEffect(() => {
        const refreshOrder = () => {
            orderApi(coinActive)
            .then((response ) => {
                // console.log(response)
                setDataAsks(response.data.asks)
                setDataBids(response.data.bids)
            })
            .catch((error) => console.error(error))
        }

        const intervalId = setInterval(refreshOrder, 1000);
        // price * amount
        // 0 * 1 = total usdt
        return () => {
            clearInterval(intervalId);
        };
    }, [coinActive])

    if (dataAsks.length === 0 || dataBids.length === 0) {
        return <div className="max-w-[650px] w-full h-full flex items-center justify-center">
            <img className="" src={loader} alt='loader'/>
        </div>
    }



    return (
        <div className="text-white  bg-[#0b1917] p-[5px] flex flex-col gap-[10px] w-full  minlg:w-[650px] rounded-[8px]">
                <div>
                    <h2 className="text-[14px] font-bold">Bids</h2>
                    <div className="flex items-center gap-[10px] justify-between">
                        <span className="w-full text-text text-[14px]">Price USDT</span>
                        <span className="w-full text-text text-[14px]">Amount BTC</span>
                        <span className="w-full text-right text-text text-[14px]">Total USDT</span>
                    </div>
                    <ul className="flex flex-col">
                    {
                        dataBids.map(([price, quantity], index) => {
                            const stylesWidth = (price * quantity) > 100 ? 100 : price * quantity
                            return (
                                <li key={index} className={`flex items-center gap-[10px] justify-between relative px-[5px] text-[13px]`}>
                                    <span className="w-full relative z-10 text-[#ff6c6c]">{Number(price).toFixed(3)}</span>
                                    <span className="w-full relative z-10">{Number(quantity).toFixed(4)}</span>
                                    <span className="w-full text-right relative z-10">{Number(price * quantity).toFixed(4)}</span>
                                    <span style={{width: `${stylesWidth}%`}} className="absolute bg-[#ff6c6c] opacity-[0.16] h-full right-0"></span>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>

                <div>
                    <h2 className="text-[14px] font-bold">Asks</h2>
                    <div className="flex items-center gap-[10px] justify-between">
                        <span className="w-full text-text text-[14px]">Price USDT</span>
                        <span className="w-full text-text text-[14px]">Amount BTC</span>
                        <span className="w-full text-right text-text text-[14px]">Total USDT</span>
                    </div>
                    <ul className="flex flex-col">
                    {
                        dataAsks.map(([price, quantity], index) => {
                            const stylesWidth = (price * quantity) > 100 ? 100 : price * quantity
                            return (
                                <li key={index} className={`flex items-center gap-[10px] justify-between relative px-[5px] text-[13px]`}>
                                    <span className="w-full relative z-10 text-[#6b6]">{Number(price).toFixed(3)}</span>
                                    <span className="w-full relative z-10">{Number(quantity).toFixed(4)}</span>
                                    <span className="w-full text-right relative z-10">{Number(price * quantity).toFixed(4)}</span>
                                    <span style={{width: `${stylesWidth}%`}} className="absolute bg-[#6b6] opacity-[0.16] h-full right-0"></span>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
        </div>
    )
}


