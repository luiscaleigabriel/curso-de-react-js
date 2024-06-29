import style from './Card.module.css'

function Card({ to, image }) {
  return (
    <section className={style.card}>
      <a href={to}
      rel='noreferrer nooper'
      target='_blank'>
        <img src={image} alt="Capa" />
      </a>
    </section>
  )
}

export default Card