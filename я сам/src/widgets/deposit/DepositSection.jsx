import { useSelector } from "react-redux";
import { useState } from "react";

import { userStore } from "../../store/user/userSlice";



import BTCUSDT from '../../../public/btc.png'
import ETHEREUM from '../../../public/eth.png'
import USDS from '../../../public/usdc.png'
import cryptos from '../../../public/cryptos.gif'
import { Link } from "react-router-dom";

const data = [
    {
        coin: "Bank card USD",
        img: BTCUSDT
    },
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




export const DepositSection = () => {
    const [select, setSelect] = useState(false)
    const [activeSelect, setActiveSelect] = useState(0)
    const [address, setAddress] = useState(false)
    const value = useSelector(userStore)

    const handleSelect = (index) => {
        setActiveSelect(index)
        setSelect((prev) => !prev)
        setAddress(false)
    }



    return (
        <section className="bg-bgProfile relative h-full bg-no-repeat bg-contain bg-center py-[60px]">
            <div className="container text-white flex items-center gap-[50px] justify-center md:flex-col md:items-center lg:gap-[25px]">

                <div className="flex flex-col md:max-w-[350px]">
                    <h2 className="text-white text-[32px] mb-[10px]">Deposit</h2>
                        <div className="bg-withdraw p-[15px] flex flex-col rounded-[3px]">
                            <span className="bg-withdrawBtn text-[12px] py-[2px] px-[10px] text-center w-fit mb-[15px] border-[0.2px] border-myAltCoins rounded-[3px] text-[#c9dbd8]">Select coin to deposit</span>
                            <span className="text-[#868686] text-[12px] mb-[15px] font-sans">The coin you have selected will be deposited to your balance</span>

                            <div className="relative mb-[40px]">
                                {
                                    <div onClick={() => setSelect((prev) => !prev)} className="bg-withdraw p-[10px] flex items-center gap-[10px] backdrop-blur-[5.5px] rounded-[3px]">
                                        <img className="max-w-[25px]" src={data[activeSelect].img} alt='coin'/>
                                        <span className="text-[14px] font-semibold">{data[activeSelect].coin}</span>
                                    </div>
                                }
                                {
                                    select && 
                                    <ul className="absolute left-0 right-0 bg-select backdrop-blur-[20px] shadow-lg py-[20px] z-10 translate-y-[10px] rounded-[3px] flex flex-col max-h-[220px] overflow-y-scroll scrollbar-thumb-green scrollbar-track-darkGreen scrollbar-thin">
                                        {data.map((el, index) => {
                                            return (
                                                <li key={index} className="cursor-pointer duration-300 hover:bg-hoverMyAltCoins flex items-center gap-[10px] py-[10px] px-[10px] border-b-[1px] border-grey" onClick={() => handleSelect(index)}>
                                                    <img className="max-w-[25px]" src={el.img} alt='coin'/>
                                                    <span className="text-[14px] font-semibold">{el.coin}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                }
                            </div>
                            
                            <div className="flex flex-col mb-[15px]">
                                <span className="bg-withdrawBtn text-[12px] py-[2px] px-[10px] text-center w-fit mb-[15px] border-[0.2px] border-myAltCoins rounded-[3px] text-[#c9dbd8]">Amount in {data[activeSelect].coin}</span>
                                <span className="text-[#868686] text-[12px] font-sans">Enter amount of deposit</span>
                            </div>
                                
                            <label className="mb-[40px] w-full bg-withdraw rounded-[3px]">
                                <input type='number' placeholder="0" className="text-center bg-table text-white placeholder:text-white font-bold w-full p-[5px]"/>
                            </label>

                            {
                                activeSelect === 0 ? 
                                <Link to='card' onClick={() => setAddress((prev) => !prev)} className="bg-withdrawBtn text-[12px] py-[10px] px-[10px] mx-auto duration-300 hover:bg-hoverMyAltCoins max-w-[235px] w-full text-center mb-[15px] border-[0.2px] border-myAltCoins rounded-[3px] text-[#c9dbd8]">
                                    Show address
                                </Link>
                                                : 
                                (
                                    !address &&
                                    <button onClick={() => setAddress((prev) => !prev)} className="bg-withdrawBtn text-[12px] py-[2px] px-[10px] text-center w-fit mb-[15px] border-[0.2px] border-myAltCoins rounded-[3px] text-[#c9dbd8]">Show address</button>
                                )
                            }
                            
                            {
                                address &&
                                <div className="flex items-center gap-[10px]">
                                    <span className="p-[5px] bg-deposit text-white">
                                        {value.WalletLinks[data[activeSelect].coin]}
                                    </span>
                                    <span className="p-[5px] bg-deposit text-white" onClick={() => navigator.clipboard.writeText(value.WalletLinks[data[activeSelect].coin])}>Copy!</span>
                                </div>
                            }
                        </div>
                </div>


                <div className="flex flex-col gap-[35px] md:max-w-[350px]">
                    <div className="flex flex-col">
                        <h3 className="text-center mb-[20px] text-[26px] font-light">Important information</h3>
                        <div className="flex flex-col bg-withdraw p-[15px] rounded-[3px] duration-300 hover:bg-hoverHeh">
                            <h4 className="text-center font-medium text-[26px] mb-[15px] xs:text-[22px]">Minimum deposit: 50$</h4>
                            <span className="text-left max-w-[525px] text-[12px] font-bold text-text xs:text-[14px] m-auto">In any cryptocurrency 12 network confirmations are required before your
                            funds will be added to your account balance.</span>
                        </div>
                    </div>
                    <div className="bg-withdraw p-[15px] rounded-[3px] duration-300 hover:bg-hoverHeh">
                        <h4 className="text-center mb-[15px] max-w-[425px] m-auto text-[26px] font-medium xs:text-[22px]">More than 10 types of crypto
                        deposits to your account</h4>
                        <img className="mx-auto" src={cryptos} alt='cryptos' />
                    </div>
                </div>
            </div>
        </section>
    )
}


