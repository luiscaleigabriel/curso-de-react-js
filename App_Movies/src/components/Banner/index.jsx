import styles from './Banner.module.css'

function Banner({ image }) {
  return (
    <section
     className={ styles.banner }
     style={{backgroundImage: `url(${image})`}}
    >
    </section>
  )
}

export default Banner