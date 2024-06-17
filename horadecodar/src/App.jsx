import './App.css';
import HeloWord from './components/HeloWord';

function App() {

  const name = 'Luís';

  return (
    <div className='prieira'>
      <h1>Olá, mundo! {name} </h1>
      <p>Coeçamos ok</p>
      <HeloWord />
    </div>
  )
}

export default App
