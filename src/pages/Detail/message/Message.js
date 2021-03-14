import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Layout from "../Layout";
import FirstContent from "../FirstContent";
import "./Message.scss";

class Message extends Component {
  render() {
    return (
      <Layout
        id="message"
        background="#000"
        color="#fff"
        item={
          <iframe
            className="message-player"
            width="608"
            height="1080"
            src="https://www.youtube.com/embed/1gZ5uX6dZos?modestbranding=1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        }
        padding="5.25%"
      >
        <FirstContent>
          <p>Video: Message</p>
          <p>Instructor: Chris Rypkema</p>
          <p>Apr 2020</p>
        </FirstContent>
        <div>
          YJ pinpoints the communication problem of the current generation—
          Millennials and
          <br />
          Generation Z.
          <br />
          <br />
          With social technologies available at our fingertips, people can
          contact each other very
          <br />
          easily. However, these same technologies also distract people from
          valuing moments of face
          <br />
          to face interaction.
          <br />
          <br />
          She believes morse code could become an effective communication means
          to solve the
          <br />
          problem. Because morse code is solely based on sound or light (blink),
          people have to fully
          <br />
          concentrate on other during a conversation instead of taking each
          other’s existence for
          <br />
          granted. This thinking process becomes a core motif for her to use
          morse code to create a<br />
          video.
        </div>
      </Layout>
    );
  }
}

export default withRouter(Message);
