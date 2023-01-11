// import React, { useState } from "react";
// import ReactDOM from 'react-dom/client';
// import './Favourite.css'
// function FavoriteColor() {
//   const [color, setColor,] = useState("color");

//   return (
//     <>
//       <h1>My favorite color is {color}!</h1>
//       <button
//         type="button"
//         className="blue"
//         onClick={() => setColor("blue")}
//       >Blue</button>
//       <button
//         type="button"
//         className="green"
//         onClick={() => setColor("green")}
//       >Green</button>
//       <button
//         type="button"
//         className="red"
//         onClick={() => setColor("red")}
//       >Red</button>
//       <button
//         type="button"
//         className="yellow"
//         onClick={() => setColor("yellow")}
//       >Yellow</button>
//     </>
//   );
// }

// export default FavoriteColor;


 import './Favourite.css'
import { useState, useEffect } from "react";


function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I have rendered {count} times!</h1>;
}
export default Timer;



