import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      text: 'A password is required.',
      iValue: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const val = e.target.value;
    this.setState({ password: val });
    const valLen = val.length;
    if (valLen === 0) {
      this.setState({ text: 'A password is required' });
    } else if ((valLen > 0) && (valLen < 8)) {
      this.setState({ text: 'Your password is too short.', iValue: 'far fa-times-circle' });
    } else {
      this.setState({ text: '', iValue: 'far fa-check-square' });
    }
  }

  render() {
    return (
      <form action="" id="passwordForm">
        <h2 className="title">Password</h2>
        <div className="row">
          <label htmlFor="password">
            <input onChange={this.handleChange} type="password" id="password" name="password"/>
          </label>
          <i className={this.state.iValue}></i>
        </div>
        <p className="red">{this.state.text}</p>
      </form>
    );
  }

}
