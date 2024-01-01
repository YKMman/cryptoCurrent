import { Footer } from "../widgets/footer/Footer"
import { Header } from "../widgets/header/Header"
import Privacy from "../widgets/privacy/Privacy"

const PrivacyPage = () => {
    return (
        <div className="min-h-full flex flex-col">
            <Header/>
                <main className="flex-auto bg-history">
                    <Privacy/>
                </main> 
            <Footer/>
        </div>
    )
}

export default PrivacyPage
