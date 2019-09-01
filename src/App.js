import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'

import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Routes from './routes/Routes';
import { HashRouter } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Navbar />
        <Routes />
      </div>
    </HashRouter>
  );
}

export default App;
