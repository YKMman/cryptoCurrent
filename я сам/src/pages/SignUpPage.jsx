import { Footer } from "../widgets/footer/Footer"
import { Header } from "../widgets/header/Header"
import { RegistrationSection } from "../widgets/registration/RegistrationSection"

export const SignUpPage = () => {
    return (
        <div className="min-h-full flex flex-col">
            <Header/>
                <main className="flex-auto">
                    <RegistrationSection/>
                </main>
            <Footer/>
        </div>
    )
}


