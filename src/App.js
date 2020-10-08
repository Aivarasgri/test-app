import React from 'react';
import './App.css';
import Footer from './my-git-playground/footer';
import NavBar from './my-git-playground/navBar';
import './testjs';

const lol = () => {
  var x = 45;
  alert(x);
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <Footer />
      <lol />
    </div>
  );
}

export default App;
