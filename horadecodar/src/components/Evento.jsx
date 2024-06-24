import Button from './Button'
import style from './Evento.module.css'

function Evento() {

  function meuEvento() {
    console.log('Meu evento!')
  }

  return (
    <>
      <p>Click para disparar um evento</p>
      <Button event={meuEvento} text="Primeiro"/>
    </>
  )
}

export default Evento