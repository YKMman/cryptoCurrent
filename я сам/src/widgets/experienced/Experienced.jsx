
import phone from '../../../public/phone-2.png'

const Experienced = () => {
    return (
        <section className="my-[30px] minsm:my-[40px] relative after:absolute after:right-0 after:top-0 after:bg-phone after:w-[450px] after:h-[450px] after:bg-contain after:bg-no-repeat after:z-[-1] after:lg:w-[250px]">
            <div className="container">
                <div className="flex flex-col items-center gap-[15px] mb-[50px]">
                    <h2 className="text-white text-[32px] minmd:text-[52px] text-center">FOR EXPERIENCED TRADERS</h2>
                    <p className="text-white text-[26px] text-center">
                    Trade like a pro on MyAltCoins
                    </p>
                </div>
                <ul className="grid grid-cols-1  minlg:grid-cols-3 gap-[30px]">
                    <li className="flex-auto flex flex-col gap-[20px] items-center rounded-[8px] bg-banner border-[1px] border-tableBorder p-[20px] duration-300 hover:bg-hoverHeh hover:top-[-5px] backdrop-blur-[5.5px]">
                        <p className="text-center text-white">Powerfull</p>
                        <h3 className="text-green2 uppercase font-bold text-[26px] minmd:text-[56px]">API</h3>
                        <p className="text-center text-white">Customize your private functionality and get more options</p>
                    </li>
                    <li className="flex-auto flex flex-col gap-[20px] items-center rounded-[8px] bg-banner border-[1px] border-tableBorder p-[20px] duration-300 hover:bg-hoverHeh hover:top-[-5px] backdrop-blur-[5.5px]">
                        <p className="text-center text-white">Leverage</p>
                        <h3 className="text-green2 uppercase font-bold text-[26px] minmd:text-[56px]">5X</h3>
                        <p className="text-center text-white">Increase your personal income a few times faster</p>
                    </li>
                    <li className="flex-auto flex flex-col gap-[20px] items-center rounded-[8px] bg-banner border-[1px] border-tableBorder p-[20px] duration-300 hover:bg-hoverHeh hover:top-[-5px] backdrop-blur-[5.5px]">
                        <p className="text-center text-white">Accurate</p>
                        <h3 className="text-green2 uppercase font-bold text-[26px] minmd:text-[56px]">AML</h3>
                        <p className="text-center text-white">Make sure your addresses are not involved in money laundering</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Experienced
