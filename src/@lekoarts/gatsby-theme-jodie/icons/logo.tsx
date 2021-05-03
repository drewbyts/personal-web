import * as React from "react"
import * as ReactDOM from 'react-dom'
import * as logo from "./logo.jpg";

const Logo = () => (
  <img
      width="150"
      height="150"
      style = {{borderRadius: 150, borderWidth: 2, borderColor: 'lightsteelblue', borderStyle: 'solid'}}
      src={logo}
      alt="logo"
    />
);

export default Logo