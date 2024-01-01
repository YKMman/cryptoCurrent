import { Link } from "react-router-dom"
import { RegistrationForm } from "../../components/form/registrationForm/RegistrationForm"





export const RegistrationSection = () => {
    return (
        <section className="relative after:absolute after:lg:hidden after:bg-bgForm after:bg-no-repeat after:bg-cover after:max-w-[60%] after:bg-left after:z-[0] after:h-screen after:left-0 after:right-0 after:top-0 after: after:bottom-0">
            <div className="container m-0 ml-auto pr-0 max-w-[50%] lg:mx-auto lg:px-[0px] lg:max-w-[100%]">
                <div className="relative z-[5] bg-regForm p-[20px] bg-no-repeat bg-cover h-screen flex items-center justify-center flex-col gap-[25px]">
                    <h2 className="text-white text-[45px] font-bold">Sign Up</h2>
                    <RegistrationForm/>
                    <div className="flex items-center gap-[10px]">
                        <span className="text-text">
                            Already have an account?
                        </span>
                        <Link to='/signin' className="text-green font-bold text-[22px] xs:text-[18px] duration-500 hover:text-green2">
                        Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}


