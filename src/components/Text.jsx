import React from "react";
import styled from "styled-components";

const StyledText = styled.span`
  font-style: ${(props) => (props.italic ? "italic" : "")};
  line-height: ${(props) => (props.description ? "" : 1.45)};
  font-family: "Inter", "--apple-system", "BlinkMacSystemFont", '"Segoe UI"',
    "Roboto", "Ubuntu", "Cantarell", '"Helvetica Neue"', "sans-serif";
  text-decoration: ${(props) => (props.underline ? "underline" : "")};
  font-size: ${(props) =>
    props.description
      ? "12px"
      : props.ginormous
      ? "80px"
      : props.huge
      ? "60px"
      : props.pill
      ? "12px"
      : props.header
      ? "20px"
      : props.big
      ? "28px"
      : props.small
      ? "14px"
      : props.tiny
      ? "8px"
      : "16px"};
  font-weight: ${(props) =>
    props.fontWeight ? props.fontWeight : props.bold ? "bold" : 400};
  display: ${(props) => (props.block ? "block" : "")};
  color: ${(props) =>
    props.theme.isDark
      ? props.gray4
        ? props.theme.dark.gray4
        : props.gray5
        ? props.theme.dark.gray5
        : props.gray8
        ? props.theme.dark.gray8
        : props.theme.dark.black
      : props.gray4
      ? props.theme.light.gray4
      : props.gray5
      ? props.theme.light.gray5
      : props.gray8
      ? props.theme.light.gray8
      : props.theme.light.black};

  @media only screen and (max-width: 768px) {
    font-size: ${(props) =>
      props.description
        ? "12px"
        : props.ginormous
        ? "80px"
        : props.huge
        ? "60px"
        : props.pill
        ? "10px"
        : props.header
        ? "20px"
        : props.big
        ? "28px"
        : props.small
        ? "14px"
        : props.tiny
        ? "8px"
        : "16px"};
  }
`;

const Text = ({ children, ...otherProps }) => (
  <StyledText {...otherProps}>{children}</StyledText>
);

export default Text;
