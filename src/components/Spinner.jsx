import styled from "styled-components";

const Spinner = styled.div`
  border: ${(props) =>
    props.theme.isDark ? "4px solid #454545" : "4px solid #efefef"};
  border-top: 4px solid #91a6ff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
