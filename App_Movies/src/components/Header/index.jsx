import { useState } from 'react'
import styles from './Header.module.css'

function Header() {
  const [fixed, setFixed] = useState(false)
  const fixedMenu = () => {
    if (window.scrollY >= 50) {
      setFixed(true)
    }else {
      setFixed(false)
    }
  }

  window.addEventListener('scroll', fixedMenu)
  return (
    <header className={ `${styles.header} ${fixed ? styles.fixed : ''}` }>
      <span>LuísFlix</span>
      <nav>
        <a href="#">Home</a>
        <a href="#">Assistir</a>
      </nav>
    </header>
  )
}

export default Header