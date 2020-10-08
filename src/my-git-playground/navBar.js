import React from 'react';

const NavBar = () => (
    <div>
        <h1>I'm Nav Bar 5000</h1>
        <button onClick={addNumbers} style={{height: '20px', width: '50px'}}>Sum</button>
    </div>
)


const addNumbers = () => {
    let sum = 1 + "2";
    alert(sum);
  }
  

export default NavBar;
