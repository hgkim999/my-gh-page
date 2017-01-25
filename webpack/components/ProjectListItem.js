"use strict";
/**
 * @flow
 */

import React, { Component, PropTypes } from 'react';

import FontAwesome from 'react-fontawesome';

export default class FancyListItem extends Component {

  render() {
    const {name, role, description, link, time, skills} = this.props.project;
    const {onMouseEnterProject, onMouseLeaveProject, color} = this.props;

    let style = {
      backgroundColor: color,
    };

    return (
      <div
        className="ProjectListItem-root"
        style={style}
        onMouseEnter={(event) => {
          onMouseEnterProject(skills);
        }}
        onMouseLeave={onMouseLeaveProject}>
        <div className="backdrop"/>
        <div className="inner">
          <div className="name">
            {link ? <a href={link} target="_blank">{name}<FontAwesome name="external-link-square"/></a> : <span>{name}</span>}
          </div>
          <div className="role">
            {role}
          </div>
          <div className="skills">
            {skills}
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
