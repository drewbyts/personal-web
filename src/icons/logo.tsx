import * as React from "react";
import logo from "./logo.jpg";

const Logo = () => (
  <img
      width="105"
      height="105"
      style = {{borderRadius: 150, borderWidth: 2, borderColor: 'lightsteelblue', borderStyle: 'solid'}}
      fill={"primary"}
      src={Logo}
      alt="logo"
    />
);

export default Logo