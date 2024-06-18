import './App.css';
import List from './components/List';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className='prieira'>
      <Pessoa nome="Luís Gabriel" foto="../public/WhatsApp Image 2024-06-15 at 18.00.04 (1).jpeg" idade="20" prof="Informático" />
      <List />
    </div>
  )
}

export default App
