import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// importar componentes 
import Navbar from "./components/Navbar"
import Contacto from "./views/Contacto"
import NotFound from "./views/NotFound";
import Home from "./views/Home"
import Footer from './components/Footer';


function App() {


  return (
    <>
      <Router>
            <Navbar />             

            <Routes>
              <Route path="/"  element={<Home />} />                    
              <Route path="/contacto" element={<Contacto />} />
              <Route path="*" element={<NotFound />} />
              </Routes>
              
            <Footer />
            
        </Router>

      

      
    </>
  )
}

export default App
