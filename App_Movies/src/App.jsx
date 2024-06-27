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
        <h2>Geografia</h2>
        listar videos
      </Containner>
      <Footer />
    </>
  ) 
}

export default App
