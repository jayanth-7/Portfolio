import React from "react";
import "./styles.css";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
import "./Name";
import Name from "./Name";

// export default function App() {
//   return (
//     <div className="App">
//       <img
//         className="incog"
//         src="https://itg.wfu.edu/wp-content/uploads/Cogn_mode.png"
//         alt="my"
//       />
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
const imagesPath = {
  // incog2: "https://itg.wfu.edu/wp-content/uploads/Cogn_mode.png",
  incog1:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Google_Incognito_logo.svg/2048px-Google_Incognito_logo.svg.png",
  incog2:
    "https://media.licdn.com/dms/image/D4D03AQGFObVBJkrl-g/profile-displayphoto-shrink_800_800/0/1647250730736?e=2147483647&v=beta&t=l-TW43s8H8mD52eD9igx6DtQqyngwBLXVsk8s5GRB6w"
};

class App extends React.Component {
  state = { open: true };
  toggleImage = () => {
    this.setState((state) => ({ open: !state.open }));
  };
  getImageName = () => (this.state.open ? "incog1" : "incog2");
  render() {
    const imageName = this.getImageName();

    return (
      <>
        <img
          style={{
            maxWidth: "120px",
            cursor: "pointer",
            margin: "24",
            marginTop: "4rem",
            borderRadius: "60px"
          }}
          src={imagesPath[imageName]}
          onClick={this.toggleImage}
          alt=""
        />
        <Name />
      </>
    );
  }
}
export default App;

