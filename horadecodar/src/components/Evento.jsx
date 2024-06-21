import style from './Evento.module.css'

function Evento() {

  function meuEvento() {
    console.log('Meu evento!')
  }

  return (
    <>
      <p>Click para disparar um evento</p>
      <button onClick={meuEvento}>Ativar</button>
    </>
  )
}

export default Evento