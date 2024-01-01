import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarthAsia, faLayerGroup, faMoneyBillTransfer, faRightFromBracket, faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { faTelegram } from "@fortawesome/free-brands-svg-icons"
import { faCircleUser, faComment, faFolderClosed, faIdCard, faUser } from "@fortawesome/free-regular-svg-icons"



const Sidebar = () => {
    return (
        <div className="text-white inline-flex flex-col bg-[#17181c] px-[20px] pb-[20px] h-full max-w-[250px] w-full h-screen">
            <div className="flex items-center gap-[10px] text-[12px] py-[20px] justify-between">
                <p className="text-white font-semibold">WORKER PANEL</p>
                <p className="text-[#33a0ad] font-semibold">V3.1 STABLE</p>
            </div>
            <div className="bg-[#121316] py-[16px] px-[20px] rounded-[13px] mb-[20px]">
                <div className="flex items-center gap-[15px]">
                <FontAwesomeIcon icon={faCircleUser} />
                <span>
                    ChycheloLove
                </span>
                </div>
            </div>
            <nav>
                <ul className="flex flex-col items-start">
                    <li className="w-full">
                        <Link to='/admin/binding'  className={`flex items-center gap-[15px] hover:bg-[#141416] w-full py-[10px] px-[16px]`} >
                        <FontAwesomeIcon icon={faLayerGroup} />
                            Binding
                        </Link>
                    </li>
                    <li className="w-full">
                        <Link to='/admin/telegram' className="flex items-center gap-[15px] hover:bg-[#141416] w-full py-[10px] px-[16px]">
                        <FontAwesomeIcon icon={faTelegram} />
                            Telegram
                        </Link>
                    </li>
                    <li className="w-full">
                        <Link to='/admin/users' className="flex items-center gap-[15px] hover:bg-[#141416] w-full py-[10px] px-[16px]">
                        <FontAwesomeIcon icon={faUser} />
                            Users
                        </Link>
                    </li>
                    <li className="w-full">
                        <Link to='/admin/domains' className="flex items-center gap-[15px] hover:bg-[#141416] w-full py-[10px] px-[16px]">
                        <FontAwesomeIcon icon={faEarthAsia} />
                            Domains
                        </Link>
                    </li>
                    <li className="w-full">
                        <Link to='/admin/kyc' className="flex items-center gap-[15px] hover:bg-[#141416] w-full py-[10px] px-[16px]">
                        <FontAwesomeIcon icon={faIdCard} />
                            KYC List
                        </Link>
                    </li>
                    <li className="w-full">
                        <Link to='/admin/support' className="flex items-center gap-[15px] hover:bg-[#141416] w-full py-[10px] px-[16px]">
                        <FontAwesomeIcon icon={faComment} />
                            Support v2
                        </Link>
                    </li>
                    <li className="w-full">
                        <Link to='/admin/deposits' className="flex items-center gap-[15px] hover:bg-[#141416] w-full py-[10px] px-[16px]">
                        <FontAwesomeIcon icon={faSackDollar} />
                            Deposits
                        </Link>
                    </li>
                    <li className="w-full">
                        <Link to='/admin/withdraws' className="flex items-center gap-[15px] hover:bg-[#141416] w-full py-[10px] px-[16px]">
                        <FontAwesomeIcon icon={faMoneyBillTransfer} />
                            Withdraws
                        </Link>
                    </li>
                    <li className="w-full">
                        <Link to='/admin/logs' className="flex items-center gap-[15px] hover:bg-[#141416] w-full py-[10px] px-[16px]">
                        <FontAwesomeIcon icon={faFolderClosed} />
                            Logs
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="mt-auto">
                <div className="flex items-center gap-[15px] hover:bg-[#141416] w-full py-[10px] px-[16px] cursor-pointer">
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    <span>
                    Log out
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
