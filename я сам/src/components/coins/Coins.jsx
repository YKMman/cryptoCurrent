
import loader from '../../../public/loader.gif'


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


// eslint-disable-next-line react/prop-types
export const Coins = ({setUsdt, value}) => {

    const handleUsdt = (usdtIndex) => {
        setUsdt(prevstate => {
            return prevstate.map((item, index) => {
                if (usdtIndex == index) {
                    return {...item, usdt: {...item.usdt, connect: true}}
                } else {
                    return {...item, usdt: {...item.usdt, connect: false}}
                }
            })
        })
    }

    // eslint-disable-next-line react/prop-types
    if (value.length === 0) {
        return (
            <div>
                <img src={loader} alt='loader'/>
            </div>
        )
    }


    return (
        <div className="flex flex-col text-center bg-[#0b1917] h-full w-full max-w-full minxl:max-w-[320px] p-[5px] rounded-[8px]">
            <div className="flex items-center justify-between mb-[10px]">
                <span className='text-[14px] text-text '>Pair</span>
                <span className='text-[14px] text-text '>Price</span>
                <span className='text-[14px] text-text '>Change</span>
            </div>
            {
                // eslint-disable-next-line react/prop-types
                value.map((coin, index) => {
                    return (
                        <div key={index} className="text-rose-50 flex items-center gap-[10px] justify-between cursor-pointer text-[14px] mb-[5px]" onClick={() => handleUsdt(index)}>
                            <span className="w-full text-left text-white text-[12px] font-bold flex items-center gap-[5px]">
                                <img className='max-w-[15px]' src={dataImage[index].img} alt={coin}/>
                                {coin.symbol}
                            </span>
                            <span className="w-full text-center text-white text-[12px] font-medium">${Number(coin.lastPrice).toFixed(2)}</span>
                            <span className={`w-full text-right font-medium ${Number(coin.priceChangePercent) > 0 ? "text-[#6b6]" : "text-[#ff6c6c]"}`}>{Number(coin.priceChangePercent).toFixed(2)}%</span>
                        </div>
                    )
                })
            }
        </div>  
    )
}


