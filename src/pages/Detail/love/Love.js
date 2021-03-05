import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Layout from "../Layout";
import FirstContent from "../FirstContent";
import "./Love.scss";

class Love extends Component {
  render() {
    return (
      <Layout
        id="love"
        background="#000"
        color="#fff"
        padding="0px 31.5%"
        item={
          <img
            alt="Poster:Love"
            src="https://yjparkworks.s3.amazonaws.com/love/scans/0.jpg"
          />
        }
      >
        <FirstContent>
          <p>Poster: Love</p>
          <p>Instructor: Santiago Carrasquilla</p>
          <p>Dec 2019</p>
        </FirstContent>
        <div>
          The poster is about one thing in her life that she is most grateful
          for— love.
          <br />
          When thinking of love, people tend to visualize beauty and hope.
          <br />
          However, she captures ridiculous, inconvenient, and consuming essences
          of love through <br />a huge abstract image in the middle which
          reflects her belief that they are the aspects of love <br />
          that make people grow stronger.
        </div>
      </Layout>
    );
  }
}

export default withRouter(Love);
