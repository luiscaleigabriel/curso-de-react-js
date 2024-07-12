import Cart from "../../data/product_data"

function ContentMain() {
  return (
    <section className="main_content">
      <h3>Produtos de Qualidade</h3>
      <div className="cards">
        { Cart.map((item) => (
          <div className="card" key={item.id}>
            <div className="card_img">
              <img src={item.thumb} alt="product" />
            </div>
            <div className="card_header">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p className="price">{item.price} <span>{item.currency}</span></p>
              <div className="btn-add">Add no Carrinho</div>
            </div>
          </div>
        )) }
      </div>
    </section>
  )
}

export default ContentMain