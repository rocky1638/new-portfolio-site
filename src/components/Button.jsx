import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: "Avenir", "Jost";
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => (theme.isDark ? theme.dark.white : theme.dark.white)};
  filter: ${({ theme }) =>
    theme.isDark ? "invert(1) opacity(0.7)" : "opacity(0.7)"};
  border: none;
  border-radius: 3px;
  background-color: ${({ theme }) =>
    theme.isDark ? theme.dark.button : theme.light.button};
  padding: 10px 0;
  width: 120px;
  margin-right: 20px;

  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.09), 0 3px 5px rgba(0, 0, 0, 0.17);
  box-shadow: none;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    filter: ${({ theme }) =>
      theme.isDark ? "invert(1) opacity(1)" : "opacity(1)"};
    transition: 0.2s;
  }

  @media only screen and (max-width: 768px) {
    font-size: 15px;
    width: 75px;
    padding: 7px 0;
    margin-right: 10px;
  }
`;

const Button = ({ children, ...otherProps }) => (
  <StyledButton {...otherProps}>{children}</StyledButton>
);

export default Button;
