import React, { Component } from "react";
import "./App.css";

import DeviceSwitcher from "./components/DeviceSwitcher";
import Device from "./components/Device";

class App extends Component {
  state = {
    device: "iPhoneX"
  };

  setDevice = deviceName => {
    this.setState({ device: deviceName });
  };

  render() {
    return (
      <div className="App">
        <DeviceSwitcher
          setDevice={this.setDevice}
          deviceName={this.state.device}
        />
        <Device deviceName={this.state.device} />
      </div>
    );
  }
}

export default App;
