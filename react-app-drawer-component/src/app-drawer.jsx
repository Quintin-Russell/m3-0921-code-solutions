import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderDrawer = this.renderDrawer.bind(this);
  }

  handleClick() {
    if (this.state.clicked) {
      this.setState({ clicked: false });
    } else {
      this.setState({ clicked: true });
    }
  }

  renderDrawer() {
    if (this.state.clicked) {
      return (
        <div className="cont overlay" onClick={this.handleClick}>
          <div className="menu-cont">
            <h2 className="menu-header">Menu</h2>
            <ul className="menu-ul">
              <li className="menu-li" onClick={this.handleClick}>Enter a New Expense</li>
              <li className="menu-li" onClick={this.handleClick}>View Past Expenses</li>
              <li className="menu-li" onClick={this.handleClick}>View Spending Summary</li>
              <li className="menu-li" onClick={this.handleClick}>Enter a New Budget Item</li>
              <li className="menu-li" onClick={this.handleClick}>Enter a New Payment Method</li>
            </ul>
          </div>
          <div className="credits">
            <p className="extra-light">Designed by Quintin Russell</p>
            <p className="extra-light">WanderingGringo Inc. 2021</p>
          </div>
        </div>
      );
    } else {
      return (
        <i className="fas fa-align-justify" onClick={this.handleClick}></i>
      );
    }
  }

  render() {
    return (<renderDrawer />);
  }
}
