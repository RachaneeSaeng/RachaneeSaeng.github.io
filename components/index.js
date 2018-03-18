import React from "react";
import { render } from "react-dom";
import Layout from "./Layout";

const rootElement = document.querySelector("#app");
if (rootElement) {
  render(<Layout />, rootElement);
}
