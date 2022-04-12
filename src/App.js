import { Features, Download, SectionWrapper } from "./components";
import assets from "./assets"

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs.
        Start Selling & Growing"
        description="Buy, store, coolect NFTs,
        exchange & earn crypto. Join 25+ million
        people using ProNef Marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner" 
        />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Expirience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fuent UI design."
        mockupImg={assets.homeCards}
        reverse
        />
        
    </>
  );
}

export default App;
