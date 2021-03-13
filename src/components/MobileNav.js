import styled from "styled-components";

const MobileNav = styled.div`
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

// export const MobileNav = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     float: right;
//     padding: 5px;
//     font-size: 15px;
//     width: 74px;
//     height: 26px;
//     font-family: "Alliance-Light";
//     cursor: pointer;
//     background: #000;
//     color: #fff;

//     @media screen and (min-width: 320px) {
//         top: 17px;
//         right: 17px;
//         padding: 5px;
//         font-size: 10px;
//         width: 46px;
//         height: 16px;
//     }

//     @media screen and (min-width: 1024px) {
//         top: 17px;
//         right: 17px;
//         padding: 5px;
//         font-size: 15px;
//         width: 74px;
//         height: 26px;
//     }
// `;

export default MobileNav;