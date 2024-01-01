export const HistorySection = () => {
    return (
        <section className="bg-bgProfile relative h-full bg-no-repeat bg-contain bg-center my-[60px]">
            <div className="container">
                <h2 className="text-white text-left mb-[15px] text-[32px] font-medium">History Of Deposits & Withdraws</h2>
                <div className="bg-history flex flex-col md:overflow-x-scroll">
                    <div className="grid grid-cols-5 justify-between pb-[15px] border-b-[1px] border-green gap-[25px] text-white px-[30px] py-[20px] md:min-w-max">
                        <span className="inline-block bg-green w-fit py-[5px] px-[25px] rounded-[8px] m-auto">
                            ID
                        </span>
                        <span className="inline-block bg-green w-fit py-[5px] px-[25px] rounded-[8px] m-auto">
                            Time
                        </span>
                        <span className="inline-block bg-green w-fit py-[5px] px-[25px] rounded-[8px] m-auto">
                            Coin
                        </span>
                        <span className="inline-block bg-green w-fit py-[5px] px-[25px] rounded-[8px] m-auto">
                            Amount
                        </span>
                        <span className="inline-block bg-green w-fit py-[5px] px-[25px] rounded-[8px] m-auto">
                            Status
                        </span>
                    </div>
                    <div className="min-h-[425px] flex flex-col justify-center items-center">
                        <span className="text-white text-[22px] ">No transactions found</span>
                    </div>
                </div>
            </div>
        </section>
    )
}


