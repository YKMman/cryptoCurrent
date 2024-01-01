

const VerificationSection = () => {
    return (
        <section className="bg-bgProfile relative h-full bg-no-repeat bg-contain bg-center my-[60px]">
            <div className="container">
                <div className="bg-staking2 p-[20px] rounded-[8px] mb-[40px]">
                    <h2 className="text-white text-[32px]">KYC verification</h2>
                </div>
                <div className="bg-staking2 rounded-[8px] p-[20px]">
                    <div className="">
                        <h2 className="text-white text-[26px] mb-[20px] pb-[20px] border-b-[1px] border-green">Personal Information</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-[30px] mb-[30px] sm:grid-cols-1">
                        <div className="flex flex-col gap-[30px]">
                            <label className="flex flex-col gap-[10px] text-white">
                                <span className="text-[22px] md:text-[16px]">First name</span>
                                <input type='text'  className="p-[10px] bg-input outline-none" disabled/>
                            </label>
                            <label className="flex flex-col gap-[10px] text-white">
                                <span className="text-[22px] md:text-[16px]">Select country</span>
                                <input type='text' className="p-[10px] bg-input outline-none"/>
                            </label>
                            <label className="flex flex-col gap-[10px] text-white">
                                <span className="text-[22px] md:text-[16px]">Phone number</span>
                                <input type='number' className="p-[10px] bg-input outline-none"/>
                            </label>
                            <label className="flex flex-col gap-[10px] text-white">
                                <span className="text-[22px] md:text-[16px]">Select ID type</span>
                                <input type='text' className="p-[10px] bg-input outline-none"/>
                            </label>
                        </div>
                        <div className="flex flex-col gap-[30px]">
                            <label className="flex flex-col gap-[10px] text-white">
                                <span className="text-[22px] md:text-[16px]">Last name</span>
                                <input type='text'  className="p-[10px] bg-input outline-none" disabled/>
                            </label>
                            <label className="flex flex-col gap-[10px] text-white">
                                <span className="text-[22px] md:text-[16px]">Address</span>
                                <input type='text' className="p-[10px] bg-input outline-none"/>
                            </label>
                            <label className="flex flex-col gap-[10px] text-white">
                                <span className="text-[22px] md:text-[16px]">Date of birth</span>
                                <input type='date' className="p-[10px] bg-input outline-none"/>
                            </label>
                            <label className="flex flex-col gap-[10px] text-white">
                                <span className="text-[22px] md:text-[16px]">ID number</span>
                                <input type='number' className="p-[10px] bg-input outline-none"/>
                            </label>
                        </div>
                    </div>
                    <button className="bg-selectMenu py-[10px] text-white text-[18px] max-w-[320px] m-auto w-full text-center block hover:shadow-xl duration-500">Submit for review</button>
                </div>
            </div>
        </section>
    )
}

export default VerificationSection
