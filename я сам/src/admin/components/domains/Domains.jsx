import { Link } from "react-router-dom"

const Domains = () => {
    return (
        <div className="w-full">
                    <div className="bg-[#17181c] p-[20px] inline-flex flex-col gap-[10px] rounded-[16px] w-full text-white">
                    <h2 className="text-[#33a0ad] mb-[10px] text-[20px] font-semibold">Domains list</h2>
                <div className="grid grid-cols-5 px-[20px] border-b-[1px] border-[#1e2126] pb-[10px]">
                    <span >#</span>
                    <span >DOMAIN NAME</span>
                    <span >DOMAIN SHORT NAME</span>
                    <span>DATE</span>
                    <span>ACTIONS</span>
                </div>
                <div className="grid grid-cols-5 px-[20px]">
                    <span >1</span>
                    <span >myaltcoins.org 
                        <Link to='/myaltcoins.org '>
                            open
                        </Link>
                    </span>
                    <span >MyAltCoins</span>
                    <span>2023.08.21 14:51</span>
                    <button className="bg-adminBtn py-[6px] px-[15px] text-[15px] rounded-[5px] w-fit text-white duration-300 hover:opacity-[0.56]">View</button>
                </div>
            </div>
        </div>
    )
}

export default Domains
