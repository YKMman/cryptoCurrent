import { Footer } from "../widgets/footer/Footer"
import { Header } from "../widgets/header/Header"
import P2P from "../widgets/p2p/P2P"


const P2PPage = () => {
    return (
        <div className="min-h-full flex flex-col">
            <Header/>
                <main className="flex-auto">
                    <P2P/>
                </main>
            <Footer/>
        </div>
    )
}

export default P2PPage
