
import RotatingBox from './components/RotatingBox';
import RotatingBoxSide from './components/RotatingBoxSide';
import ProjectList from './components/ProjectList';
import SkillsBox from './components/SkillsBox';

import React, {Component} from 'react';
import {render} from 'react-dom';

import FontAwesome from 'react-fontawesome';

class App extends Component {
  state: {
    highlightedSkills: ?Array<Object>,
    selectedSkill: ?Arrat<Object>,
  }

  constructor(props) {
    super(props);
    this.state = {highlightedSkills: null, selectedSkill: null};
    this._onMouseEnterProject = this._onMouseEnterProject.bind(this);
    this._onMouseLeaveProejct = this._onMouseLeaveProejct.bind(this);
    console.log('%cWelcome!', 'color: #fff; text-shadow: 1px 1px 2px black, 0 0 25px #00B3E3, 0 0 5px #0093a3; font-size: 28px;');
    console.log('The full source code is available here:');
    console.log('%chttps://github.com/hgkim999/page', 'color: #00B3E3;');
    console.log('Please use email button if you have any question!');
  }

  _onMouseEnterProject = (skills) => {
    this.setState({highlightedSkills: skills});
  };

  _onMouseLeaveProejct = () => {
    this.setState({highlightedSkills: null});
  };

  render() {

    return (
      <div className="wrapper">
        <div className="leftColumn">
          <RotatingBox currentSide={0} size={400}>
            <RotatingBoxSide className="home-side">
              <div className="background"></div>
              <div className="lightbox"></div>
              <div className="rightArrow">
                <FontAwesome name="chevron-right" size="2x"/>
              </div>
              <div className="contents-wrapper">
                <div className="firstName">SAMUEL</div>
                <div className="lastName">HYUNGYU KIM</div>
                <div className="tilide">~</div>
                <div className="description">
                  Creative Technologist<br/>
                  Full-stack Web Developer
                </div>
                <div className="links">
                  <a href="https://www.linkedin.com/in/samuelhgkim/" target="_blank">
                    <FontAwesome name="linkedin" size="2x"/>
                  </a>
                  <a href="https://github.com/hgkim999" target="_blank">
                    <FontAwesome name="github" size="2x"/>
                  </a>
                  <a href="mailto:contact@samuelkim.me" target="_blank">
                    <FontAwesome name="envelope" size="2x"/>
                  </a>
                </div>
              </div>
            </RotatingBoxSide>
            <RotatingBoxSide className="exp-side">
              <div className="background"></div>
              <div className="lightbox"></div>
              <div className="leftArrow">
                <FontAwesome name="chevron-left" size="2x"/>
              </div>
              <div className="contents-wrapper">
                <div className="title">EXPERIENCES</div>
                <div className="exp-wrapper">
                  <div className="exp-row">
                    <div className="exp-combined">
                      <div className="position">Lead Software Engineer</div>
                      <div className="prof">Full-stack, Architectural Design</div>
                      <div className="company">Carpool Agency</div>
                      <div className="year">June 2016 - Present</div>
                    </div>
                  </div>
                  <hr/>
                  <div className="exp-row">
                    <div className="exp-combined">
                      <div className="position">Software Engineer</div>
                      <div className="prof">Full-stack, Universal App</div>
                      <div className="company">Carpool Agency</div>
                      <div className="year">March 2015 - July 2016</div>
                    </div>
                  </div>
                  <hr/>
                  <div className="exp-row">
                    <div className="exp-combined">
                      <div className="position">Sergeant</div>
                      <div className="prof">UNIX Apache Server, Network Manager</div>
                      <div className="company">Republic of Korea Army</div>
                      <div className="year">March 2009 - Jan 2011</div>
                    </div>
                  </div>
                </div>
              </div>
            </RotatingBoxSide>
          </RotatingBox>

          <quote>
          </quote>
        </div>
        <div className="rightColumn">
          <div className="project-list-title">
            PROJECTS
          </div>
          <div className="projectsListWrapper">
            <ProjectList
              onMouseEnterProject={this._onMouseEnterProject}
              onMouseLeaveProject={this._onMouseLeaveProejct}/>
          </div>
          <SkillsBox highlightedSkills={this.state.highlightedSkills}/>
        </div>
      </div>
    );
  }
}

render(
  <App/>, document.getElementById('react-app'));
