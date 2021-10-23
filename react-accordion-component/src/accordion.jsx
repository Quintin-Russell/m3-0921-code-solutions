// import React from 'react';

// const headers = [
//   {
//     title: 'CSS',
//     text: 'CSS is awesome, but sometimes frustrating',
//     key: '01'
//   },
//   {
//     title: 'HTML',
//     text: 'HTML is cool',
//     key: '02'
//   },
//   {
//     title: 'JavaScript',
//     text: 'JS is also really cool',
//     key: '03'
//   }
// ];

// class ContentCont extends React.Component {
//   constructor(props) {
//     super(props);
//     this.contentLi = this.contentLi.bind(this);
//     this.controlClassName = this.controlClassName.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//     console.log('headers in constructor', headers);
//   }

//   controlClassName(val) {
//     let className = 'hidden';
//     if (this.props.clicked === val) {
//       className = 'content-cont border';
//     }
//     return className;
//   }

//   handleClick(e) {
//     console.log('so far so good in handleClick');
//     this.props.target(e.target.data);
//     console.log('this.props; expected- e.target.data', this.props);
//   }

//   // contentLi with headers stored as global array
//   contentLi() {
//     console.log('headers in contentLi funct', headers);
//     const contLi = headers.map(header => {
//       const hKey = header.key;
//       const li =
//         <li className="content-cont" onClick={this.handleClick} data={hKey} key={hKey}>
//           <h2 className="border bkgrd-grey">{header.title}</h2>
//           <div className={this.controlClassName({ hKey })}>
//             <p>{header.text}</p>
//           </div>
//         </li>;
//       console.log('li key', hKey, 'li:', li);
//       return li;
//     }
//     );
//     return contLi;
//   }

//   // contLi using this.props.headers w/ headers stored in Accordion this.state
//   // contentLi() {
//   //   console.log('this.props.headers in contentLi funct', this.props.headers);
//   //   const contLi = this.props.headers.map(header => {
//   //     const hKey = header.key;
//   //     const li =
//   //     <li className="content-cont" onClick={ this.handleClick } data={ hKey } key = { header.key }>
//   //       <h2 className="border bkgrd-grey">{ header.title }</h2>
//   //       <div className= { this.controlClassName({ hKey }) }>
//   //         <p>{ header.text }</p>
//   //       </div>
//   //     </li>;
//   //     console.log('li key', hKey, 'li:', li);
//   //     return li;
//   //   }
//   //   );
//   //   return contLi;
//   // }

//   // contentLi() {
//   //   const contLi = this.props.headers.map((header) =>
//   //       <h2 onClick={this.props.handleClick} className="border bkgrd-grey">{header.title}</h2>
//   //       <div className="content-cont border">
//   //         <p>{header.text}</p>
//   //       </div>
//   //   );
//   //   return contLi;
//   // }

//   render() {
//     console.log('this.props in render()', this.props);
//     return (
//       <this.contentLi />
//     );
//   }
// }

// export default class Accordion extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//     this.state = {
//       clicked: null
//       // headers: [
//       //   {
//       //     title: 'CSS',
//       //     text: 'CSS is awesome, but sometimes frustrating',
//       //     key: '01'
//       //   },
//       //   {
//       //     title: 'HTML',
//       //     text: 'HTML is cool',
//       //     key: '02'
//       //   },
//       //   {
//       //     title: 'JavaScript',
//       //     text: 'JS is also really cool',
//       //     key: '03'
//       //   }
//       // ]
//     };
//   }

//   StChange(e) {
//     const tar = e.target.data;
//     this.setState({ clicked: tar });
//     console.log('handler attached to h2', this.state);
//   }

//   render() {
//     return (
//       <ul className="content-ul">
//         <ContentCont
//         onClick={this.handleClick}
//         target={this.StChange} />
//       </ul>
//     );
//   }
// }
