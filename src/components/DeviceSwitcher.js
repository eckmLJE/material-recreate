import React, { Component } from "react";
import "../App.css";

export default class ScreenSwitcher extends Component {
  handleDeviceSelect = e => this.props.setDevice(e.target.getAttribute("name"));

  render() {
    return (
      <div className="device-switcher" onClick={this.handleDeviceSelect}>
        <div className="switch-button-container">
          <button
            className={this.props.deviceName === "iPhoneX" ? "active" : null}
            name="iPhoneX"
          >
            iPhone X
          </button>
          <button
            className={this.props.deviceName === "pixel2" ? "active" : null}
            name="pixel2"
          >
            Pixel 2
          </button>
          <button
            className={this.props.deviceName === "iPhone5SE" ? "active" : null}
            name="iPhone5SE"
          >
            iPhone 5/SE
          </button>
        </div>
      </div>
    );
  }
}
