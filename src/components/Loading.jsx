import React from "react";
import styled from "styled-components";
import { Spinner } from "components";

const WrapperDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = () => (
  <WrapperDiv>
    <Spinner />
  </WrapperDiv>
);

export default Loading;
