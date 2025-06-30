import Footer from "./components/Footer"
import HeaderSection from "./components/HeaderSection"
import NavBar from "./components/NavBar"
import CoachSection from "./components/CoachSection"
import PriceSection from "./components/PriceSection"
import './index.css'

function App() {    
  return (
    <>  
      <div className="header-area">
        <NavBar/>
        <HeaderSection/>
      </div>
      <CoachSection />
      <PriceSection/>
      <Footer/>
    </>
  )
}

export default App
