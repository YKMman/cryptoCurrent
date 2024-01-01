import { TradeSection } from "../widgets/trade/TradeSection"
import { Footer } from "../widgets/footer/Footer"
import { Header } from "../widgets/header/Header"

export const TradingPage = () => {
    return (
        <div className="min-h-full flex flex-col ">
            <Header/>
                <main className="flex-auto bg-history">
                    <TradeSection/>
                </main>
            <Footer/>
        </div>
    )
}


