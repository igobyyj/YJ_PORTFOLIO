import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ListWrapper = styled.div`
  width: 100%;
  padding: 17px;
  font-size: 5vh;
  font-family: "Alliance-SemiBold";
  line-height: 1.1;

  @media (min-width: 1024px) {
    font-size: 6.5vh;
  }
`;

const ListTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  padding: 5px;
  font-size: 15px;
  width: 74px;
  height: 26px;
  font-family: "Alliance-Light";
  cursor: pointer;
  background: #000;
  color: #fff;

  @media screen and (min-width: 320px) {
    top: 17px;
    right: 17px;
    padding: 5px;
    font-size: 10px;
    width: 46px;
    height: 16px;
  }

  @media screen and (min-width: 1024px) {
    top: 17px;
    right: 17px;
    padding: 5px;
    font-size: 15px;
    width: 74px;
    height: 26px;
  }
`;

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString("en-US", { hour12: false }),
    };
  }

  tick() {
    this.setState({
      date: new Date().toLocaleTimeString("en-US", { hour12: false }),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <ListWrapper>
        <ListTime onClick={() => this.props.history.push("/")}>
          {this.state.date}
        </ListTime>
        <Link to="/message">Video: Message</Link>
        <br />
        <Link to="/carrot">Book: Carrot</Link>
        <br />
        <Link to="/binary">Poster: Binary</Link>
        <br />
        <Link to="/toilet">Video: Toilet</Link>
        <br />
        <Link to="/beauty">Anthology: Beauty</Link>
        <br />
        <Link to="/love">Poster: Love</Link>
        {/* <br />
        <Link to="/">Home</Link> */}
      </ListWrapper>
    );
  }
}
