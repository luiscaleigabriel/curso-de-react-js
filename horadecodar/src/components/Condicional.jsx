import { useState } from "react"

function Condicional() {
  const [email, setEmail] = useState()
  const [userEmail, setUserEmail] = useState()

  function enviarEmail(e) {
    e.preventDefault()
    setUserEmail(email)
  }

  function limparEmail() {
    const email = document.getElementById('email')
    email.value = ""
    setUserEmail("")
  }
 
  return (
    <div>
      <h2>Cadastre o seu email</h2>
      <form>
        <input type="email" name="email" id="email" placeholder="Informe o seu email"
         onChange={ (e) => { setEmail(e.target.value) } } />
        <button type="submit" onClick={enviarEmail}>Enviar</button>
      </form>
      {userEmail && (
        <div>
          <p>Email enviado com sucesso: {userEmail}</p>
          <button onClick={limparEmail}>Limpar Email</button>
        </div>
      )}
    </div>
  )
}

export default Condicional