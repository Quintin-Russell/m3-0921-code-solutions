import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.imgArr = props.imgArr;
    this.nextImg = this.nextImg.bind(this);
    this.prevImg = this.prevImg.bind(this);
    // this.imgArr = props.imgArr;
    this.handleClickDot = this.handleClickDot.bind(this);
    this.state = {
      currentImg: 0
    };
  }

  nextImg() {
    let next = this.state.currentImg;
    (next === this.props.imgArr.length - 1) ? next = 0 : next++;
    this.setState({ currentImg: next });
  }

  prevImg() {
    let prev = this.state.currentImg;
    (prev === 0)
      ? prev = this.props.imgArr.length - 1
      : prev--;
    this.setState({ currentImg: prev });
  }

  handleClickDot(e) {
    const tar = parseInt(e.target.id);
    this.setState({ currentImg: tar });
  }

  renderDots() {
    let index = 0;
    const dotLiArr = this.props.imgArr.map(img => {
      const dot =
      <li onClick={this.handleClickDot} key={index.toString()}>
        <i className={this.state.currentImg === index ? 'fas fa-circle' : 'far fa-circle'} id={index}></i>
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

  renderPhoto() {
    const photoIndex = this.state.currentImg;
    const photo = this.props.imgArr[photoIndex];
    return (
      <div className="img-cont">
        <img src={photo.src} alt={photo.alt} className="image"/>
        </div>
    );
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.nextImg(),
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className='row'>
      <div className='arrow'>
        <i onClick={this.prevImg} className="arrow fas fa-chevron-left"></i>
      </div>

      <div className="flex-col-center">
        {this.renderPhoto()}
        {this.renderDots()}
      </div>

      <div className='arrow'>
        <i onClick={this.nextImg} className="arrow fas fa-chevron-right"></i>
      </div>

      </div>

    );
  }
}
