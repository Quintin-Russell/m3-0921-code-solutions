import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.timerId = null;
    this.tick = this.tick.bind(this);
    this.activate = this.activate.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0,
      status: 'atZero',
      iElm: 'fas fa-play',
      iEventListener: this.activate
    };
  }

  tick() {
    let ct = this.state.count;
    ct = ct + 1;
    this.setState({ count: ct });
  }

  activate() {
    this.setState({ status: 'active', iElm: 'fas fa-pause', iEventListener: this.pause });
    this.timerId = setInterval(this.tick, 1000);
  }

  pause() {
    clearInterval(this.timerId);
    this.setState({ status: 'pause', iElm: 'fas fa-play', iEventListener: this.activate });
  }

  reset() {
    if (this.state.status === 'pause') {
      this.setState({ count: 0, status: 'atZero' });
    }
  }

  render() {
    return (
      <div className="col-cont">
        <div onClick={this.reset} className="round-cont">
          <p className="num">{this.state.count}</p>
        </div>
        <i onClick={this.state.iEventListener} className= {this.state.iElm}></i>
      </div>
    );
  }
}
