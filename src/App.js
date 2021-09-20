import logo from './logo.svg';
import './App.css';
import Header from "./components/header/index"
import Navbar from "./components/navbar/index"
import Hero from "./components/hero-div/index"
import Banner1 from "./components/banners/banner1"
import HealthyInfo from "./components/healthy-info/index"
import MiscHead1 from "./components/misc_component/header1"
import Card1 from "./components/card/card1"
import InfoBanner from "./components/misc_component/listing_react"
import Img from "./components/card/card1"
import ContactUs from "./components/contactus/index"
import Teamslider from "./components/misc_component/slider"
import Card2 from "C:/Users/Neeta Bagkar/Desktop/htmlproject/MYNEWPROJECT/diet/src/components/card2/index.jsx"
import Banner2 from "./components/banners/banner2"
import Footer from "./components/footer/index"

function App() {
  return (
    <div className="App">
     <Header/>
     <Navbar />
     <Hero />
     <Banner1 />
     <HealthyInfo />
     <MiscHead1 />
     <Card1 />
     <InfoBanner />
     <ContactUs />
     <Teamslider />
     <Card2 />
     <Banner2 />
     <Footer />
    
     
    </div>
  );
}

export default App;
