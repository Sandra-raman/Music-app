import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Intro from './Pages/Intro/Intro'
import Home from './Pages/Home/Home'
import History from './Pages/History/History'
import Pagenotfound from './Pages/Pagenotfound/Pagenotfound'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Intro/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='*' element={<Pagenotfound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
