import logo from './dictionary_logo.jpg';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
<div className='App-container'>
<div className="App">
      <header className="App-header">
        <img src={logo} className='logo' alt="logo"/>
      </header>
      <main>
      <Dictionary defaultKeyword="Sky"/>
      </main>
      <footer className='App-footer text-center'>
          This project was coded by Natasha Moyane 💗 and is  open-sourced on
              <a
               href="#"
               target="_blank"
               rel="noopener noreferrer"
              >
               GitHub
              </a>
              and hosted on 
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
               Netlify
              </a>
      </footer>
    </div>
    </div>
  );
}

