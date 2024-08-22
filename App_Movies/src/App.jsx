import Banner from "./components/Banner"
import Container from "./components/Container"
import Footer from "./components/Footer"
import Header from "./components/Header"


function App() {
  return (
    <>  
      <Header />
      <Banner image='/images/banner-home.png' />
      <Container>
        <h1>Conteudo</h1>
        <h1>Conteudo</h1>
        <h1>Conteudo</h1>
        <h1>Conteudo</h1>
        <h1>Conteudo</h1>
        <h1>Conteudo</h1>
      </Container>
      <Footer />
    </>
  ) 
}

export default App
