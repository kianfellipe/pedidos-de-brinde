import './App.css';
import Rca from './component/formCard';
import React from 'react'
import Header from './component/header';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="App">
          <Rca />
        </div>
      </main>
    </>
  );
}

export default App;
