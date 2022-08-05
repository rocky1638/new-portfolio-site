import React from "react";
import styled from "styled-components";
import Sun from "static/icons/sun.svg";
import Moon from "static/icons/moon.svg";

const DarkModeToggleContainer = styled.div`
  top: 15px;
  right: 10px;
  cursor: pointer;
  z-index: 10000000;

  position: fixed;
  @media only screen and (max-width: 768px) {
    position: absolute;
  }

  img {
    height: 25px;
    transition: 0.2s;
    filter: ${(props) => (props.theme.isDark ? "" : "opacity(0.3)")};
    filter: ${(props) =>
      props.theme.isDark ? "invert(1) brightness(40%)" : ""};

    &:hover {
      filter: ${(props) => (props.theme.isDark ? "" : "opacity(0.9)")};
      filter: ${(props) =>
        props.theme.isDark ? "invert(1) brightness(90%)" : ""};
      transition: 0.2s;
    }
  }
`;

const DarkModeToggle = ({ toggleDarkMode, isDarkMode }) => {
  if (isDarkMode) {
    return (
      <DarkModeToggleContainer onClick={toggleDarkMode}>
        <img src={Moon} alt="Toggle light mode" />
      </DarkModeToggleContainer>
    );
  } else {
    return (
      <DarkModeToggleContainer onClick={toggleDarkMode}>
        <img src={Sun} alt="Toggle dark mode" />
      </DarkModeToggleContainer>
    );
  }
};

export default DarkModeToggle;
