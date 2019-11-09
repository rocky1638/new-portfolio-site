import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: "Avenir";
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.blue};
  padding: 10px 0;
  width: 120px;
  margin-right: 20px;

  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.09), 0 3px 5px rgba(0, 0, 0, 0.17);
  box-shadow: none;

  &:hover {
    cursor: pointer;
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
