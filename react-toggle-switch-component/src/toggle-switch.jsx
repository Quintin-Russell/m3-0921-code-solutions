import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.togglePower = this.togglePower.bind(this);
    this.state = {
      power: 'container on',
      text: 'On'
    };
  }

  togglePower() {
    if (this.state.power === 'container on') {
      this.setState({ power: 'container off', text: 'Off' });
    } else {
      this.setState({ power: 'container on', text: 'On' });
    }
  }

  render() {
    return (
      <div className="row">
        <div onClick= {this.togglePower} className={this.state.power}>
          <div className="slider"></div>
        </div>
        <p className="text">{this.state.text}</p>
      </div>
    );
  }
}

export default ToggleSwitch;
