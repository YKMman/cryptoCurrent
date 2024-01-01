import p1 from '../../../../public/partners/partner-1.png'
import p2 from '../../../../public/partners/partner-2.png'
import p3 from '../../../../public/partners/partner-3.png'
import p4 from '../../../../public/partners/partner-4.png'
import p5 from '../../../../public/partners/partner-5.png'
import p6 from '../../../../public/partners/partner-6.png'
import p7 from '../../../../public/partners/partner-7.png'
import p8 from '../../../../public/partners/partner-8.png'
import p9 from '../../../../public/partners/partner-9.png'
import p10 from '../../../../public/partners/partner-10.png'
import p11 from '../../../../public/partners/partner-11.png'
import { Link } from 'react-router-dom'


export const Partners = () => {
    const data = [
        {
            img: p1,
            link: 'https://www.bnbchain.org/'
        },
        {
            img: p2,
            link: 'https://solana.com/ru'
        },
        {
            img: p3,
            link: 'https://ftx.com/'
        },
        {
            img: p4,
            link: 'https://www.avax.network/'
        },
        {
            img: p5,
            link: 'https://cosmos.network/'
        },
        {
            img: p6,
            link: 'https://portal.projectserum.com/'
        },
        {
            img: p7,
            link: 'https://www.blockchain.com/'
        },
        {
            img: p8,
            link: 'https://www.polkadot.network/'
        },
        {
            img: p9,
            link: 'https://near.org/'
        },
        {
            img: p10,
            link: 'https://chain.link/'
        },
        {
            img: p11,
            link: 'https://www.harmony.one/'
        },
    ]
    return (
        <div className='mb-[45px]'>
            <h2 className="mb-[40px] text-white text-center text-[52px]">Partners</h2>
            <ul className='flex flex-wrap gap-x-[15px] gap-y-[20px] max-w-[500px] m-auto justify-center'>
                {data.map((el, index) => {
                    return (
                        <li key={index} className='p-[15px] rounded-full bg-banner2 border-[1px] border-tableBorder cursor-pointer duration-300 hover:bg-activatedBanner hover:translate-y-[-5px]'>
                            <Link to={el.link}>
                                <img src={el.img} alt='partner' />
                            </Link>
                        </li>
                    )
                })}
            </ul>
        
        </div>
    )
}


