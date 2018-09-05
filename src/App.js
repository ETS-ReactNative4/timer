import React from 'react';
import store from "./store/index";
import {Provider} from "react-redux";
import Dashboard from "./components/dashboard";

class App extends React.Component {
  render() {
    return (
      <div>
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
