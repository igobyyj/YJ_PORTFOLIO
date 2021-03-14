import React, { Component } from "react";
import styled from "styled-components";
import Nav from "../../components/DesktopNav";
import MobileNav from "../../components/MobileNav";
import "./Main.scss";

const MobileMain = styled.div`
    width: 100%;
    padding: 17px;
    font-family: "Alliance-SemiBold";
    line-height: 1.1;
    font-size: 5vh;

    @media screen and (min-width: 1024px) {
        font-size: 6.5vh;
    }

    @media screen and (max-width: 400px) {
        font-size: 4.5vh;
    }

    @media screen and (max-width: 300px) {
        font-size: 4vh;
    }
`;

const MainEmail = styled.div`
    position: fixed;
    font-size: 3vh;
    font-family: "Alliance-SemiBold";
    bottom: 0;
`;

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleTimeString("en-US", { hour12: false })
        };
    }

    tick() {
        this.setState({
            date: new Date().toLocaleTimeString("en-US", { hour12: false })
        });
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    copyToClipboard(e) {
        e.preventDefault();
        let t = document.createElement("textarea");
        document.body.appendChild(t);
        t.value = "yjparkworks@gmail.com";
        t.select();
        document.execCommand("copy");
        document.body.removeChild(t);
        alert("Copied!");
    }

    render() {
        if (window.innerWidth > 1024) {
            return (
                <div className="main">
                    <Nav />
                    <div className="vertical_line"></div>
                    <div className="horizontal_line"></div>
                    <div className="main_section">
                        <div className="email">
                            Resume is available upon request. For more questions
                            and queries email{" "}
                            <a href="" onClick={this.copyToClipboard}>
                                yjparkworks@gmail.com
                            </a>
                        </div>
                        <div className="mail_first"></div>
                        <div className="first_line">
                            <span className="YJ">YJ</span>
                            <span className="YJ_Park"> </span>
                            <span className="Park">Park</span>
                            <span className="Park_is"> </span>
                            <span className="is">is</span>
                            <span className="is_a"> </span>
                            <span className="a">a</span>
                        </div>
                        <div className="first_second"></div>
                        <div className="second_line">
                            <span className="CODE">CODE</span>
                            <span className="CODE_signer"> </span>
                            <span className="signer">signer</span>
                        </div>
                        <div className="third_line">
                            <span className="who">who</span>
                            <span className="who_CODES"> </span>
                            <span className="CODES">CODES</span>
                        </div>
                        <div className="third_fourth"></div>
                        <div className="fourth_line">
                            <span className="and">and</span>
                            <span className="and_a"> </span>
                            <span className="a1">a</span>
                        </div>
                        <div className="fourth_fifth"></div>
                        <div className="fifth_line">
                            <span className="COdesigner">COdesigner</span>
                        </div>
                        <div className="fifth_sixth"></div>
                        <div className="sixth_line">
                            <span className="who">who</span>
                            <span className="who_believes"> </span>
                            <span className="believes">believes</span>
                        </div>
                        <div className="sixth_seventh"></div>
                        <div className="seventh_line">
                            <span className="in">in</span>
                            <span className="in_the"> </span>
                            <span className="the">the</span>
                            <span className="the_value"> </span>
                            <span className="value">value</span>
                            <span className="value_of"> </span>
                            <span className="of">of</span>
                        </div>
                        <div className="seventh_eighth"></div>
                        <div className="eighth_line">
                            <span className="CO">CO</span>
                            <span className="NNE">NNE</span>
                            <span className="CT">CT</span>
                            <span className="ED">ED</span>
                            <span className="NE">NE</span>
                            <span className="SS">SS</span>
                            <span className="period">.</span>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <MobileMain>
                    <MobileNav
                        background="#000"
                        color="#fff"
                        onClick={() => this.props.history.push("/list")}
                    >
                        {this.state.date}
                    </MobileNav>
                    <div>YJ Park is a</div>
                    <div>CODEsigner</div>
                    <div>who CODES</div>
                    <div>and a</div>
                    <div>COdesigner</div>
                    <div>who believes</div>
                    <div>in the value of</div>
                    <div>
                        CONNECTEDNESS.
                        <br />
                    </div>
                    <MainEmail>
                        <a href="" onClick={this.copyToClipboard}>
                            yjparkworks@gmail.com
                        </a>
                    </MainEmail>
                </MobileMain>
            );
        }
    }
}

export default Main;
