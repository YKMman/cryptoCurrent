

const Users = () => {
    return (
        <div className="flex flex-col w-full gap-[40px]">
                    <div className="bg-[#17181c] p-[20px] inline-flex flex-col rounded-[16px]">
                        <h2 className="text-[#33a0ad] mb-[10px] text-[20px] font-semibold">Search</h2>
                        <label className="flex flex-col gap-[5px] mb-[25px]">
                            <span className="text-white">Username</span>
                            <input type='text' className="bg-adminInput rounded-[16px] py-[10px] px-[16px] text-white"/>
                            <span className="text-[#717374]">Укажите ник юзера</span>
                        </label>
                        <button className="bg-adminBtn py-[6px] px-[15px] text-[15px] rounded-[5px] w-fit text-white duration-300 hover:opacity-[0.56]">Find</button>
                    </div>
                    <div className="bg-[#17181c] p-[20px] inline-flex flex-col gap-[10px] rounded-[16px] w-full text-white">
                        <h2 className="text-[#33a0ad] mb-[10px] text-[20px] font-semibold">Users List</h2>
                <div className="grid grid-cols-10 px-[10px] border-b-[1px] border-[#1e2126] pb-[10px]">
                    <span className="text-left">ID</span>
                    <span className="text-left">IP</span>
                    <span className="text-left">USERNAME	</span>
                    <span>E-MAIL</span>
                    <span>NOTE</span>
                    <span>BALANCE</span>
                    <span>2FA</span>
                    <span>LAST VISIT</span>
                    <span>REGISTER TIME</span>
                    <span>ACTIONS</span>
                </div>
                <div className="grid grid-cols-10 px-[10px] items-center gap-[10px] border-b-[1px] border-[#1e2126] pb-[10px]">
                    <span className="text-left">325</span>
                    <span className="text-left">172.70.90.33</span>
                    <span className="text-left">Rosekatja</span>
                    <span>rosekatja@gmail.ru</span>
                    <input type='text' placeholder="Enter your note here" className="bg-adminInput rounded-[16px] py-[4px] px-[4px] text-white"/>
                    <span>125334.85</span>
                    <button className="bg-adminBtnRemove py-[6px] px-[15px] text-[15px] rounded-[5px] w-fit text-white duration-300 hover:opacity-[0.56]">OFF</button>
                    <span>2023.11.12 20:51</span>
                    <span>2023.08.25 22:49</span>
                    <div className="flex flex-col gap-[3px]">
                        <button className="bg-adminBtn py-[6px] px-[15px] text-[15px] rounded-[5px] w-fit text-white duration-300 hover:opacity-[0.56]">OFF</button>
                        <button className="bg-adminBtn py-[6px] px-[15px] text-[15px] rounded-[5px] w-fit text-white duration-300 hover:opacity-[0.56]">OFF</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users
