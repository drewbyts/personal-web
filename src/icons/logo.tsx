import React from "react";
import Logo from "src/@lekoarts/gatsby-theme-jodie/icons/logo.jpg";

// TODOS: LOGO NAME ANIMATION...
export default function Logo() {
  return (
    <img
      width="105"
      height="105"
      style = {{borderRadius: 150, borderWidth: 2, borderColor: 'lightsteelblue', borderStyle: 'solid'}}
      fill={'primary'}
      src={Logo}
      alt="logo"
    />
  );
}