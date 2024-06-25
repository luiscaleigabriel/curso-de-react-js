import style from './Containner.module.css'

function Containner({ children }) {
  return (
    <section className={style.containner}>
      {children}
    </section>
  )
}

export default Containner