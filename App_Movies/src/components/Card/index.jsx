import styles from './Card.module.css'

export default function Card({ image, link }) {
  return (
    <section className={styles.card}>
      <a 
        href={link}
        rel='noreferrer noopener'
        target='_blank'
      >
        <img src={image} alt="Capa" />
      </a>
    </section>
  )
}