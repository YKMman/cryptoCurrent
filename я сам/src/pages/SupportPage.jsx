import SupportSection from "../widgets/support/Support"
import { Footer } from "../widgets/footer/Footer"
import { Header } from "../widgets/header/Header"

const SupportPage = () => {
    return (
        <div className="min-h-full flex flex-col">
            <Header/>
                <main className="flex-auto">
                    <SupportSection/>
                </main>
            <Footer/>
        </div>
    )
}

export default SupportPage
