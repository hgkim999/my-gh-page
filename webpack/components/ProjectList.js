"use strict";

/**
 * @flow
 */

import React, {Component, PropTypes} from 'react';
import ProjectListItem from './ProjectListItem';
import projectJSON from '../data/ProjectData.json';

export default class ProjectList extends Component {
  state: {
    projectData: Array<Object>,
  };

  static defaultProps = {
  };

  constructor(props: Array<any>) {
    super(props);
    this.state = { projectData: projectJSON };
  }

  componentDidMount() {
  }

  render() {

    const { onMouseEnterProject, onMouseLeaveProject } = this.props;

    const {projectData} = this.state;

    let projectList = [];

    projectData.map((project, index) => {
      projectList.push(
        <li key={index}>
          <ProjectListItem
            project={project}
            onMouseEnterProject={onMouseEnterProject}
            onMouseLeaveProject={onMouseLeaveProject}/>
        </li>
      );
    });

    return (
      <div
        className={'ProjectList-root'}>
        <div className="vertical-line">
        </div>
        {projectList}
      </div>
    )
  }
}
