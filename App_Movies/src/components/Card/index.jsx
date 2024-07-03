import style from './Card.module.css'

function Card({ image, title, url }) {
  return (
    <section className={style.card}>
      <a href={url}
      rel='noreferrer nooper'
      target='_blank'>
        <img src={image} alt="Capa" />
      </a>
    </section>
  )
}

export default Card