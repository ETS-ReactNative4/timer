import React from 'react';
import Dashboard from "./components/dashboard";

class App extends React.Component {

  render() {
    return (
      <div>
        <header>
          <h1 class="ctr">Timers</h1>
        </header>
        <Dashboard />
      </div>
    );
  }
}

export default App;
