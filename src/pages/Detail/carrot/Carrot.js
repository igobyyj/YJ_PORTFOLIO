import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Layout from "../Layout";
import FirstContent from "../FirstContent";
import "./Carrot.scss";


class Carrot extends Component {
  render() {
    return (
      <Layout
        id="carrot"
        background="#000"
        color="#fff"
        total="34"
        padding="0"
        bcPadding="30px 10.5% 0"
        margin="0"
        item={
          <img
            alt="Book:Carrot"
            src={`https://yjparkworks.s3.amazonaws.com/carrot/intro.gif`}
          />
        }
      >
        <FirstContent>
          <p>Book: Carrot</p>
          <p>Instructor: Santiago Carrasquilla</p>
          <p>Sept 2019</p>
        </FirstContent>
        <div>
          YJ uses a carrot as a medium to have a small conversation with people
          in New York
          <br />
          walking around the city for for two months. She asks the following
          question to people
          <br />
          she meets on the streets, “Do you mind me taking a photo of you and
          the carrot?”
          <br />
          <br />
          They could do whatever they want to do with the carrot. Some simply
          hold it with their
          <br />
          hands, others pose as if they are eating it. The book contains
          interesting moments of her
          <br />
          journey and people’s pure reaction to such an odd request. At the
          corner of each page, she
          <br />
          records the longitude and latitude of the locations, the duration of
          the interaction, and small
          <br />
          conversations she has with the people.
          <br />
          <br />
          She had been on the journey from 18 September to 10 November in 2019.
        </div>
      </Layout>
    );
  }
}

export default withRouter(Carrot);
