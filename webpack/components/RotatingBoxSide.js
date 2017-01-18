"use strict";
/**
 * @flow
 */

import React, { Component } from 'react';

export default class RotatingBoxSide extends Component {

  constructor(props: Array<any>) {
    super(props);
  }

  render() {
    const t = `rotateY(${this.props.rotateY}deg) translateZ(${this.props.deltaZ}px)`;
    const style = {
      transform: t,
    };

    return (
      <div
        className={`RotatingBoxSide ${this.props.className}`}
        onClick={this.props.onClick}
        style={style}
      >
        {this.props.children}
      </div>
    )
  }
}
