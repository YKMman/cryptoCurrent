import { Footer } from "../widgets/footer/Footer"
import { Header } from "../widgets/header/Header"


import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";

const MarketCryptoPage = () => {


    return (
        <div className="min-h-full flex flex-col">
            <Header/>
                <main className="flex-auto">
                    <section className="py-[40px] bg-bgProfile bg-cover bg-center bg-no-repeat min-h-screen h-auto">
                        <div className="container flex items-start justify-center flex-col mx-auto text-center">
                            <CryptoCurrencyMarket colorTheme="dark" width={1440} height={800}></CryptoCurrencyMarket>
                        </div>
                    </section>
                </main>
            <Footer/>
        </div>
    )
}

export default MarketCryptoPage


