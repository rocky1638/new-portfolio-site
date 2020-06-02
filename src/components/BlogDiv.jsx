import styled from "styled-components";

const BlogDiv = styled.div`
  min-height: 100vh;
  padding: 30px 25%;
  background-color: ${(props) =>
    props.theme.isDark ? props.theme.dark.white : props.theme.light.white};

  @media only screen and (max-width: 1100px) {
    padding: 30px 100px;
  }

  @media only screen and (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export default BlogDiv;
