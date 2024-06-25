import Header from "./components/Header"
import Footer from "./components/Footer"
import Banner from "./components/Banner"
import Containner from "./components/Containner"

function App() {

  return (
    <>  
      <Header />
      <Banner image = "home" />
      <Containner>
        <h2>Olá, Mundo!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas in deserunt magnam dolorum vitae aut placeat.</p>
      </Containner>
      <Footer />
    </>
  ) 
}

export default App
