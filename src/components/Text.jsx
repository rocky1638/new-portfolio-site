import React from "react";
import styled from "styled-components";

const StyledText = styled.span`
  font-style: ${props => (props.italic ? "italic" : "")};
  line-height: ${props => (props.description ? "" : 1.58)};
  font-family: ${props => (props.book ? "Circular Std Book" : "Circular Std")};
  font-family: "Avenir", "Jost";
  font-size: ${props =>
    props.description
      ? "16px"
      : props.ginormous
      ? "80px"
      : props.huge
      ? "60px"
      : props.header
      ? "24px"
      : props.big
      ? "32px"
      : props.small
      ? "18px"
      : props.tiny
      ? "12px"
      : "20px"};
  font-weight: ${props =>
    props.fontWeight ? props.fontWeight : props.bold ? "bold" : 400};
  display: ${props => (props.block ? "block" : "")};
  color: ${props =>
    props.theme.isDark
    ?
      props.gray4
      ? props.theme.dark.gray4
      : props.gray5
      ? props.theme.dark.gray5
      : props.gray8
      ? props.theme.dark.gray8
      : props.theme.dark.black

    :
      props.gray4
      ? props.theme.light.gray4
      : props.gray5
      ? props.theme.light.gray5
      : props.gray8
      ? props.theme.light.gray8
      : props.theme.light.black

  };

  @media only screen and (max-width: 768px) {
    font-size: ${props =>
      props.description
        ? "14px"
        : props.ginormous
        ? "40px"
        : props.huge
        ? "35px"
        : props.big
        ? "22px"
        : props.header
        ? "18px"
        : props.small
        ? "16px"
        : props.tiny
        ? "12px"
        : "16px"};
  }
`;

const Text = ({ children, ...otherProps }) => (
  <StyledText {...otherProps}>{children}</StyledText>
);

export default Text;
