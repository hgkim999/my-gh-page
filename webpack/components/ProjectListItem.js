"use strict";
/**
 * @flow
 */

import React, { Component, PropTypes } from 'react';

import FontAwesome from 'react-fontawesome';

export default class FancyListItem extends Component {

  render() {
    const {name, role, description, link, time, skills} = this.props.project;
    const {onMouseEnterProject, onMouseLeaveProject} = this.props;

    return (
      <div
        className="ProjectListItem-root"
        onMouseEnter={(event) => {
          onMouseEnterProject(skills);
        }}
        onMouseLeave={onMouseLeaveProject}>
        <div className="dot">
          <FontAwesome name="circle"/>
          <FontAwesome name="circle-thin"/>
        </div>
        <div className="inner">
          <div className="name">
            {name}
          </div>
          <div className="role">
            {role}
          </div>
          <div className="link">
            <a href={link} target="_blank">{link}</a>
          </div>
          <div className="time">
            {time}
          </div>
          <div className="description">
            {description}
          </div>
        </div>
      </div>
    )
  }
}
