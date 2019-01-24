import React, { Component } from "react";
import "./App.css";

import DeviceSwitcher from "./components/DeviceSwitcher";
import Device from "./components/Device";

const devices = {
  iPhoneX: {
    x: 375,
    y: 812
  },
  pixel2: {
    x: 411,
    y: 731
  },
  iPhone5SE: {
    x: 320,
    y: 568
  }
};

class App extends Component {
  state = {
    device: "iPhoneX"
  };

  setDevice = deviceName => {
    this.setState({ device: deviceName });
  };

  render() {
    console.log(devices[this.state.device]);
    return (
      <div className="App">
        <DeviceSwitcher setDevice={this.setDevice} />
        <Device device={devices[this.state.device]} />
      </div>
    );
  }
}

export default App;
