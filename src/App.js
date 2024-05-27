import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import './Animations.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
   <Header/>
  
    <Footer/>
    <Routes>
    <Route path='/' element ={<Home/>}/>
    <Route path='/skills' element ={<Skills/>}/>
    <Route path='/experience' element ={<Experience/>}/>
    <Route path='/projects' element = {<Projects/>}/>
    <Route path='/contact' element ={<Contact/>}/>
    </Routes>
  
    </div>
    </Router>
  );
}

export default App;
