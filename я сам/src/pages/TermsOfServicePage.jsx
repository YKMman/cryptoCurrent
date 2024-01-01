import { Footer } from "../widgets/footer/Footer"
import { Header } from "../widgets/header/Header"
import TermsOfServiceSection from "../widgets/terms/TermsOfServiceSection"

export const TermsOfServicePage = () => {
    return (
        <div className="min-h-full flex flex-col">
            <Header/>
                <main className="flex-auto bg-history">
                    <TermsOfServiceSection/>
                </main>
            <Footer/>
        </div>
    )
}


