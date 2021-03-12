import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import styled from "styled-components";
import "../../components/Nav.scss";
import MobileNav from "../../components/MobileNav";
import { ReactComponent as ArrowUpBlack } from "../../styles/arrow_up_black.svg";
import { ReactComponent as ArrowUpWhite } from "../../styles/arrow_up_white.svg";

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
    background-color: ${(props) => props.background};
    color: ${(props) => props.color};
`;

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    margin: ${(props) =>
        props.margin ? props.margin : "70px 160px 30px 160px"};
    text-align: center;

    @media screen and (min-width: 320px) {
        &.carrot {
            margin-top: 50px;
        }

        margin: 58px 25px 25px 25px;
    }

    @media screen and (min-width: 768px) {
        &.carrot {
            margin: 58px 0 30px 0;
        }

        margin: 58px 70px 30px;
    }

    @media screen and (min-width: 1024px) {
        min-height: 80vh;
        margin: ${(props) =>
            props.margin ? props.margin : "70px 160px 30px 160px"};

        &.carrot {
            margin: 0 0 -30px 0;
        }
    }
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: ${(props) =>
        props.type === "iframe"
            ? "20px 0 0 0"
            : props.padding
            ? props.padding
            : "20px 32.5%"};

    img {
        width: 100%;
        height: 82vh;
        object-fit: contain;
    }

    @media screen and (max-width: 1024px) {
        &:not(.carrot) {
            padding: 0 10%;
        }
        min-height: ${(props) => props.type === "iframe" && props.minHeight};
    }
`;

const IframeContainer = styled.div`
    position: relative;
    width: 100%;
    height: 81vmin;
    margin: 0 auto;
    float: none;
    clear: both;
    text-align: center;

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100vw;
        height: 100vh;
        margin: 0 auto;
    }

    .toilet-player {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 85%;
        height: 100%;
        margin: 0 auto;
        float: none;
        clear: both;
        text-align: center;

        @media screen and (max-width: 1024px) {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            float: none;
            clear: both;
            text-align: center;
        }
    }

    .message-player {
        position: absolute;
        top: 0;
        left: 0;
        width: 30%;
        height: 100%;
        float: none;
        clear: both;
        text-align: center;

        @media screen and (max-width: 1024px) {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            float: none;
            clear: both;
            text-align: center;
        }
    }

    .binary-player {
        position: absolute;
        top: 0;
        left: 0;
        width: 85%;
        height: 100%;
        float: none;
        clear: both;
        text-align: center;

        @media screen and (max-width: 1024px) {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            float: none;
            clear: both;
            text-align: center;
        }
    }
`;

const Time = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Alliance-Light";
    background-color: ${(props) => props.background};
    color: ${(props) => props.color};
    top: 30px;
    width: 100px;
    height: 34px;
    padding: 0;
    font-size: 1.8vmin;

    @media screen and (min-width: 250px) {
        top: 17px;
        right: 17px;
        width: 46px;
        height: 16px;
        padding: 5px;
        font-size: 10px;
    }

    @media screen and (min-width: 1200px) {
        top: 30px;
        left: 30px;
        right: 0;
        width: 100px;
        height: 34px;
        padding: 10px;
        font-size: 20px;
    }
