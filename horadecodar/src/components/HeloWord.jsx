import Frase from "./Frase"
import style from "./HeloWord.module.css"

function HeloWord() {
  return (
    <div className={style.p}>    
      <h1>Helo world I'm here now</h1>
      <Frase />
    </div>
  )
}

export default HeloWord