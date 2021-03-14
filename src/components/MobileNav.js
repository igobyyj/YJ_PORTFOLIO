import styled from "styled-components";

const MobileNav = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Alliance-Light";
    background-color: ${(props) => props.background};
    color: ${(props) => props.color};

    width: 7vh;
    height: 2.1vh;
    padding: 0.7vh;
    font-size: 1.5vh;
    top: 17px;
    right: 17px;

    @media screen and (min-width: 1200px) {
        top: 30px;
        left: 30px;
        right: 0;
    }
`;

export default MobileNav;
