import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import TopNav from './components/TopNav';
import Home from './components/Home';
import { Routes ,Route} from 'react-router-dom';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <TopNav />
    <Routes>
      <Route exact path="/" element =<Home /> />
      <Route path="/about" element =<About /> />
      <Route path="/services" element =<Services /> />
      <Route path="/contact" element =<Contact /> />
    </Routes>
    <Footer />
    </>

  );
}

export default App;
