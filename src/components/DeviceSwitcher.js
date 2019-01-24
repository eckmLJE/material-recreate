import React, { Component } from "react";

export default class ScreenSwitcher extends Component {
  handleDeviceSelect = e => this.props.setDevice(e.target.getAttribute("name"));

  render() {
    return (
      <div className="device-switcher" onClick={this.handleDeviceSelect}>
        <div className="switch-button-container">
          <button name="iPhoneX">iPhone X</button>
          <button name="pixel2">Pixel 2</button>
          <button name="iPhone5SE">iPhone 5/SE</button>
        </div>
      </div>
    );
  }
}
