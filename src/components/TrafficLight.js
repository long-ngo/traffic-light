import React from 'react';
import classNames from 'classnames';
import './TrafficLight.css';

const RED = 0, ORANGE = 1, GREEN = 2;

class TrafficLight extends React.Component {
  render() {
    const {currentColor} = this.props;
    return(
      <div className="TrafficLight">
        <div className={classNames('bulb', 'red', {
          active: currentColor === RED
        })}></div>
        <div className={classNames('bulb', 'orange', {
          active: currentColor === ORANGE
        })}></div>
        <div className={classNames('bulb', 'green', {
          active: currentColor === GREEN
        })}></div>
      </div>
    )
  }
}

export default TrafficLight;

