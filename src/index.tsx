import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import SnippetProvider from "./contexts/SnippetProvider";
import UserProvider from "./contexts/UserProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <SnippetProvider>
          <App />
        </SnippetProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
