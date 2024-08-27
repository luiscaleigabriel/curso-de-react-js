import Banner from "./components/Banner"
import Card from "./components/Card"
import Container from "./components/Container"
import Footer from "./components/Footer"
import Header from "./components/Header"
import videos from './json/db.json'

function App() {
  console.log(videos)
  return (
    <>  
      <Header />
      <Banner image='/images/banner-home.png' />
      <Container>
        <h2>Geografia</h2>
        <section className="cards">
          {videos.map(video => 
            <Card key={video.id} link={video.url} image={video.cover} />
          )}
        </section>
      </Container>
      <Footer />
    </>
  ) 
}

export default App
