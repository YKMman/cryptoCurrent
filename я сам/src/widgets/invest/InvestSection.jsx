import { useState } from "react"

import BTCUSDT from '../../../public/btc.png'
import ETHEREUM from '../../../public/eth.png'
import USDS from '../../../public/usdc.png'


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

export const InvestSection = () => {
    const [select, setSelect] = useState(false)
    const [activeSelect, setActiveSelect] = useState(0)

    const handleSelect = (index) => {
        setActiveSelect(index)
        setSelect((prev) => !prev)
    }


    return (
        <section className="bg-bgProfile relative h-full bg-no-repeat bg-contain bg-center py-[120px] md:py-[60px]">
            <div className="container">

                <div className="flex items-center gap-[50px] lg:gap-[25px] justify-center mb-[90px] lg:flex-col">

                    <div className="inline-flex flex-col bg-staking rounded-[8px] overflow-hidden  w-full lg:max-w-[725px]">
                        <div className="bg-selectMenu text-white inline-flex flex-col text-left p-[20px]">
                            <h2 className="text-[32px]">Staking</h2>
                            <span className="">Low-risk | Stable earnings</span>
                        </div>
                        <div className="p-[20px] inline-flex flex-col mt-[25px]">
                            <div className="relative mb-[40px] border-[1px] border-green2">
                                        {
                                            <div onClick={() => setSelect((prev) => !prev)} className="bg-[#00150F] rounded-[3px] p-[10px] flex items-center gap-[10px]">
                                                <img className="max-w-[35px]" src={data[activeSelect].img} alt='coin'/>
                                                <span className="font-bold text-[20px] text-white">{data[activeSelect].coin}</span>
                                            </div>
                                        }
                                        {
                                            select && 
                                            <ul className="absolute left-0 right-0 bg-[#00150F] shadow-lg px-[10px] py-[15px] z-10 translate-y-[20px] flex flex-col gap-[10px] max-h-[220px] overflow-y-scroll scrollbar-thumb-green scrollbar-track-darkGreen scrollbar-thin">
                                            {data.map((el, index) => {
                                                return (
                                                    <li key={index} className="flex items-center gap-[10px] pb-[10px] border-b-[1px] border-grey text-white" onClick={() => handleSelect(index)}>
                                                        <img className="max-w-[40px]" src={el.img} alt='coin'/>
                                                        <span className="font-bold text-[20px]">{el.coin}</span>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                        }
                            </div>

                            <span className="text-white mb-[10px] font-medium text-[18px]">Enter amount</span>
                            <label className="mb-[15px]">
                                <input type='number' placeholder="0" className="bg-[#00150F] border-[1px] rounded-[3px] border-green2 py-[10px] px-[10px] w-full text-white placeholder:text-white placeholder:font-medium"/>
                            </label>
                            <div className="text-white flex items-center gap-[5px] text-[14px] mb-[35px]">Available: 
                                <span className="text-green2 font-bold text-[18px]">
                                {data[activeSelect].coin}
                                </span>
                            </div>

                            <span className="text-white text-[18px] mb-[40px] font-medium">Select a staking plan</span>

                            <ul className="grid grid-cols-2 gap-[30px] mb-[30px] xs:grid-cols-1">
                                <li className="bg-[#00150F] border-[1px] border-green p-[10px] flex items-center justify-around text-white rounded-[8px]">
                                    <div className="flex flex-col text-[26px] font-medium items-center">7 DAYS
                                        <span className="text-[16px]">Duration</span>
                                    </div>
                                    <div className="flex flex-col items-center text-[26px] font-medium text-green2">
                                        1.3%
                                        <span className="text-[16px] text-white">Per day</span>
                                    </div>
                                </li>
                                <li className="bg-[#00150F] border-[1px] border-green p-[10px] flex items-center justify-around text-white rounded-[8px]">
                                    <div className="flex flex-col text-[26px] font-medium items-center">30 DAYS
                                        <span className="text-[16px]">Duration</span>
                                    </div>
                                    <div className="flex flex-col text-[26px] font-medium text-green2">
                                        2.1%
                                        <span className="text-[16px] text-white">Per day</span>
                                    </div>
                                </li>
                                <li className="bg-[#00150F] border-[1px] border-green p-[10px] flex items-center justify-around text-white rounded-[8px]">
                                    <div className="flex flex-col text-[26px] font-medium items-center">14 DAYS
                                        <span className="text-[16px]">Duration</span>
                                    </div>
                                    <div className="flex flex-col text-[26px] font-medium text-green2">
                                        1.6%
                                        <span className="text-[16px] text-white">Per day</span>
                                    </div>
                                </li>
                                <li className="bg-[#00150F] border-[1px] border-green p-[10px] flex items-center justify-around text-white rounded-[8px]">
                                    <div className="flex flex-col text-[26px] font-medium items-center">90 DAYS
                                        <span className="text-[16px]">Duration</span>
                                    </div>
                                    <div className="flex flex-col text-[26px] font-medium text-green2">
                                        2.6%
                                        <span className="text-[16px] text-white">Per day</span>
                                    </div>
                                </li>
                            </ul>

                            <button className="py-[10px] px-[32px] text-white text-center m-auto bg-withdrawBtn max-w-[250px] w-full text-[22px] font-medium mb-[35px] duration-500 hover:shadow-xl shadow-white">Stake</button>

                            <span className="text-white text-[12px] text-center m-auto w-fit">Each plan may include additional bonus percentages for active traders on our platform. You will
                            find out the amount of bonuses received after the end of the staking plan.</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[30px] max-w-[725px] w-full">
                        
                        <div className="flex flex-col justify-around bg-staking rounded-[8px] overflow-hidden">
                            <div className="bg-selectMenu text-white inline-flex flex-col text-left p-[20px] xs:text-center">
                                <h2 className="text-[26px] ">Estimated earnings</h2>
                                <span className="">Calculate your profit</span>
                            </div>
                            <div className="bg-staking p-[20px] text-white flex flex-col gap-[35px] my-[20px] font-medium">
                                <div className="flex items-center justify-between gap-[15px] text-[16px] font-bold">
                                    Expected profit
                                    <div className="flex items-center gap-[10px]">
                                        <img className="max-w-[30px]" src={data[activeSelect].img} alt='coin'/>
                                        + {data[activeSelect].coin}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between gap-[15px] text-[16px] font-bold">
                                    Profit received
                                    <div className="flex items-center gap-[10px]">
                                        <img className="max-w-[30px]" src={data[activeSelect].img}  alt='coin'/>
                                        + {data[activeSelect].coin}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="py-[35px] px-[20px] bg-selectMenu rounded-[8px] flex flex-col gap-[40px]">
                            <span className="text-white text-center max-w-[575px] m-auto text-[14px">
                            You can invest in any of the presented plans. After the expiration of the staking plan, the profit will be automatically transferred to the balance of your account.
                            </span>

                            <span className="text-white text-center max-w-[560px] m-auto">Refresh the page to check your real- time profits. If you cancel your active staking plan prematurely, you will lose all of your accumulated profit.</span>
                        </div>

                    </div>

                </div>

                <div className="bg-history flex flex-col md:overflow-x-scroll">
                    <div className="grid grid-cols-5 justify-between pb-[15px] border-b-[1px] border-green gap-[25px] text-white px-[30px] py-[20px] md:min-w-max">
                        <span className="inline-block bg-green w-fit py-[5px] px-[25px] rounded-[8px] m-auto">
                            Stake ID
                        </span>
                        <span className="inline-block bg-green w-fit py-[5px] px-[25px] rounded-[8px] m-auto">
                            Date
                        </span>
                        <span className="inline-block bg-green w-fit py-[5px] px-[25px] rounded-[8px] m-auto">
                            End Date
                        </span>
                        <span className="inline-block bg-green w-fit py-[5px] px-[25px] rounded-[8px] m-auto">
                            Profit
                        </span>
                        <span className="inline-block bg-green w-fit py-[5px] px-[25px] rounded-[8px] m-auto">
                            Status
                        </span>
                    </div>
                    <div className="min-h-[425px] flex flex-col justify-center items-center">
                        <span className="text-white text-[22px] ">No pending stakes found</span>
                    </div>
                </div>

            </div>
        </section>
    )
}
