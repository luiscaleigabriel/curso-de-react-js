import Header from "./components/Header"
import Footer from "./components/Footer"
import Banner from "./components/Banner"
import Containner from "./components/Containner"
import Card from "./components/Card"
import videos from './json/db.json'

function App() {

  return (
    <>  
      <Header />
      <Banner image = "home" />
      <Containner >
        <h2>Geografia</h2>
        <section className="cards">

          {
            videos.map(video => <Card url={video.url} image={video.cover} key={video.id} />
            )
          }
          
        </section>
      </Containner>
      <Footer />
    </>
  ) 
}

export default App
