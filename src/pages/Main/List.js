import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MobileNav from "../../components/MobileNav";

const ListWrapper = styled.div`
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

export default class List extends Component {
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
            <ListWrapper>
                <MobileNav
                    background="#000"
                    color="#fff"
                    onClick={() => this.props.history.push("/")}
                >
                    {this.state.date}
                </MobileNav>
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
            </ListWrapper>
        );
    }
}
