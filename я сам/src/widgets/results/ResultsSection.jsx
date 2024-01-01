export const ResultsSection = () => {
    return (
        <section className="mb-[60px]">
            <div className="container">
                <ul className="flex justify-around rounded-[8px] bg-banner border-[1px] border-tableBorder px-[50px] py-[60px] items-center duration-500 hover:bg-banner2 lg:justify-between lg:px-[25px] md:flex-col md:gap-[35px] md:py-[20px]">
                    <li className="text-center">
                        <h4 className="bg-h3First bg-clip-text text-transparent text-[45px] font-bold xs:text-[40px]">+50 256</h4>
                        <p className="text-white">Active traders</p>
                    </li>
                    <li className="text-center">
                        <h4 className="bg-h3Second bg-clip-text text-transparent text-[45px] font-bold xs:text-[40px]">+16 650 133</h4>
                        <p className="text-white">Trading volume per 7 days</p>
                    </li>
                    <li className="text-center">
                        <h4 className="bg-h3Thirty bg-clip-text text-transparent text-[45px] font-bold xs:text-[40px]">+1 256 250</h4>
                        <p className="text-white">Trading volume per day</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}


