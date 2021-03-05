import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Layout from "../Layout";
import FirstContent from "../FirstContent";
import "./Beauty.scss";

class Beauty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false,
    };
    this.handleMouseHover = this.handleMouseHover.bind(this);
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHover: !state.isHover,
    };
  }

  render() {

    return (
      <Layout
        id="beauty"
        background="#fff"
        color="#000"
        total="28"
        padding="0 25%"
        bcPadding="30px 33.5% 0"
        item={
          <img
            alt="Poster:Anthology"
            src={`https://yjparkworks.s3.amazonaws.com/beauty/intro.gif`}
          />
        }
      >
        <FirstContent>
          <p>Poster: Anthology</p>
          <p>Instructor: Chris Rypkema</p>
          <p>Nov 2019</p>
        </FirstContent>
        <div>
          The anthology includes two articles from the New York Times— “South
          Korean Women
          <br />
          mash Makeup, and Patriarchy” by Maya Salam; and “South Korea Loves
          Plastic Surgery and
          <br />
          Makeup. Some Women Want to Change That” by Alexandra Stevenson.
          <br />
          <br />
          According to both articles, South Korea has the world’s highest rate
          of plastic surgery per
          <br />
          capita. In order to meet society’s beauty standards, women feel
          obligated to get painful
          <br />
          surgeries and wear makeup. Recently however, an increasing number of
          women are
          <br />
          challenging the beauty obsessed culture by participating in a campaign
          called Escape the
          <br />
          Corset. These advocators emphasize that every woman has her own unique
          value.
          <br />
          <br />
          YJ used geometric elements and tight margins to represent the
          obsession about flawless
          <br />
          appearances and innumerable black speckles to reflect the resistance
          against this
          <br />
          obsession. Throughout the pages, the collection of black speckles grow
          in scale which
          <br />
          indicates the growing dominance of the anti-corset campaign.
        </div>
      </Layout>
    );
  }
}

export default withRouter(Beauty);
