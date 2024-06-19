import Item from "./Item"

function List() {
  return (
    <>
      <h1>Lista de Carros</h1>
      <ul>
        <Item marca="Celero" lancamento={2000} />
        <Item marca="Yundai" lancamento={2010} />
        <Item />
      </ul>
    </>
  )
}

export default List