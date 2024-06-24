import style from './Header.module.css'

function Header() {
  return (
    <header className={style.header}>
      <span>LuísFlix</span>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Assistir</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header