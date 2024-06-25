import style from './Banner.module.css'

function Banner({image}) {
  return (
   <section 
    className={style.banner}
    style={ {backgroundImage: `url('/images/banner-${ image }.png')`} }
   >
   </section>
  )
}

export default Banner