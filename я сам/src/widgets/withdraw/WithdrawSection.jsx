import { useState } from 'react'
import BTCUSDT from '../../../public/btc.png'
import ETHEREUM from '../../../public/eth.png'
import USDS from '../../../public/usdc.png'

const data = [
    {
        coin: 'BTC',
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

export const WithdrawSection = () => {
    const [active, setActive] = useState(0)




    return (
        <section className="bg-bgProfile relative h-full bg-no-repeat bg-contain bg-center py-[120px] md:py-[60px]">
            <div className="container flex gap-[40px] items-start justify-center md:flex-col md:items-center md:gap-y-[60px]">
                    <ul className='flex flex-col gap-[10px] pr-[10px] max-w-[300px] w-full lg:items-start h-[425px] overflow-y-scroll scrollbar-thumb-green scrollbar-track-darkGreen scrollbar-thin md:p-[20px] md:bg-withdraw minmd:rounded-[3px] md:overflow-hidden md:rounded-[13px]'>
                        {
                            data.map((el, index) => {
                                if (index == 0) {
                                    return (
                                        <li key={index} className={`cursor-pointer flex items-center gap-[10px] max-w-[275px] w-full py-[5px] px-[10px] rounded-[4px] ${active == index ? 'bg-green' : 'bg-withdrawBtn'}`} onClick={() => setActive(index)}>
                                            <img className='max-w-[25px]' src={el.img} alt={el.coin}/>
                                            <span className='text-[14px] font-semibold text-white'>{el.coin} Bank card USD</span>
                                        </li>
                                    )
                                }
                                return (
                                    <li key={index} className={`cursor-pointer flex items-center gap-[10px] max-w-[275px] w-full py-[5px] px-[10px] rounded-[4px] ${active == index ? 'bg-green' : 'bg-withdrawBtn'}`} onClick={() => setActive(index)}>
                                        <img className='max-w-[25px]' src={el.img} alt={el.coin}/>
                                        <span className='text-[14px] font-semibold text-white'>{el.coin}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>

                        {
                            active == 0 ?
                            <div className='w-full bg-withdraw p-[20px] rounded-[3px]'>
                                <h2 className='text-white text-[32px] mb-[30px] md:text-center'>Withdraw Bank card USD</h2>
                                <div className='max-w-[625px] m-auto flex flex-col gap-[40px] mb-[30px]'>
                                    <div className='flex items-center justify-between gap-[20px] xs:flex-col xs:gap-[10px]'>
                                        <div className='flex flex-col text-left w-full'>
                                            <h3 className='text-green2 text-[22px] '>Card Number</h3>
                                            <span className='text-white text-[12px]'>Please double check card number</span>
                                        </div>
                                        <label className='w-full'>
                                            <input className='py-[5px] px-[10px] bg-inputBlet text-white border-[1px] border-green rounded-[3px]' type='text' placeholder='Card Number'/>
                                        </label>
                                    </div>
                                    <div className='flex items-center justify-between gap-[20px] xs:flex-col xs:gap-[10px]'>
                                        <div className='flex flex-col text-left w-full'>
                                            <h3 className='text-green2 text-[22px] '>Card Holder</h3>
                                            <span className='text-white text-[12px]'>Please enter Name and Surname</span>
                                        </div>
                                        <label className='cursor-pointer w-full'>
                                            <input className='py-[5px] px-[10px] bg-inputBlet text-white border-[1px] border-green rounded-[3px]' type='text' placeholder='John Doe'/>
                                        </label>
                                    </div>
                                    <div className='flex items-center justify-between gap-[20px] xs:flex-col xs:gap-[10px]'>
                                        <div className='flex flex-col  text-left w-full'>
                                            <h3 className='text-green2 text-[22px] '>Expiration date</h3>
                                            <span className='text-white text-[12px]'>Please select Month and Year</span>
                                        </div>
                                        <label className='cursor-pointer w-full'>
                                            <input className='py-[5px] px-[10px] bg-inputBlet text-white border-[1px] border-green rounded-[3px]' type='date' required placeholder="YYYY-MM-DD"/>
                                        </label>
                                    </div>
                                    <div className='flex items-center justify-between gap-[20px] xs:flex-col xs:gap-[10px]'>
                                        <div className='flex flex-col text-left w-full'>
                                            <h3 className='text-green2 text-[22px] '>Enter amount ($)</h3>
                                            <span className='text-white text-[12px]'>Enter amount</span>
                                        </div>
                                        <div className='flex items-start gap-[20px] w-full'>
                                            <label className='cursor-pointer w-full'>
                                                <input className='py-[5px] px-[10px] bg-inputBlet text-white max-w-[125px] border-[1px] border-green rounded-[3px] xs:max-w-full xs:w-full' type='number' placeholder='0.00$' />
                                            </label>
                                            <label className='cursor-pointer w-full'>
                                                <input className='py-[5px] px-[10px] bg-inputBlet text-white max-w-[75px] border-[1px] border-green rounded-[3px] xs:max-w-full xs:w-full' type='text' placeholder='Fee' value='' disabled/>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <button className="block ml-auto bg-withdrawBtn text-[12px] py-[10px] px-[10px] duration-300 hover:bg-hoverMyAltCoins max-w-[235px] w-full text-center mb-[15px] border-[0.2px] border-myAltCoins rounded-[3px] text-[#c9dbd8]">Withdraw to card</button>
                            </div>
                                        :
                                    <div className='flex flex-col items-start justify-start md:items-center'>
                                        <h2 className='text-white text-[32px] mb-[15px] md:text-center md:text-[26px]'>Withdraw {data[active].coin}</h2>
                                        <div className='flex items-start minlg:gap-[40px] md:flex-col md:items-center lg:gap-[20px] lg:flex-col'>
                                            <div className='flex flex-col bg-withdraw rounded-[3px] p-[15px] max-w-[425px] w-full md:max-w-full minmd:min-w-[425px] sm:min-w-[300px]'>
                                                <h3 className='text-center text-white text-[26px] font-bold pb-[10px] border-b-[1px] border-green mb-[35px] md:text-[22px]'>Withdraw Crypto</h3>
                    
                                                <span className="text-[#868686] text-[12px] mb-[5px] font-sans">Destination address</span>
                                                <label className='mb-[40px] cursor-pointer'>
                                                    <input type='text' placeholder='Please enter destination address' className='bg-inputBlet rounded-[3px] py-[5px] px-[10px] w-full border-[1px] border-green text-white'/>
                                                </label>
                                                <span className="text-[#868686] text-[12px] mb-[5px] font-sans">Amount</span>
                                                <label className='mb-[40px] cursor-pointer'>
                                                    <input type='number' placeholder='Please enter amount' className='bg-inputBlet rounded-[3px] py-[5px] px-[10px] w-full border-[1px] border-green text-white'/>
                                                </label>
                    
                                                <span className="w-fit mb-[15px] flex items-center gap-[10px] text-[14px] text-white">Available: 
                                                    <span className="font-bold text-green2 text-[18px] uppercase">
                                                    {data[active].coin}
                                                    </span>
                                                </span>
                    
                                                <button className="bg-withdrawBtn text-[12px] py-[10px] px-[10px] mx-auto duration-300 hover:bg-hoverMyAltCoins max-w-[235px] w-full text-center mb-[15px] border-[0.2px] border-myAltCoins rounded-[3px] text-[#c9dbd8]">Withdraw</button>
                                            </div>
                                            <div className='flex flex-col bg-withdraw p-[15px] gap-[35px] rounded-[3px] max-w-[425px] lg:hidden'>
                                                <h3 className='text-center text-white text-[26px] font-bold pb-[10px] border-b-[1px] border-green md:text-[22px]'>Important Information</h3>
                                                <p className='text-left text-white p-[20px] text-[15px]'>
                                                    We strongly recommend that you copy & paste the address to help avoid errors. Please note that we are not responsible for coins mistakenly sent to the wrong address.
                                                </p>
                                                <p className='text-left text-white p-[20px] text-[15px]'>
                                                    Transactions normally take about 30 to 60 minutes to send, on occasion it can take a few hours if the crypto network is slow.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                        }

            </div>
        </section>
    )
}


