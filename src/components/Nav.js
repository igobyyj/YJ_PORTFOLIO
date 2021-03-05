import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const direction = [
  [0.15, 0],
  [-0.15, 0],
  [0, 0.15],
  [0, -0.15],
];
let dx = 0; //0.2;
let dy = 0;
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      color: "black",
      left: window.innerWidth / 4,
      top: window.innerHeight / 6,
      isHovering: false,
    };
    this.handleMouseHover = this.handleMouseHover.bind(this);
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  changeDirection() {
    var temp = new Date();
    if (Math.abs(temp.getTime() - this.state.date.getTime()) >= 3000) {
      var index = Math.floor(Math.random() * 4);
      dx = direction[index][0];
      dy = direction[index][1];
      this.setState({
        date: temp,
      });
    }
  }

  checkLimit() {
    if (this.state.left < 0 || this.state.left > 1200) dx = -dx;
    if (this.state.top < 18 || this.state.top > 800) dy = -dy;
  }

  tick() {
    this.changeDirection();
    this.checkLimit();
    if (this.state.isHovering === false)
      this.setState({
        left: this.state.left + dx,
        top: this.state.top + dy,
      });
  }

  render() {
    const styles = {
      containerStyle: {
        position: "fixed",
        color: this.state.color,
        left: this.state.left,
        top: this.state.top,
        transform: this.state.transform,
      },
    };
    const { containerStyle } = styles;

    return (
      <div
        className="dropdown"
        style={containerStyle}
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        {/* 41°24'12.2"N 2°10'26.5"E */}
        {new Date().toLocaleTimeString("en-US", { hour12: false })}
        {/* <button>0419</button> */}
        {/* 0419 */}
        <div className="dropdown-content">
          <Link to="/">Home</Link>
          <Link to="/message">Video: Message</Link>
          <Link to="/carrot">Book: Carrot</Link>
          <Link to="/binary">Poster: Binary</Link>
          <Link to="/toilet">Video: Toilet</Link>
          <Link to="/beauty">Anthology: Beauty</Link>
          <Link to="/love">Poster: Love</Link>
        </div>
      </div>
    );
  }
}

export default Nav;
