import HeloWord from "./HeloWord"

function Pessoa({foto, nome, idade, prof}) {
  return (
    <>
      <img src={foto} alt="pessoa" />
      <h2>Nome: {nome}</h2>
      <h3>Idade: {idade}</h3>
      <h3>Profissão: {prof}</h3>
    </>
  )
}

export default Pessoa