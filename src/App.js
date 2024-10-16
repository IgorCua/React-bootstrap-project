import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Works from './components/works';
import Teams from './components/teams';
import Testimonials from './components/testimonials';
import Pricing from './components/pricing';

function App() {
  return (
    <div className="App">
      <header id='header'>
        <Header/>
      </header>
      <main>
        <Hero/>
        <About/>
        <Services/>
        <Works/>
        <Teams/>
        <Testimonials/>
        <Pricing/>
      </main>
    </div>
  );
}

export default App;
