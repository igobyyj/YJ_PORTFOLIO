import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Layout from "../Layout";
import FirstContent from "../FirstContent";
import "./Toilet.scss";

class Toilet extends Component {
  render() {
    return (
      <Layout
        id="toilet"
        background="#000"
        color="#fff"
        item={
          <iframe
            className="toilet-player"
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/2fJJZ_C_txI?modestbranding=1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        }
      >
        <FirstContent>
          <p>Video: Toilet</p>
          <p>Instructor: Santiago Carrasquilla</p>
          <p>Oct 2019</p>
        </FirstContent>
        <div>
          A situation in which a person cannot obtain something he or she
          desperately needs evokes a<br />
          feeling of anger. In the video, a man is trying to reach for the
          toilet paper but he cannot
          <br />
          because it is constantly moving. YJ creates the video to discuss the
          emotion of anger in an
          <br />
          interesting manner.
        </div>
      </Layout>
    );
  }
}

export default withRouter(Toilet);
