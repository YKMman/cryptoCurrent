import mastercard from '../../../public/depositCard/MasterCard.png'
import visa from '../../../public/depositCard/Visa.png'
import paypal from '../../../public/depositCard/PayPal.png'
import pay from '../../../public/depositCard/ApplePay.png'

import transak from '../../../public/depositCard/transak.png'
import simplex from '../../../public/depositCard/simplex.png'
import ramp from '../../../public/depositCard/ramp.png'
import moonpay from '../../../public/depositCard/moonpay.png'
import { Link } from 'react-router-dom'

const DepositCard = () => {
    return (
        <section className="h-auto pb-[80px] bg-depositCard pt-[40px] after:bg-cover after:bg-center relative z-[10] after:bg-depositCardBg after:left-0 after:right-0 after:top-[0px] after:bottom-0 after:absolute after:z-[-1]">
            <div className="container">
                <div className='flex flex-col gap-[20px] pb-[20px] border-b-[1px] border-green2 w-fit text-white justify-center items-center mx-auto mb-[40px]'>
                    <h2 className='text-[46px] font-semibold text-center md:text-[32px]'>Buy Crypto in One Click</h2>
                    <h3 className='text-[42px] text-center md:text-[26px]'>Pay with the currency and payment method of your choice.</h3>
                </div>
                <div className='mb-[80px] md:mb-[40px]'>
                    <ul className='px-[20px] rounded-[8px] grid grid-cols-4 gap-[20px] w-fit justify-center mx-auto items-center bg-[#1436367d]'>
                        <li>
                            <img src={mastercard} alt='mastercard' />
                        </li>
                        <li>
                            <img src={visa} alt='visa' />
                        </li>
                        <li>
                            <img src={paypal} alt='paypal' />
                        </li>
                        <li>
                            <img src={pay} alt='pay' />
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='grid grid-cols-1 gap-[60px]'>
                        <li className='flex flex-col items-center gap-[20px] pb-[20px] border-b-[1px] border-green2'>
                            <div className='flex items-center gap-[60px] justify-between w-full md:flex-col md:gap-[20px]'>
                                <div>
                                    <img src={transak} alt='transak' />
                                </div>
                                <div className='bg-[#1436367d] px-[20px] py-[20px] rounded-[8px] flex flex-col gap-[10px] w-full max-w-[1120px]'>
                                    <h3 className='text-white text-[32px] md:text-[22px]'>Buy Crypto with Transak</h3>
                                    <p className='text-white text-[16px]'>Transak supports credit & debit cards, Apple Pay, MobiKwik, and bank transfers (depending on location) in 100+ countries.</p>
                                </div>
                            </div>
                            <Link className='block bg-depositCardTransak text-white py-[16px] px-[24px] rounded-[8px] border-[1px] border-green2 w-fit ml-auto duration-300 hover:bg-green' to='/'>
                                Continue to Transak
                            </Link>
                        </li>
                        <li className='flex flex-col items-center gap-[20px] pb-[20px] border-b-[1px] border-green2'>
                            <div className='flex items-center gap-[60px] justify-between w-full md:flex-col md:gap-[20px]'>
                                <div>
                                    <img src={simplex} alt='simplex' />
                                </div>
                                <div className='bg-[#1436367d] px-[20px] py-[20px] rounded-[8px] flex flex-col gap-[10px] w-full max-w-[1120px]'>
                                    <h3 className='text-white text-[32px] md:text-[22px]'>Buy Crypto with Transak</h3>
                                    <p className='text-white text-[16px]'>Transak supports credit & debit cards, Apple Pay, MobiKwik, and bank transfers (depending on location) in 100+ countries.</p>
                                </div>
                            </div>
                            <Link className='block bg-depositCardTransak text-white py-[16px] px-[24px] rounded-[8px] border-[1px] border-green2 w-fit ml-auto duration-300 hover:bg-green' to='/'>
                                Continue to Transak
                            </Link>
                        </li>
                        <li className='flex flex-col items-center gap-[20px] pb-[20px] border-b-[1px] border-green2'>
                            <div className='flex items-center gap-[60px] justify-between w-full md:flex-col md:gap-[20px]'>
                                <div>
                                    <img src={ramp} alt='ramp' />
                                </div>
                                <div className='bg-[#1436367d] px-[20px] py-[20px] rounded-[8px] flex flex-col gap-[10px] w-full max-w-[1120px]'>
                                    <h3 className='text-white text-[32px] md:text-[22px]'>Buy Crypto with Transak</h3>
                                    <p className='text-white text-[16px]'>Transak supports credit & debit cards, Apple Pay, MobiKwik, and bank transfers (depending on location) in 100+ countries.</p>
                                </div>
                            </div>
                            <Link className='block bg-depositCardTransak text-white py-[16px] px-[24px] rounded-[8px] border-[1px] border-green2 w-fit ml-auto duration-300 hover:bg-green' to='/'>
                                Continue to Transak
                            </Link>
                        </li>
                        <li className='flex flex-col items-center gap-[20px] pb-[20px] border-b-[1px] border-green2'>
                            <div className='flex items-center gap-[60px] justify-between w-full md:flex-col md:gap-[20px]'>
                                <div>
                                    <img src={moonpay} alt='moonpay' />
                                </div>
                                <div className='bg-[#1436367d] px-[20px] py-[20px] rounded-[8px] flex flex-col gap-[10px] w-full max-w-[1120px]'>
                                    <h3 className='text-white text-[32px] md:text-[22px]'>Buy Crypto with Transak</h3>
                                    <p className='text-white text-[16px]'>Transak supports credit & debit cards, Apple Pay, MobiKwik, and bank transfers (depending on location) in 100+ countries.</p>
                                </div>
                            </div>
                            <Link className='block bg-depositCardTransak text-white py-[16px] px-[24px] rounded-[8px] border-[1px] border-green2 w-fit ml-auto duration-300 hover:bg-green' to='/'>
                                Continue to Transak
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default DepositCard
