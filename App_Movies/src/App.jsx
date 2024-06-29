import Header from "./components/Header"
import Footer from "./components/Footer"
import Banner from "./components/Banner"
import Containner from "./components/Containner"
import Card from "./components/Card"

function App() {

  return (
    <>  
      <Header />
      <Banner image = "home" />
      <Containner >
        <h2>Geografia</h2>
        <section className="cards">
          <Card 
            to="https://www.youtube.com/watch?v=B_nq7VTJZds&list=PLnex8IkmReXwhwBi9av_8TrovNOivA6nu&index=1&pp=iAQB"
            image="https://i.ytimg.com/vi/B_nq7VTJZds/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCtn3djCyVXzARItZEBkhXHOjclXQ"
          />
          <Card 
            to="https://www.youtube.com/watch?v=8PjBddZ2cdo&list=PLnex8IkmReXwhwBi9av_8TrovNOivA6nu&index=2&pp=iAQB"
            image="https://i.ytimg.com/vi/8PjBddZ2cdo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA2Xo31GCmVUXsYqRwTZQ5jddAAFA"
          />
          <Card 
            to="https://www.youtube.com/watch?v=yqZsBn5Z1xc&list=PLnex8IkmReXwhwBi9av_8TrovNOivA6nu&index=3&pp=iAQB"
            image="https://i.ytimg.com/vi/yqZsBn5Z1xc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAPsj8e-s8dseiCCo2n3tSZh1bqRg"
          />
          <Card 
            to="https://www.youtube.com/watch?v=ee15tCw1kYo&list=PLnex8IkmReXwhwBi9av_8TrovNOivA6nu&index=4&pp=iAQB"
            image="https://i.ytimg.com/vi/ee15tCw1kYo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD4WctOiQYSHWZDr6xZPDZGAmLGyA"
          />
          <Card 
            to="https://i.ytimg.com/vi/QUc_M1b1uNE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCB8d0xJTYarreewlibcJenrk5YIw"
            image="https://i.ytimg.com/vi/QUc_M1b1uNE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCB8d0xJTYarreewlibcJenrk5YIw"
          />
          <Card 
            to="https://www.youtube.com/watch?v=YzBkkC2SXxM&list=PLnex8IkmReXwhwBi9av_8TrovNOivA6nu&index=6&pp=iAQB"
            image="https://i.ytimg.com/vi/YzBkkC2SXxM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAeIqQSNjDmzfZsLHNVzmHGa4yhtQ"
          />
        </section>
      </Containner>
      <Footer />
    </>
  ) 
}

export default App
