import Banner from "./components/Banner"
import Card from "./components/Card"
import Category from "./components/Category"
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
        <Category category='Geografia'>
          {videos.map(video => 
            <Card key={video.id} link={video.url} image={video.cover} />
          )}
        </Category>
      </Container>
      <Footer />
    </>
  ) 
}

export default App
