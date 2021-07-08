import React from 'react';
// import logo from './logo.svg';
import '../styles/App.css';
import Status from './Status';

function App() {
  return (
    <div>
      <header className="app-header">
        <h1>
          Graduation Project skeleton
          <Status></Status>
        </h1>
      </header>
    </div>
  );
}

export default App;
