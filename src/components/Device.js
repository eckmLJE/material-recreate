import React, { Component } from "react";

export default class Device extends Component {
  render() {
    const { x, y } = this.props.device;
    return <div className="device" style={{ width: x, height: y }} />;
  }
}
