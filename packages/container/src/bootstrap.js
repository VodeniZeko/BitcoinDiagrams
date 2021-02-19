import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Mount func to start the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

//if in dev mode and isolation , call mount immediately

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#root");
  if (devRoot) {
    mount(devRoot);
  }
}

//if we are running thru container export mount function

export { mount };
