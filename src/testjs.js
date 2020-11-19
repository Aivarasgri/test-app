// import React, { useState } from "react";

// class Test extends React.Component {
//   constructor(props) {
//     console.log("constructor");
//     super(props);
//     this.state = {
//       word: "",
//     };
//   }

//   UNSAFE_componentWillReceiveProps(nextProps, NextState) {
//     console.log("UNSAFE_componentWillReceiveProps", nextProps, NextState);
//   }

//   componentDidUpdate() {
//     console.log("componentDidUpdate");
//   }

//   UNSAFE_componentWillUpdate() {
//     console.log("UNSAFE_componentWillUpdate");
//   }

//   shouldComponentUpdate(nextProps, NextState) {
//     console.log("shouldComponentUpdate");
//     return true;
//   }

//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//   }

//   UNSAFE_componentWillMount() {
//     console.log("UNSAFE_componentWillMount");
//   }

//   render() {
//     console.log("render");
//     return (
//       <div>
//         <button
//           onClick={() => {
//             console.log("State has been changed");
//             this.setState({ word: "lifecycle" });
//           }}
//         >
//           Click me
//         </button>
//         <h1>I'm {this.state.word}</h1>
//       </div>
//     );
//   }
// }

import React from "react";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "blue":
//       return { color: "blue" };
//     case "yellow":
//       return { color: "yellow" };
//     case "inc":
//       return { count: state.count + 1, color: "blue" };
//     case "dec":
//       return { count: state.count - 1, color: "yellow" };
//     default:
//       return state;
//   }
// };

const Test = () => {
  //   const [state, dispatch] = useReducer(reducer, { color: "red", count: 0 });

  //   const blue = () => {
  //     console.log(state.color);
  //     return dispatch({ type: "blue" });
  //   };

  //   const yellow = () => {
  //     console.log(state.color);
  //     return dispatch({ type: "yellow" });
  //   };

  //   const inc = () => {
  //     console.log(state.count);
  //     return dispatch({ type: "inc" });
  //   };

  //   const dec = () => {
  //     console.log(state.count);
  //     return dispatch({ type: "dec" });
  //   };

  //   return (
  //     <div>
  //       <button onClick={inc}>inc</button>
  //       <button onClick={dec}>dec</button>
  //       <button onClick={blue}>Blue</button>
  //       <button onClick={yellow}>Yellow</button>
  //       <div
  //         style={{
  //           width: "50px",
  //           height: "50px",
  //           backgroundColor: state.color,
  //         }}
  //       >
  //         Count: {state.count}
  //       </div>
  //     </div>
  //   );
  // };

  // function useprintNumbers(i, j) {
  //   const printNumbers = setInterval(function print() {
  //     alert(i++);

  //     if (i > j) {
  //       setTimeout(clearInterval(printNumbers));
  //     }
  //   }, 1000);
  // }

  // useprintNumbers(1, 5);

  // function useprintNumbers(i, j) {
  //   const printNumbers = setTimeout(function print() {
  //     alert(i++);

  //     if (i > j) {
  //       setTimeout(clearInterval(printNumbers));
  //     } else {
  //       setTimeout(print(), 1000);
  //     }
  //   }, 1000);
  // }

  // useprintNumbers(1, 5);

  // we'll make worker.slow caching

  return <div></div>;
};

export default Test;
