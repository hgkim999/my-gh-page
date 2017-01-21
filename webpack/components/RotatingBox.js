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
    perspective: 3000,
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
    const {size, className, perspective} = this.props;

    let sidesCount = React.Children.count(this.props.children);
    this.sidesCount = React.Children.count(this.props.children);
    if (sidesCount < 4) {
      sidesCount = 4;
    }

    const deltaZ = size / 2 / Math.tan(Math.PI / sidesCount );

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

    let transform = `rotateY(${-360 / sidesCount * this.state.currentSide}deg)`;

    const containerStyle = {
      height: `${size}px`,
      width: `${size}px`,
      perspective: `${perspective}px`,
    };

    const boxStyle = {
      transform: transform,
    };

    return (
      <div
        className={`RotatingBox-container ${className ? className : ''}`}
        style={containerStyle}>
        <div className="RotatingBox-box" style={boxStyle}>
          {sides}
        </div>
      </div>
    )
  }
}
