import logo from './dictionary_logo.jpg';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
<div className='App-container'>
<div className="App">
      <header className="App-header">
        <img src={logo} className='App-header img-fluid' alt="logo"/>
      </header>
      <main>
      <Dictionary/>
      </main>
      <footer className='App-footer text-center'>
        coded by Natasha
      </footer>
    </div>
    </div>
  );
}

