
import tabletrading from '../../../public/tabletrading.png'
import buysell from '../../../public/buysell.png'

const TableScreen = () => {
    return (
        <section className="my-[55px] relative after:absolute after:left-[50%] after:right-0 after:top-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:bottom-0 after:w-[850px] after:bg-withdraw after:blur-[400px] after:z-[-1] minsm:after:w-[450px] sm:after:w-[320px]">
            <div className="container text-center">
                <h2 className='text-white text-[44px] mb-[25px] md:text-[36px]'>Simple multifunctional platform with endless possibilities</h2>
                <p className='text-white text-[22px] mb-[55px] md:text-[18px]'>Thousands of traders anywhere in the world can get access to a simple way to trade not only Bitcoin and Ethereum but any of other 70+ coins that are currently listed.</p>
                <div className='relative'>
                    <img src={tabletrading} alt='table' className='mx-auto text-center'/>
                    <img src={buysell} alt='buy-sell' className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] duration-300 hover:scale-[1.1]'/>
                </div>
            </div>
        </section>
    )
}

export default TableScreen
