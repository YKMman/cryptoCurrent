import { Screener } from "react-ts-tradingview-widgets";
import { Header } from '../widgets/header/Header';
import { Footer } from '../widgets/footer/Footer';

const MarketScreenerPage = () => {
    return (
        <div className='min-h-full flex flex-col'>
            <Header/>
                <main className='flex-auto'>
                    <section className="py-[40px] bg-bgProfile bg-cover bg-center bg-no-repeat min-h-screen h-auto">
                        <div className="container flex items-start justify-center flex-col mx-auto text-center">
                            <Screener colorTheme="dark" width={1440} height={800}></Screener>
                        </div>
                    </section>
                </main>
            <Footer/>
        </div>
    )
}

export default MarketScreenerPage
