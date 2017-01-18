"use strict";
/**
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import RotatingBoxSide from './RotatingBoxSide';

export default class RotatingBox extends Component {
  state: {
    currentSide: number,
  };
  sidesCount: number;

  static defaultProps = {
    currentSide: 0,
    size: 300,
  };

  constructor(props: Array<any>) {
    super(props);
    this.state = {currentSide: this.props.currentSide};
    this._onClick = this._onClick.bind(this);
  }

  _onClick = () => {
    let nextSide = this.state.currentSide + 1;
    if (nextSide >= this.sidesCount) {
      nextSide = 0
    }
    this.setState({
      currentSide: nextSide,
    });
  };

  componentDidMount() {
    this.sidesCount = React.Children.count(this.props.children);
  }

  render() {
    let sidesCount = React.Children.count(this.props.children);
    this.sidesCount = React.Children.count(this.props.children);
    if (sidesCount < 4) {
      sidesCount = 4;
    }

    const deltaZ = this.props.size / 2 / Math.tan(Math.PI / sidesCount );

    const sides = React.Children.map(
      this.props.children,
      (child, index) => {
        let rotateY = 360 / sidesCount * index;
        return React.cloneElement(child, {
          value: index,
          rotateY: rotateY,
          deltaZ: deltaZ,
          onClick: this._onClick,
        });
      }
    );

    const transform = `rotateY(${-360 / sidesCount * this.state.currentSide}deg)`;

    const containerStyle = {
      height: `${this.props.size}px`,
      width: `${this.props.size}px`,
    }

    const boxStyle = {
      transform: transform,
    };

    return (
      <div
        className={`RotatingBox-container ${this.props.className}`}
        style={containerStyle}>
        <div className="RotatingBox-box" style={boxStyle}>
          {sides}
        </div>
      </div>
    )
  }
}
