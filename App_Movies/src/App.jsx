import Banner from "./components/Banner"
import Card from "./components/Card"
import Category, { categories, filterCategory } from "./components/Category"
import Container from "./components/Container"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  return (
    <>  
      <Header />
      <Banner image='/images/banner-home.png' />
      <Container>
        {categories.map((category, index) => {
          return <Category category={category}>
          {filterCategory(index).map(video => 
            <Card key={video.id} link={video.url} image={video.cover} />
          )}
        </Category>
        })}
      </Container>
      <Footer />
    </>
  ) 
}

export default App
