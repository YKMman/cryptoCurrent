import AmlKyc from "../widgets/amlkyc/AmlKyc"
import { Footer } from "../widgets/footer/Footer"
import { Header } from "../widgets/header/Header"

const AmlKycPage = () => {
    return (
        <div className="min-h-full flex flex-col">
            <Header/>
                <main className="flex-auto bg-history">
                    <AmlKyc/>
                </main>
            <Footer/>
        </div>
    )
}

export default AmlKycPage