`;

const ScrollToTopButton = styled(ScrollToTop)`
    position: fixed;
    z-index: 2;
    transition: opacity 1s ease-in-out;
    cursor: pointer;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 7px;

    @media screen and (min-width: 320px) {
        right: 27px;
        bottom: 17px;
        width: 25px;
        height: 25px;

        svg {
            width: 12px;
        }
    }

    @media screen and (min-width: 1200px) {
        left: 50px;
        bottom: 30px;
        width: 40px;
        height: 40px;

        svg {
            width: 20px;
        }
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0 125px;
    padding: 20px 0;
    border: ${(props) =>
        props.background === "#000"
            ? "0.5px solid rgba(255, 255, 255, 0.5)"
            : "0.5px solid rgba(0, 0, 0, 0.5)"};
    border-left: none;
    border-right: none;
    font-family: "Alliance-Regular" !important;

    @media screen and (min-width: 320px) {
        margin: 0 25px;
    }

    @media screen and (min-width: 1024px) {
        margin: 0px 70px 0px;
    }

    @media screen and (min-width: 1200px) {
        margin: 0px 125px;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 70vw;
    font-size: 1.6vmin;
    margin: 0 auto;
    line-height: 1.4;

    @media screen and (max-width: 1024px) {
        width: 100vw;
        font-size: 1vmin;
    }
    @media screen and (max-width: 375px) {
        width: 100vw;
        font-size: 1.4vmin;
    }
`;

const BottomContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: ${(props) => (props.padding ? props.padding : "30px 32.5%")};

    img {
        width: 100%;
        height: 100%;
    }

    &:last-child {
        padding-bottom: 30px;
    }
`;

class Layout extends Component {
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

    render() {
        return (
            <Wrapper
                background={this.props.background}
                color={this.props.color}
                id={this.props.id}
            >
                {window.innerWidth > 1200 ? (
                    <Time
                        className="dropdown"
                        background={
                            this.props.background === "#000" ? "#fff" : "#000"
                        }
                        color={
                            this.props.background === "#000" ? "#000" : "#fff"
                        }
                    >
                        {this.state.date}
                        <div
                            className="dropdown-content"
                            style={{
                                top: "33px",
                                left: "0px",
                                fontFamily: "Alliance-SemiBold"
                            }}
                        >
                            <Link to="/">Home</Link>
                            <Link to="/Message">Video: Message</Link>
                            <Link to="/Carrot">Book: Carrot</Link>
                            <Link to="/Binary">Poster: Binary</Link>
                            <Link to="/Toilet">Video: Toilet</Link>
                            <Link to="/Beauty">Anthology: Beauty</Link>
                            <Link to="/Love">Poster: Love</Link>
                        </div>
                    </Time>
                ) : (
                    <MobileNav
                        background={
                            this.props.background === "#000" ? "#fff" : "#000"
                        }
                        color={
                            this.props.background === "#000" ? "#000" : "#fff"
                        }
                        onClick={() => this.props.history.push("/list")}
                    >
                        {this.state.date}
                    </MobileNav>
                )}
                <ItemContainer
                    margin={this.props.margin}
                    className={this.props.id}
                >
                    {this.props.item.type === "iframe" ? (
                        <IframeContainer
                            type={this.props.item.type}
                            padding={this.props.padding}
                            minHeight={
                                this.props.id === "message" ? "75vh" : "60vh"
                            }
                        >
                            {this.props.item}
                        </IframeContainer>
                    ) : (
                        <ImageContainer
                            className={this.props.id}
                            type={this.props.item.type}
                            padding={this.props.padding}
                            minHeight={
                                this.props.id === "message" ? "75vh" : "60vh"
                            }
                        >
                            {this.props.item}
                        </ImageContainer>
                    )}
                </ItemContainer>
                <ContentWrapper background={this.props.background}>
                    <ContentContainer>{this.props.children}</ContentContainer>
                </ContentWrapper>
                {!["love", "toilet", "message"].includes(this.props.id) && (
                    <>
                        {[...Array(Number(this.props.total)).keys()].map(
                            (el, i) => {
                                return (
                                    <BottomContainer
                                        key={el}
                                        padding={
                                            this.props.id === "beauty" &&
                                            ![0, 1, 2].includes(i)
                                                ? "30px 25% 0"
                                                : this.props.id === "beauty" &&
                                                  i === 2
                                                ? "30px 37% 0"
                                                : this.props.bcPadding
                                        }
                                    >
                                        <img
                                            alt={this.props.id}
                                            src={`https://yjparkworks.s3.amazonaws.com/${this.props.id}/scans/${i}.jpg`}
                                        />
                                    </BottomContainer>
                                );
                            }
                        )}
                    </>
                )}
                <ScrollToTopButton
                    smooth={true}
                    backgroundColor={this.props.background}
                    component={
                        this.props.background === "#000" ? (
                            <ArrowUpWhite alt="arrow up" />
                        ) : (
                            <ArrowUpBlack alt="arrow up" />
                        )
                    }
                />
            </Wrapper>
        );
    }
}

export default withRouter(Layout);
