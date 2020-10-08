import React from 'react';

let addNumbers = (num1, numb2) => {
    let sum = num1 + numb2;
    document.getElementById("myId").innerHTML = sum;
  }
  addNumbers(4, "6");

export default addNumbers;