import React from 'react';

export default class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    console.log('yo yo, an email got submitted:', this.state);
    e.preventDefault();
  }

  render() {
    return (
    <form onSubmit= {this.handleSubmit}>
      <label>
        Email:
       <input placeholder="wanna have some fun?" type="email" value={this.state.value} onChange={this.handleChange}/>
      </label>
      <input type="submit" value="Submit"/>
      </form>
    );

  }
}
