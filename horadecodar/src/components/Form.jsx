import { useState } from "react"

function Form() {

  function meuEvento(e) {
    e.preventDefault()
    console.log(name)
    console.log(password)
  }

  const [name, setName] = useState()
  const [password, setPasswor] = useState()

  return (
    <>
    <br /><br />
      <form onSubmit={meuEvento} action="">
        <input type="text" name="nome" id="nome" placeholder="Digite seu nome" onChange={ (e) => { setName(e.target.value) } }  />

        <input type="password" name="senha" id="senha" placeholder="Digite sua senha" onChange={ (e) => {setPasswor(e.target.value)} } />

        <button type="submit">Cadastrar</button>
      </form>
    </>
  )
}

export default Form