import React from "react";
import styled, { withTheme } from "styled-components";
import { Spinner, Text } from "components";

const WrapperDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoadingEasterEgg = ({ theme }) => (
  <WrapperDiv>
    <Spinner />
    <Text style={{ marginTop: 20 }}>
      Congrats! You found the loading animation!
    </Text>
  </WrapperDiv>
);

export default withTheme(LoadingEasterEgg);
