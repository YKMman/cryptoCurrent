/* eslint-disable react/prop-types */
import logo from '../../../../public/profile/profile.png'



// eslint-disable-next-line react/prop-types
export const Profie = ({userInfo}) => {

    return (
        <div className="container mb-[25px] backdrop-blur-[5.5px]">
        <img src={logo} alt='avatar' className="m-auto max-w-[175px] bg-cover mb-[15px]"/>
        <div className="flex flex-col mb-[15px] p-[5px] justify-center items-center min-w-[155px] max-w-[425px] flex-wrap w-fit m-auto bg-banner2 border-[1px] rounded-[8px] border-tableBorder">
            <span className="text-white font-bold text-[22px]">
                {userInfo.Login}
            </span>
            <div className="text-green2 font-bold">
                <span>
                    {userInfo.Wallet.BTC}$
                </span>
                ~
                <span>
                    {userInfo.Wallet.USD}$
                </span>
            </div>
        </div>
        <div className="flex-wrap flex items-center text-center justify-center gap-[15px] max-w-[575px] w-full m-auto text-white">
            <div className="min-w-[175px] bg-banner2 py-[5px] px-[15px] rounded-[8px] border-[1px] border-tableBorder ">
                2FA
            </div>
            <div className="min-w-[175px] bg-banner2 py-[5px] px-[15px] rounded-[8px] border-[1px] border-tableBorder">
                KYC Verification
            </div>
            <div className="min-w-[175px] bg-banner2 py-[5px] px-[15px] rounded-[8px] border-[1px] border-tableBorder">Premium</div>
            <div className="min-w-[175px] bg-activatedBanner py-[5px] px-[15px] rounded-[8px] border-[1px] border-tableBorder cursor-pointer duration-300 hover:translate-y-[-5px] hover:bg-hoverMyAltCoins" >
                ACTIVATE PROMO CODE
            </div>
            <div className="min-w-[175px] bg-activatedBanner py-[5px] px-[15px] rounded-[8px] border-[1px] border-tableBorder cursor-pointer duration-300 hover:translate-y-[-5px] hover:bg-hoverMyAltCoins">ACTIVATE 2FA</div>
        </div>
    </div>
    )
}


