import React from "react";
import styled, { withTheme } from "styled-components";
import { withRouter } from "react-router-dom";
import Back from "static/back.svg";

const Icon = styled.img`
  /* hide back button on home page */
  display: ${({ history }) =>
    history.location.pathname === "/" ? "none" : ""};
  pointer-events: ${({ history }) =>
    history.location.pathname === "/" ? "none" : ""};
  /*  */

  position: fixed;
  @media only screen and (max-width: 768px) {
    position: absolute;
  }

  height: 17px;
  right: 14.5px;
  top: 50px;
  z-index: 1000000;
  filter: ${({ theme }) =>
    theme.isDark ? "opacity(0.3) invert(1)" : "opacity(0.3)"};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transition: 0.2s;
    filter: ${({ theme }) =>
      theme.isDark ? "opacity(0.8) invert(1)" : "opacity(0.8)"};
  }
`;

const BackButton = ({ history }) => (
  <Icon history={history} onClick={history.goBack} src={Back} alt="Back" />
);

export default withRouter(withTheme(BackButton));
