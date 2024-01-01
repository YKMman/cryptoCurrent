/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import btc from '../../../../public/btc.png'
import eth from '../../../../public/eth.png'
import bnb from '../../../../public/bnb.png'
import usdc from '../../../../public/usdc.png'
import usdt from '../../../../public/usdt.png'
import sol from '../../../../public/sol.png'



// eslint-disable-next-line react/prop-types
export const Table = ({userInfo}) => {
    return (
        <div className="mb-[25px] backdrop-blur-[5.5px]">   
            <div className="text-tableText rounded-[8px] bg-banner2 border-[1px] border-tableBorder overflow-hidden">
                <div className="grid minmd:grid-cols-5 minsm:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2  font-bold text-[13px] py-[15px] px-[30px] sm:px-[10px] border-b-[1px] border-tableBorder ">
                    <span className="opacity-0 font-bold"></span>
                    <span className="text-center md:hidden font-bold">SPOT BALANCE</span>
                    <span className="text-center sm:hidden font-bold">ON ORDERS</span>
                    <span className="text-center xs:hidden font-bold">AVAILABLE BALANCE</span>
                    <span className="text-center font-bold">TOTAL BALANCE</span>
                </div>
                <div className="grid minmd:grid-cols-5 minsm:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 py-[15px] px-[30px] border-b-[1px] sm:px-[10px] border-tableBorder">
                    <div className="flex items-center gap-[10px]">
                        <img className="max-w-[35px]" src={btc} alt='btc'/>
                        <span className='font-bold'>
                            Bitcoin
                        </span>
                    </div>
                    <div className="flex flex-col text-center md:hidden font-bold">
                        <span>{userInfo.Wallet.BTC} BTC </span>
                        <span className="text-green2">{userInfo.Wallet.USD} USD</span>
                    </div>
                    <div className="flex flex-col text-center sm:hidden font-bold">
                        <span>{userInfo.Wallet.BTC} BTC</span>
                        <span className="text-green2">{userInfo.Wallet.USD} USD</span>
                    </div>
                    <div className="flex flex-col text-center xs:hidden font-bold">
                        <span>{userInfo.Wallet.BTC} BTC</span>
                        <span className="text-green2">{userInfo.Wallet.USD} USD</span>
                    </div>
                    <div className="flex flex-col text-center font-bold">
                        <span>{userInfo.Wallet.BTC} BTC</span>
                        <span className="text-green2">{userInfo.Wallet.USD} USD</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

