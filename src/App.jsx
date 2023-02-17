import './App.css'
import { Routes, Route } from 'react-router-dom';
import NavBar from "./component/navBar/NavBar";
import About from './pages/about/About';
import Home from './pages/home/Home';
import Sadaqah from './pages/sadaqah/Sadaqah';
import Contact from './pages/contact/Contact';
import Footer from './component/footer/Footer';
import Post from './pages/post/Post';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path="/post/:id" component={Post} />
        <Route path='/about' element={<About />} />
        <Route path='/sadaqah' element={<Sadaqah />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
