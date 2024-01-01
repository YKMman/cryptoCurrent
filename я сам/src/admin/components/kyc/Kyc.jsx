

const Kyc = () => {
    return (
        <div className="w-full">
                            <div className="bg-[#17181c] p-[20px] inline-flex flex-col gap-[10px] rounded-[16px] w-full text-white">
                    <h2 className="text-[#33a0ad] mb-[10px] text-[20px] font-semibold">KYC list</h2>
                <div className="grid grid-cols-5 px-[20px] border-b-[1px] border-[#1e2126] pb-[10px]">
                    <span >ID</span>
                    <span >STATUS</span>
                    <span >USERNAME</span>
                    <span>DATE</span>
                    <span>ACTIONS</span>
                </div>
                <div className="grid grid-cols-5 px-[20px] items-center">
                    <span >781</span>
                    <span className="bg-[#197c58] py-[2px] px-[9px] w-fit flex items-start justify-center">CHECKED</span>
                    <span >nimalone</span>
                    <span>2023.12.02 17:59</span>
                    <div className="flex flex-col gap-[3px]">
                    <button className="bg-adminBtnRemove py-[6px] px-[15px] text-[15px] rounded-[5px] w-fit text-white duration-300 hover:opacity-[0.56]">Delete</button>
                    <button className="bg-adminBtn py-[6px] px-[15px] text-[15px] rounded-[5px] w-fit text-white duration-300 hover:opacity-[0.56]">View</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kyc
