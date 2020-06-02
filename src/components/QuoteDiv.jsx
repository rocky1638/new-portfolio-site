import styled from "styled-components";

const QuoteDiv = styled.div`
  margin: 20px 0px;
  background-color: ${props => props.theme.isDark
    ? props.theme.dark.quote
    : props.theme.light.quote
  };
  padding: 20px 30px;
  border-radius: 3px;

  @media only screen and (max-width: 480px) {
    margin: 15px 0px;
    text-align: center;
    margin-left: -20px;
    margin-right: -20px;
    border-radius: 0px;
  }
`;

export default QuoteDiv;
