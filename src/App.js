
import './App.css';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Identity from './Components/Identity';
import Values from './Components/Values';
import Success from './Components/Success';
import Fund from './Components/Fund';
import Partners from './Components/Partners';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Intern from './Components/Intern';
import About from './Components/About';
import Aboutlp from './Components/Aboutlp';
import Salama from './Components/Salama';
import Sponsor from './Components/Sponsor';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Donate from './Components/Donate';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element ={
            <>
              <Navbar/>
              <Landing/>
              <Identity/>
              <Values/>
              <Success/>
              <Fund/>
              <Partners/>
              <Footer/>
            </>
          }></Route>

          <Route path='/intern-page' element={
            <>
              <Navbar/>
              <Intern/>
              <Footer/>
            </>
          }></Route>

          <Route path='/about' element={
            <>
            <Navbar/>
            <About/>
            <Footer/>
            </>
          }></Route>

          <Route path='/about-lpk' element={
            <>
            <Navbar/>
            <Aboutlp/>
            <Footer/>
            </>
          }></Route>

          <Route path='/salama-school' element={
            <>
              <Navbar/>
              <Salama/>
              <Footer/>
            </>
          }></Route>

          <Route path='/sponsor' element={
            <>
              <Navbar/>
              <Sponsor/>
              <Footer/>
            </>
          }></Route>

          <Route path='/programs' element={
            <>
              <Navbar/>
              <Projects/>
            </>
          }></Route>

          <Route path='/contact' element={
            <>
              <Navbar/>
              <Contact/>
              <Footer/>
            </>
          }></Route>

          
          <Route path='/donate' element={
            <>
              <Navbar/>
              <Donate/>
              <Footer/>
            </>
          }></Route>

          <Route path='/gallery' element={
            <>
              <Navbar/>
              <Gallery/>
              <Footer/>
            </>
          }></Route>
        </Routes>
      </Router>


      
    </div>
  );
}

export default App;
