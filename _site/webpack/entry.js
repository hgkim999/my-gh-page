import React, {Component} from 'react';
import {render} from 'react-dom';
import RotatingBox from './components/RotatingBox';
import RotatingBoxSide from './components/RotatingBoxSide';
import FontAwesome from 'react-fontawesome';

class App extends Component {

  render() {

    return (
      <RotatingBox currentSide={0} size={360}>
        <RotatingBoxSide className="home-side">
          <div className="background"></div>
          <div className="lightbox"></div>
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
            </div>
          </div>
        </RotatingBoxSide>
        <RotatingBoxSide className="education-side">
          B
        </RotatingBoxSide>

      </RotatingBox>
    );
  }
}

render(
  <App/>, document.getElementById('react-app'));
