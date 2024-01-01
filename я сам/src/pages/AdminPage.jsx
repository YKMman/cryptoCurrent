import { useOutlet } from 'react-router-dom'
import Sidebar from "../admin/components/sidebar/Sidebar"


const AdminPage = () => {
    const outlet = useOutlet()

    return (
        <div className="min-h-full flex flex-col bg-[#0f1115]">
            <main className="flex-auto">
                <div className='flex items-start gap-[30px]'>
                    <Sidebar/>
                    {
                        outlet && outlet
                    }
                </div>
            </main>
        </div>
    )
}

export default AdminPage
