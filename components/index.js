import React from "react";
import { render } from "react-dom";
import Layout from "./Layout";

const rootElement = document.querySelector("#root");
if (rootElement) {
  render(<Layout />, rootElement);
}
