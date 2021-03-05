import React, { Component } from "react";
import styled from "styled-components";

const Content = styled.div``;

export default class FirstContent extends Component {
  render() {
    return <Content {...this.props}>{this.props.children}</Content>;
  }
}
