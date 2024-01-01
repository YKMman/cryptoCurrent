import { Footer } from "../widgets/footer/Footer"
import { Header } from "../widgets/header/Header"
import Policy from "../widgets/policy/Policy"

const PolicyPage = () => {
    return (
        <div className="min-h-full flex flex-col">
            <Header/>
                <main className="flex-auto bg-history">
                    <Policy/>
                </main>
            <Footer/>
        </div>
    )
}

export default PolicyPage
