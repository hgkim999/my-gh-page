"use strict";
/**
 * @flow
 */

import React, { Component, PropTypes } from 'react';

import FontAwesome from 'react-fontawesome';
import SkillData from '../data/SkillData.json';

const weightClassNames = [
  'master',
  'extra',
  'good',
  'specialized',
];

export default class SkillsBox extends Component {
  props: {
    highlightedSkills: Array<any>,
    onClick: Function,
  };

  static propTypes = {
    highlightedSkills: PropTypes.array,
    onClick: PropTypes.func,
  }

  render() {
    const {highlightedSkills} = this.props;

    let prioritySkilList = [];
    let skillList = [];

    SkillData.map((skill, index) => {
      if(highlightedSkills !== null && highlightedSkills.includes(skill.name)) {
        prioritySkilList.push(
          <li
            className={`${skill.name} ${weightClassNames[skill.weight]} highlighted`}
            key={index}>
            {skill.label}
          </li>
        );
      } else {
        skillList.push(
          <li
            className={`${skill.name} ${weightClassNames[skill.weight]}`}
            key={index}>
            {skill.label}
          </li>
        )
      }
    });

    let dimmedClassName = highlightedSkills && (highlightedSkills.length > 0) ? 'dimmed': '';

    return (

      <div
        className={`SkillsBox-root ${dimmedClassName}`}>
        <div className="backdrop"/>
        <div className="title">SKILLS</div>
        <div className="top-gradient"/>
        <div className="bottom-gradient"/>
        <ul className="wrapper">
          {prioritySkilList}
          {skillList}
        </ul>
      </div>
    )
  }
}
