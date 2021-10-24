import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: null
    };
    this.headers = props.headers;
    this.handleClick = this.handleClick.bind(this);
  }

  // set state funct w/ logic
  handleClick(id) {
    if (this.state.expanded === id) {
      this.setState({ expanded: null });
    } else {
      this.setState({ expanded: id });
    }
  }

  // change class name funct
  changeClassName(id) {
    let retClass = 'hidden';
    if (id === this.state.expanded) {
      retClass = 'content-cont border';
    }
    return retClass;
  }

  // constructor funct
  generateLi() {
    const liArr = this.headers.map(header => {
      const li =
      <li className="content-cont" onClick={ () => this.handleClick(header.key)} key={header.key}>
        <h2 className="border bkgrd-grey">{header.title}</h2>
        <div className={this.changeClassName(header.key)}>
            <p className='dsp-inh'>{header.text}</p>
        </div>
      </li>;
      return li;
    });
    return liArr;
  }

  render() {
    return (
      <ul className="content-ul">
        {this.generateLi()}
      </ul>
    );
  }

}
