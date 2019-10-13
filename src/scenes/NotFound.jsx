import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Text, Button } from "components";

const ResponsiveHomeDiv = styled.div`
  padding: 0 25%;

  @media only screen and (max-width: 768px) {
    padding: 0 5%;
  }
`;

const NotFound = () => (
  <div className="f-aic f-jcc" style={{ height: "100vh" }}>
    <ResponsiveHomeDiv>
      <Text style={{ marginBottom: 10 }} block fontWeight={500} ginormous>
        Oops!
      </Text>
      <Text style={{ marginBottom: 20 }} block book gray4>
        That page doesn't exist. Here's a link to head back home.
      </Text>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </ResponsiveHomeDiv>
  </div>
);

export default NotFound;
