import React from 'react';
import Features from './components/Features';
import Header from './components/Header';
import Services from './components/Services';
import Subscribe from './components/Subscribe';


function App() {
  return (
    <div className="App">
  <Header />
  
  <Features />
  <Services />
  <Subscribe />
    </div>
  );
}

export default App;
