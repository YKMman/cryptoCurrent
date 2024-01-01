import { AuthorizationSection } from "../widgets/authorization/AuthorizationSection"
import { Footer } from "../widgets/footer/Footer"
import { Header } from "../widgets/header/Header"

export const SignInPage = () => {
    return (
        <div className="min-h-full flex flex-col">
            <Header/>
                <main className="flex-auto">
                    <AuthorizationSection/>
                </main>
            <Footer/>
        </div>
    )
}


