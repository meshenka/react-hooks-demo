import React from 'react';
import logo from './logo.svg';
import './App.css';
import AlbumApp from './components/AlbumsApp'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <AlbumApp/>
      </header>
      
    </div>
  );
}

export default App;
