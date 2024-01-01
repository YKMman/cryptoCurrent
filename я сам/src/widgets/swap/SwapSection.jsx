import { useState } from "react"
import { useForm } from "react-hook-form"


import BTCUSDT from '../../../public/btc.png'
import ETHEREUM from '../../../public/eth.png'
import USDS from '../../../public/usdc.png'
import cryptos from '../../../public/cryptos.gif'

const data = [
    {
        coin: 'BTC',
        img: BTCUSDT
    },
    {
        coin: 'ETH',
        img: ETHEREUM
    },
    {
        coin: 'USDS',
        img: USDS
    },
]

export const SwapSection = () => {
    const { register, handleSubmit, watch } = useForm()

    const [select, setSelect] = useState(false)
    const [select2, setSelect2] = useState(false)
    const [activeSelect, setActiveSelect] = useState(0)
    const [activeSelect2, setActiveSelect2] = useState(0)

    const handleSelect = (index) => {
        setActiveSelect(index)
        setSelect((prev) => !prev)
    }

    const handleSelect2 = (index) => {
        setActiveSelect2(index)
        setSelect2((prev) => !prev)
    }


    // const onSubmit = (data) => {
    //     console.log(data)
    //     // transferApi(data)
    //     // .then((response) => console.log(response))
    //     // .catch((error) => console.error(error))
    // }


    return (
        <section className="bg-bgProfile relative h-full bg-no-repeat bg-contain bg-center py-[60px]">
            <div className="container text-white flex items-center gap-[50px] justify-center md:flex-col md:items-center md:gap-[25px]">
                <div className="flex flex-col gap-[15px] w-full max-w-[525px]">
                    <h2 className="text-white text-[32px]">Swap</h2>
                    <div className="bg-swapContainer p-[15px] flex flex-col rounded-[8px]">
                            <span className="bg-withdrawBtn text-[12px] py-[2px] px-[10px] text-center w-fit mb-[15px] border-[0.2px] border-myAltCoins rounded-[3px] text-[#c9dbd8]">You send</span>

                            <div className="relative mb-[40px] border-[1px] border-green2">
                                {
                                    <div onClick={() => setSelect((prev) => !prev)} className="bg-withdraw p-[10px] flex items-center gap-[10px]">
                                        <img className="max-w-[35px]" src={data[activeSelect].img} alt='coin'/>
                                        <span className="font-bold text-[20px]">{data[activeSelect].coin}</span>
                                    </div>
                                }
                                {
                                    select && 
                                    <ul className="absolute left-0 right-0 bg-select  shadow-lg px-[10px] py-[15px] backdrop-blur-[5.5px] z-10 translate-y-[20px] flex flex-col gap-[10px] max-h-[220px] overflow-y-scroll scrollbar-thumb-green scrollbar-track-darkGreen scrollbar-thin">
                                        {data.map((el, index) => {
                                            return (
                                                <li key={index} className="cursor-pointer duration-300 hover:bg-hoverMyAltCoins flex items-center gap-[10px] py-[10px] px-[10px] border-b-[1px] border-grey" onClick={() => handleSelect(index)}>
                                                    <img className="max-w-[40px]" src={el.img} alt='coin'/>
                                                    <span className="font-bold text-[20px]">{el.coin}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                }
                            </div>
                            
                            <span className="bg-withdrawBtn text-[12px] py-[2px] px-[10px] text-center w-fit mb-[15px] border-[0.2px] border-myAltCoins rounded-[3px] text-[#c9dbd8]">Send Amount</span>
                            <span className="text-[#868686] text-[12px] mb-[15px] font-sans">Enter the amount to swap</span>

                            <label className="mb-[40px]">
                                <input type='number' placeholder="0" className=" bg-table text-[16px] font-bold text-white placeholder:text-white w-full p-[15px] rounded-[3px]   "/>
                            </label>

                            <span className="bg-withdrawBtn text-[12px] py-[2px] px-[10px] text-center w-fit mb-[15px] border-[0.2px] border-myAltCoins rounded-[3px] text-[#c9dbd8]">You receive</span>

                            <div className="relative mb-[40px] border-[1px] border-green2">
                                {
                                    <div onClick={() => setSelect2((prev) => !prev)} className="bg-withdraw p-[10px] flex items-center gap-[10px]">
                                        <img className="max-w-[35px]" src={data[activeSelect2].img} alt='coin'/>
                                        <span className="font-bold text-[20px]">{data[activeSelect2].coin}</span>
                                    </div>
                                }
                                {
                                    select2 && 
                                    <ul className="absolute left-0 right-0 bg-select  shadow-lg px-[10px] py-[15px] backdrop-blur-[5.5px] z-10 translate-y-[20px] flex flex-col gap-[10px] max-h-[220px] overflow-y-scroll scrollbar-thumb-green scrollbar-track-darkGreen scrollbar-thin">
                                        {data.map((el, index) => {
                                            return (
                                                <li key={index} className="cursor-pointer duration-300 hover:bg-hoverMyAltCoins flex items-center gap-[10px] py-[10px] px-[10px] border-b-[1px] border-grey" onClick={() => handleSelect2(index)}>
                                                    <img className="max-w-[40px]" src={el.img} alt='coin'/>
                                                    <span className="font-bold text-[20px]">{el.coin}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                }
                            </div>

                            <span className="bg-withdrawBtn text-[12px] py-[2px] px-[10px] text-center w-fit mb-[15px] border-[0.2px] border-myAltCoins rounded-[3px] text-[#c9dbd8]">Receive Amount</span>
                            <span className="text-[#868686] text-[12px] mb-[15px] font-sans">Amount you will recieve in selected coin</span>
                            
                            <label className="mb-[20px] w-full">
                                <input type='number' placeholder="0" className=" bg-table text-[16px] font-bold text-white placeholder:text-white w-full p-[15px] rounded-[3px]   "/>
                            </label>



                            <button className="bg-withdrawBtn text-[16px] py-[12px] px-[40px] text-center w-fit mb-[15px] mx-auto border-[0.2px] border-myAltCoins rounded-[3px] text-[#c9dbd8]">Submit swap</button>

                        </div>
                </div>

                <div className="flex flex-col gap-[35px]">
                    <div className="flex flex-col">
                        <h3 className="text-center mb-[23px] text-[26px] font-bold">Important information</h3>
                        <div className="flex flex-col bg-swapContainer p-[35px] gap-[20px] rounded-[8px]">
                            <span className="text-left max-w-[625px] text-[14px] text-[#868686] xs:text-[12px] inline-block">The MyAltCoins swap tool currently supports all conversions between BTC, ETH, USDT, and USD. These represent the three most popular cryptocurrencies used for trading (BTC, ETH, USDT) as well as the most popular fiat currency (USD). More coins will also be added, so stay tuned!</span>
                        </div>
                    </div>
                    <div className="bg-swapContainer p-[15px] rounded-[8px] text-center">
                        <span className="text-center max-w-[425px] text-[14px] text-[#868686] xs:text-[14px] inline-block mb-[15px]">Minimum and maximum trade amounts will be dependent on the coin / pair and can be previewed before entering in a trade amount.</span>
                        <img className="mx-auto" src={cryptos} alt='cryptos' />
                    </div>
                </div>
            </div>
        </section>
    )
}





