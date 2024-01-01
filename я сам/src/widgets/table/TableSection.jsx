

import { MarketTrends } from "../../components/marketTrends/MarketTrends"




export const TableSection = () => {



    return (
        <section className="py-[50px] relative z-10 backdrop-blur-[5.5px] after:bg-circleTable after:right-0 after:absolute after:top-[15px] after:bg-contain after:w-[600px] after:h-[910px] after:bg-no-repeat md:after:w-[320px]">
            <div className="container">
                <h2 className="text-[50px] text-white font-medium text-center minsm:text-[40px] mb-[20px] sm:text-[35px]">MARKET TRENDS</h2>
                <p className="text-left text-white text-[35px] mb-[35px] minsm:text-[30px] sm:text-[25px] sm:mb-[15px]">Market Update</p>
                <MarketTrends/>
            </div>
        </section>
    )
}

