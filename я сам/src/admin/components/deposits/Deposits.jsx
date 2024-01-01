

const Deposits = () => {
    return (
        <div className="w-full">
                <div className="bg-[#17181c] p-[20px] inline-flex flex-col gap-[10px] rounded-[16px] w-full text-white">
                    <h2 className="text-[#33a0ad] mb-[10px] text-[20px] font-semibold">Deposit list</h2>
                <div className="grid grid-cols-7 px-[20px] border-b-[1px] border-[#1e2126] pb-[10px]">
                    <span >ID</span>
                    <span >STATUS</span>
                    <span >USER</span>
                    <span>COIN</span>
                    <span>AMOUNT</span>
                    <span>ADDRESS</span>
                    <span>DATE</span>
                </div>
                <div className="grid grid-cols-7 px-[20px] items-center">
                    <span >6565</span>
                    <span className="bg-[#197c58] py-[2px] px-[9px] w-fit flex items-start justify-center">SUCCESS</span>
                    <span >Zakizer12</span>
                    <span>usdt.trc20</span>
                    <span >107.67</span>
                    <span>TSJrnTGiKcXgSN78ximaprP8fv7wDtu1Hm</span>
                    <span>2023.12.03 20:15</span>
                </div>
            </div>
        </div>
    )
}

export default Deposits
