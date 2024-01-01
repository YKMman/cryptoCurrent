import { TechnicalAnalysis } from "react-ts-tradingview-widgets";
import { Header } from '../widgets/header/Header';
import { Footer } from '../widgets/footer/Footer';
import { useEffect } from "react";

const MarketAnalysis = () => {

    const dataSymbols = [
        {
            coin: "BTCUSD"
        },
        {
            coin: "BTCUSDT"
        },
        {
            coin: "GBPJPY"
        },
        {
            coin: "AUDUSD"
        },
        {
            coin: "USDCAD"
        },
        {
            coin: "GBPUSD"
        },
        {
            coin: "AAPL"
        },
        {
            coin: "USDCHF"
        },
        {
            coin: "GBPAUD"
        }
    ]

    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
              const header = document.querySelectorAll('.tradingview-widget-copyright');
              header.forEach((el) => {
                if (el) {
                    el.remove();
                  }
              })
            }
          });
        });
       
        observer.observe(document.body, { childList: true, subtree: true });
       
        return () => observer.disconnect();
       }, []);


    return (
        <div className='min-h-full flex flex-col'>
            <Header/>
                <main className='flex-auto'>
                    <section className="py-[40px] bg-bgProfile bg-cover bg-center bg-no-repeat min-h-screen h-auto">
                        <div className="container flex items-start justify-center flex-col mx-auto text-center">
                            <ul className="grid grid-cols-3 ">
                            {
                                dataSymbols.map((el, index) => {
                                    return (
                                        <li key={index}>
                                            <TechnicalAnalysis colorTheme="dark" symbol={el.coin}></TechnicalAnalysis>
                                        </li>
                                    )
                                })
                            }
                            </ul>
                        </div>
                    </section>
                </main>
            <Footer/>
        </div>
    )
}

export default MarketAnalysis
