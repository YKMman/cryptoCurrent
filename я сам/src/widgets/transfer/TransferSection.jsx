import { useState } from "react"
import { useForm } from "react-hook-form"
import { transferApi } from "../../api/transferApi"


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

export const TransferSection = () => {
    const { register, handleSubmit, watch } = useForm()

    const [select, setSelect] = useState(false)
    const [activeSelect, setActiveSelect] = useState(0)

    const handleSelect = (index) => {
        setActiveSelect(index)
        setSelect((prev) => !prev)
    }


    const onSubmit = (data) => {
        console.log(data)
        // transferApi(data)
        // .then((response) => console.log(response))
        // .catch((error) => console.error(error))
    }


    return (
        <section className="bg-bgProfile relative h-full bg-no-repeat bg-contain bg-center my-[60px]">
            <div className="container text-white flex items-center gap-[50px] justify-center md:flex-col md:items-center md:gap-[25px]">
                <div className="flex flex-col gap-[15px]">
                    <h2 className="text-white text-[32px]">Transfer</h2>
                    <div className="bg-withdraw p-[15px] flex flex-col rounded-[8px]">
                            <span className="bg-withdrawBtn text-[12px] py-[2px] px-[10px] text-center w-fit mb-[15px] border-[0.2px] border-myAltCoins rounded-[3px] text-[#c9dbd8]">Select coin</span>

                            <div className="relative mb-[40px] border-[1px] border-green2">
                                {
                                    <div onClick={() => setSelect((prev) => !prev)} className="bg-withdraw p-[10px] flex items-center gap-[10px] backdrop-blur-[5.5px] rounded-[3px]">
                                        <img className="max-w-[35px]" src={data[activeSelect].img} alt='coin'/>
                                        <span className="font-bold text-[20px]">{data[activeSelect].coin}</span>
                                    </div>
                                }
                                {
                                    select && 
                                    <ul className="absolute left-0 right-0 bg-select backdrop-blur-[20px] shadow-lg py-[20px] z-10 translate-y-[10px] rounded-[3px] flex flex-col max-h-[220px] overflow-y-scroll scrollbar-thumb-green scrollbar-track-darkGreen scrollbar-thin">
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
                            
                            <span className="bg-withdrawBtn text-[12px] py-[2px] px-[10px] text-center w-fit mb-[15px] border-[0.2px] border-myAltCoins rounded-[3px] text-[#c9dbd8]">Recipient email / ID</span>
                            <span className="text-[#868686] text-[12px] mb-[15px] font-sans">Enter the recipient email or account ID of the other user</span>

                            <label className="mb-[40px]">
                                <input type='text' placeholder="Enter Accound ID or Email" className="text-center bg-table text-white placeholder:text-white font-bold w-full p-[5px]"/>
                            </label>

                            <span className="bg-withdrawBtn text-[12px] py-[2px] px-[10px] text-center w-fit mb-[15px] border-[0.2px] border-myAltCoins rounded-[3px] text-[#c9dbd8]">Amount</span>
                            <span className="text-[#868686] text-[12px] mb-[15px] font-sans">Enter the amount to transfer</span>
                            
                            <label className="mb-[40px] w-full">
                                <input type='number' placeholder="0" className="text-center bg-table text-white placeholder:text-white font-bold w-full p-[5px]"/>
                            </label>

                            <span className="w-fit mb-[15px] flex items-center gap-[5px] text-[14px]">Available: 
                                <span className=" text-green2 text-[18px] font-bold">
                                {data[activeSelect].coin}
                                </span>
                            </span>

                            <button className="bg-withdrawBtn text-[16px] py-[10px] px-[35px] text-center w-fit mb-[15px] mx-auto border-[0.2px] border-myAltCoins rounded-[3px] text-[#c9dbd8]">Submit transfer</button>

                        </div>
                </div>

                <div className="flex flex-col gap-[35px]">
                    <div className="flex flex-col">
                        <h3 className="text-center mb-[22px] text-[26px] font-bold">Important information</h3>
                        <div className="flex flex-col bg-withdraw p-[35px] gap-[20px] rounded-[8px]">
                            <span className="text-left max-w-[625px] text-[14px] text-text xs:text-[14px] inline-block">The recipient (another MyAltCoins user) will instantly receive your transfer.
                            They may find the record in [Transaction History]</span>
                            <span className="text-left max-w-[625px] text-[14px] text-text xs:text-[14px] inline-block">Please note that for internal transfer within MyAltCoins, no TxID in
                            blockchain will be created</span>
                        </div>
                    </div>
                    <div className="bg-withdraw p-[15px] rounded-[8px]">
                        <span className="text-center max-w-[625px] text-[14px] text-text xs:text-[14px] inline-block mb-[15px]">Please note the network fee will only be charged for withdrawals to non-
                        MyAltCoins addresses. If the recipient address is correct and belongs to a
                        MyAltCoins account, the network fee will not be deducted.</span>
                        <img className="mx-auto" src={cryptos} alt='cryptos' />
                    </div>
                </div>
            </div>
            <div className="container mt-[120px]">
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


