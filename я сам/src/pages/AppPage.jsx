import BlockFour from "../widgets/blockFour/BlockFour"
import Experienced from "../widgets/experienced/Experienced"
import { Footer } from "../widgets/footer/Footer"
import { Header } from "../widgets/header/Header"
import { HeroSection } from "../widgets/hero/HeroSection"
import NewStaking from "../widgets/newStaking/NewStaking"
import { PaypalSection } from "../widgets/paypal/PaypalSection"
import { ResultsSection } from "../widgets/results/ResultsSection"
import Staking from "../widgets/staking/Staking"
import { TableSection } from "../widgets/table/TableSection"
import TableScreen from "../widgets/tableScreen/TableScreen"

export const AppPage = () => {
  return (
      <div className="min-h-full flex flex-col">
        <Header/>
          <main className="flex-auto">
            <HeroSection/>
            <TableSection/>
            <Staking/>
            <PaypalSection/>
            <ResultsSection/>
            <Experienced/>
            <NewStaking/>
            <BlockFour/>
            <TableScreen/>
          </main>
        <Footer/>
      </div>
  )
}


