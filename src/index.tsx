import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom"
import { Provider } from 'react-redux';

import store from "./store/store";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Router >
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
