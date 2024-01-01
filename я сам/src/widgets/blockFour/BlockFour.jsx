import support from '../../../public/support-ico.png'
import swap from '../../../public/swap-ico.png'
import nft from '../../../public/nft-ico.png'
import pp from '../../../public/p2p-ico.png'

const BlockFour = () => {
    return (
        <section className="my-[30px] minsm:my-[40px] pb-[40px] relative before:absolute before:left-0 before:top-[-350px] before:bg-portfolio before:w-[450px] before:h-[650px] before:bg-contain before:bg-no-repeat before:z-[-5] md:before:w-[250px] md:before:top-[-100px]">
            <div className="container">
                <ul className="grid grid-cols-1 minmd:grid-cols-2 gap-[30px] backdrop-blur-[5.5px]">
                    <li className="rounded-[8px] bg-banner border-[1px] border-tableBorder p-[20px] flex items-center gap-[20px] justify-between xs:flex-col xs:items-center xs:justify-center duration-300 hover:translate-y-[-5px] hover:bg-hoverHeh">
                        <div className='max-w-[70%] xs:max-w-[100%] xs:flex xs:flex-col xs:items-center xs:justify-center'>
                            <h4 className='text-white text-[28px] mb-[15px]'>Swap</h4>
                            <p className='text-text text-[16px] xs:text-center'>You can exchange your cryptocurrency for any other cryptocurrency with minimal commissions using our service</p>
                        </div>
                        <div>
                            <img src={support} className='w-full min-w-[150px]'  alt='support'/>
                        </div>
                    </li>
                    <li className="rounded-[8px] bg-banner border-[1px] border-tableBorder p-[20px] flex items-center gap-[20px] justify-between xs:flex-col xs:items-center xs:justify-center duration-300 hover:translate-y-[-5px] hover:bg-hoverHeh">
                        <div className='max-w-[70%] xs:max-w-[100%] xs:flex xs:flex-col xs:items-center xs:justify-center'>
                            <h4 className='text-white text-[28px] mb-[15px]'>NFT Market</h4>
                            <p className='text-text text-[16px] xs:text-center'>NFT market coming soon, accessible to all in development stage.</p>
                        </div>
                        <div>
                            <img src={swap} className='w-full min-w-[150px]'  alt='swap'/>
                        </div>
                    </li>
                    <li className="rounded-[8px] bg-banner border-[1px] border-tableBorder p-[20px] flex items-center gap-[20px] justify-between xs:flex-col xs:items-center xs:justify-center duration-300 hover:translate-y-[-5px] hover:bg-hoverHeh">
                        <div className='max-w-[70%] xs:max-w-[100%] xs:flex xs:flex-col xs:items-center xs:justify-center'>
                            <h4 className='text-white text-[28px] mb-[15px]'>P2P Trading</h4>
                            <p className='text-text text-[16px] xs:text-center'>P2P is highly convenient, allowing direct transactions between individuals without intermediaries, making it efficient, cost-effective, and secure.</p>
                        </div>
                        <div>
                            <img src={nft} className='w-full min-w-[150px]'  alt='nft'/>
                        </div>
                    </li>
                    <li className="rounded-[8px] bg-banner border-[1px] border-tableBorder p-[20px] flex items-center gap-[20px] justify-between xs:flex-col xs:items-center xs:justify-center duration-300 hover:translate-y-[-5px] hover:bg-hoverHeh">
                        <div className='max-w-[70%] xs:max-w-[100%] xs:flex xs:flex-col xs:items-center xs:justify-center '>
                            <h4 className='text-white text-[28px] mb-[15px]'>Support</h4>
                            <p className='text-text text-[16px] xs:text-center'>Our dedicated team is here 24/7 to provide prompt assistance and resolution. We strive to respond quickly and efficiently to ensure your satisfaction with our support.</p>
                        </div>
                        <div>
                            <img src={pp} className='w-full min-w-[150px]'  alt='pp'/>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default BlockFour
