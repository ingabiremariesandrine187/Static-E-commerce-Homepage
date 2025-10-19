import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import './App.css'
import Product from './components/Products'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  
  return (
    <Router>
      <Navbar/>
      <Routes>
<Route path="/" element={<Home />} />
<Route path="/products" element={<Product />} />
<Route path="/About" element={<About />} />
 <Route path="/Contact" element={<Contact />} />
 
      </Routes>
     <Footer/>
    </Router>
   
    
  )
}

export default App
