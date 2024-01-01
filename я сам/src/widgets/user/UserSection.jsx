import { useSelector } from "react-redux"

import { userStore } from "../../store/user/userSlice"

import { Partners } from "./ui/Partners"
import { Table } from "./ui/Table"
import { Profie } from "./ui/Profie"


import bgwarning from '../../../public/profile/bg-svg.png'


export const UserSection = () => {
    const userInfo = useSelector(userStore)
    return (
        <section className="bg-bgProfile relative h-full bg-no-repeat bg-contain bg-center py-[60px]">
            <div className="container">
                <Profie userInfo={userInfo}/>
                <Table userInfo={userInfo}/>
                <div className="bg-banner2 p-[20px] rounded-[8px] border-[1px] border-tableBorder flex items-center justify-between gap-[20px] mb-[35px] sm:flex-col ">
                    <img className="max-w-[70px]" src={bgwarning} alt="warning" />
                    <span className="text-[18px] text-white">Attention! Your account is not secure enough, please enable two-factor authentication</span>
                    <button className="text-white py-[10px] px-[16px] bg-hoverMyAltCoins rounded-[8px] border-[1px] border-tableBorder duration-500 hover:bg-green">Enable</button>
                </div>
                <Partners/>
            </div>
        </section>
    )
}


