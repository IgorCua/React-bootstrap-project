import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';

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
      </main>
    </div>
  );
}

export default App;
