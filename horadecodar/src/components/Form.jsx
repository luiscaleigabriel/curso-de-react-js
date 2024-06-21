import { useState } from "react"

function Form() {

  function meuEvento(e) {
    e.preventDefault()
    console.log(name)
    console.log('Cadastrou')
  }

  const [name, setName] = useState()

  return (
    <>
    <br /><br />
      <form onSubmit={meuEvento} action="">
        <input type="text" name="nome" id="nome" placeholder="Digite seu nome"  />

        <input type="password" name="senha" id="senha" placeholder="Digite sua senha" />

        <button type="submit">Cadastrar</button>
      </form>
    </>
  )
}

export default Form