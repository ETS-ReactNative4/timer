import React, { Component } from 'react';
import store from "./store/index";
import {Provider} from "react-redux";
import Dashboard from "./components/dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 class="ctr">Timers</h1>
        </header>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </div>
    );
  }
}

export default App;
