// import React from "react";

// class Link extends React.Component {
//   state = {
//     buttonPressed: "",
//   };

//   componentDidMount() {
//     console.log("Component did mount", this.state.buttonPressed)
//   }

//   componentDidUpdate() {
//     console.log("Component did update", this.state.buttonPressed)
//   }

//   onYesPress() {
//     this.setState({ buttonPressed: "Yes" });
//   }

//   onNoPress() {
//     this.setState({ buttonPressed: "No" });
//   }

// render() {
//     return (
//       <div>
//         <button onClick={() => this.onYesPress()}>Yes</button>
//         <button onClick={() => this.onNoPress()}>No</button>
//       </div>
//     );
//   }
// }

// export default Link;


// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// class Link extends React.Component() {
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(() => {
//     setCalculation(() => count * 2);
//   }, [count]); // <- add the count variable here

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount((c) => c + 1)}>+</button>
//       <p>Calculation: {calculation}</p>
//     </>
//   );
// }

// export default Link

// 
import React from "react";
import ReactDOM from "react-dom/client";
class Link extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }
  delHeader = () => {
    this.setState({ show: false });
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
        {myheader}
        <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

export default Link;