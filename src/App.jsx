import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Portfolio from './pages/Portfolio/Portfolio'
import TvStaticBackground from './components/Tv/TvStaticBackground'


function App() {
 return(
  <>
  <div className="">
      {/* Фон-шум */}
      <div className="back">
      <TvStaticBackground />

      </div>
      {/* Контент поверх */}
      
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/portfolio' element={<Portfolio/>}/>
  </Routes>
    </div>
  
  </>
 )
}

export default App
