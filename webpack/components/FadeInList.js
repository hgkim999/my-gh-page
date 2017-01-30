"use strict";
/**
 * @flow
 */

import React, { Component, PropTypes } from 'react';

export default class FadeInList extends Component {
  props: {
    name?: string,
    delay?: number,
    step: number,
    children: Array<Element>,
  }

  static propTypes = {
    name: PropTypes.string,
    delay: PropTypes.number,
    step: PropTypes.number,
  }

  static defaultProps = {
    name: '',
    delay: 0,
    step: 1,
  }

  constructor(props: Array<any>) {
    super(props);
  }

  render() {

    let {name, delay, step, children} = this.props;

    let listItems = React.Children.map(children, (item, idx) => {
      return React.cloneElement(
        item,
        {
          className: `list-item item-${name} ${item.props.className} delay-a-${delay + idx * step}`,
          key: idx,
        },
      );
    });

    return (
      <ul
        className={`list-item list-${name}`}
      >
        {listItems}
      </ul>
    )
  }
}
