import styles from './Category.module.css'

function Category({ videos }) {
  return (
    <>
      <h2>Geografia</h2>
      <section className="cards">
        {videos.map(video => 
          <Card key={video.id} link={video.url} image={video.cover} />
        )}
      </section>
    </>
  )
}

export default Category