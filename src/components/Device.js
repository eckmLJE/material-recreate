import React, { Component } from "react";

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

export default class Device extends Component {
  render() {
    const { x, y } = devices[this.props.deviceName];
    return <div className="device" style={{ width: x, height: y }} />;
  }
}
