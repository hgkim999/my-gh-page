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

    const {rotateY, deltaZ, className, onClick, children} = this.props;

    const t = `rotateY(${rotateY}deg) translateZ(${deltaZ}px)`;
    const style = {
      transform: t,
    };

    return (
      <div
        className={`RotatingBoxSide ${className ? className: ''}`}
        onClick={onClick}
        style={style}
      >
        {children}
      </div>
    )
  }
}
