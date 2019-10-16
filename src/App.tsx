import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="contained" color="primary">
          Hello, World
        </Button>
      </header>
    </div>
  );
}

export default App;
