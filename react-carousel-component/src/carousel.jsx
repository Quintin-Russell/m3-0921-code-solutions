import React from 'react';

// class Arrow extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(e) {
//     this.props.passETarId(e.target.id);
//   }

//   right() {
//     this.props.
//   }

//   render() {
//     return (
//         <i onClick={this.handleClick} className="arrow fas fa-chevron-left"></i>
//     );
//   }
// }

// class DotRow extends React.Component {
//   constructor(props) {
//     super(props);
//     this.imgArr = props.imgArr;
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(e) {
//     this.props.passETarIdDot(e.target.id)
//   }

//   renderDots() {
//     let index = 0;
//     const dotLiArr = this.imgArr.map(img => {
//       <li onClick={this.handleClick}>
//         <i className="fas fa-circle"></i>
//       </li>
//     })
//   }

//   render() {
//     return(

//     )
//   }
// }

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.imgArr = props.imgArr;
    this.nextImg = this.nextImg.bind(this);
    this.prevImg = this.prevImg.bind(this);
    this.handleClickDot = this.handleClickDot.bind(this);
    this.state = {
      currentImg: 0
    };
  }

  nextImg() {
    let next = this.state.currentImg;
    (next === 4) ? next = 0 : next++;
    this.setState({ currentImg: next });
  }

  prevImg() {
    let prev = this.state.currentImg;
    (prev === 0) ? prev = 4 : prev--;
    this.setState({ currentImg: prev });
  }

  handleClickDot(e) {
    const tar = e.target.id;
    this.setState({ currentImg: tar });
  }

  renderDots() {
    let index = 0;
    const dotLiArr = this.imgArr.map(img => {
      const dot =
      <li onClick={this.handleClickDot} key={index.toString()}>
          <i className='fas fa-circle' id={index}></i>
        {/* <i className={() => { return this.state.currentImg === index ? 'fas fa-circle' : 'far fa-circle'; } } id={index}></i> */}
      </li>;
      index++;
      return dot;
    });
    return (
      <ul className='footer-ul row'>
        {dotLiArr}
      </ul>
    );
  }

  render() {
    return (
      <div className='row'>
      <div className='arrow'>
        <i onClick={this.prevImg} className="arrow fas fa-chevron-left"></i>
      </div>

      <div className="flex-col-center">
        {this.renderDots()}
      </div>

      <div className='arrow'>
        <i onClick={this.nextImg} className="arrow fas fa-chevron-right"></i>
      </div>

      </div>

    );
  }
}
