import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 0;
    this.state = {
      color: 'indigo'
    };
    this.count = this.count.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  count() {
    this.counter++;
    this.changeColor();
  }

  changeColor() {
    const ct = this.counter;
    if (ct === 3) {
      this.setState({ color: 'lighter' });
    } else if (ct === 6) {
      this.setState({ color: 'lightest' });
    } else if (ct === 9) {
      this.setState({ color: 'maroon' });
    } else if (ct === 12) {
      this.setState({ color: 'orange' });
    } else if (ct === 15) {
      this.setState({ color: 'yellow' });
    } else if (ct > 15) {
      this.setState({ color: 'white' });
    }
  }

  render() {
    return (
      <button onClick={this.count} className={this.state.color}>Hot Button</button>
    );
  }
}

export default HotButton;
