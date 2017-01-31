"use strict";

/**
 * @flow
 */

import ProjectListItem from './ProjectListItem';
import projectJSON from '../data/ProjectData.json';

import React, {Component, PropTypes} from 'react';
import ReactDom from 'react-dom';

const colorTable = [
  '#145F7F',
  '#54b0d8',
  '#29BEFF',
  '#3B6B7F',
  '#2198CC',
];

export default class ProjectList extends Component {
  state: {
    extraClassName: string,
    projectData: Array<Object>,
  };

  static defaultProps = {
  };

  constructor(props: Array<any>) {
    super(props);
    this.state = { extraClassName: '', projectData: projectJSON };
  }

  componentDidMount() {
  }

  _onMouseEnterProject() {
    this.setState({extraClassName: 'focused'});
  }

  _onMouseLeaveProject() {
    this.setState({extraClassName: ''});
  }

  render() {

    const { onMouseEnterProject, onMouseLeaveProject } = this.props;

    const {extraClassName, projectData} = this.state;

    let projectList = [];

    projectData.map((project, index) => {
      projectList.push(
        <li key={index}>
          <ProjectListItem
            project={project}
            color={colorTable[index % colorTable.length]}
            onMouseEnterProject={this._onMouseEnterProject.bind(this)}
            onMouseLeaveProject={this._onMouseLeaveProject.bind(this)}/>
        </li>
      );
    });

    return (
      <div
        className={`ProjectList-root ${extraClassName}`}>
        {projectList}
      </div>
    )
  }
}
