import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import Layout from "../Layout";
import FirstContent from "../FirstContent";
import "./Binary.scss";

class Binary extends Component {
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
                id="binary"
                background="#000"
                color="#fff"
                total="20"
                padding="0 31.5%"
                bcPadding="30px 15.59% 0 15.59%"
                item={
                    <iframe
                        className="binary-player"
                        width="1920"
                        height="1080"
                        src="https://www.youtube.com/embed/dKBEoT-w-uU"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                }
            >

                <FirstContent>
                    <p>Poster: Binary</p>
                    <p>Instructor: Chris Rypkema</p>
                    <p>Dec 2019</p>
                </FirstContent>
                <div>
                    Binary is a numeric system used in computer based devices which only
                    uses two digits
                    <br/>— 0 and 1. This numeric system inspired YJ to create the font
                    Binary which consists of only
                    <br/>
                    two elements– vertical and horizontal lines. It does not use any
                    diagonals or curves.
                    <br/>
                    <br/>
                    The type specimen poster is solely dedicated to the font, and it
                    discusses the defintion of
                    <br/>
                    binary. She printed on a transparent film paper in order to reflect
                    digital, futuristic, and surreal
                    <br/>
                    features of binary. To download the font click{" "}
                    <a
                        href="https://fontstruct.com/fontstructions/show/1693486/binary-72"
                        target="_blank"
                        rel="noreferrer noopener"
                        style={{
                            color: "#fff",
                            cursor: "pointer",
                            fontFamily: "Alliance-SemiBold",
                        }}
                    >
                        here.
                    </a>
                    <br/>
                    <br/>
                    Video and Photo by Dyne Jeong.
                </div>
            </Layout>
        );
    }
}

export default withRouter(Binary);
