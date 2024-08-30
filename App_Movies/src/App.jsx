import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Home from './pages/Watch'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/watch' element={ <Watch /> } />
        </Routes>
      </BrowserRouter>
    </>
  ) 
}

export default App
