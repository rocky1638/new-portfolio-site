import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Text, Button, Image } from "components";

const ResponsiveHomeDiv = styled.div`
  padding: 0 25%;
  text-align: center;

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
      <Image
        style={{ margin: 10, marginLeft: 0, height: 300, width: 300 }}
        src="https://foodiy-beta.s3.amazonaws.com/404.gif"
      />
      <Text style={{ marginTop: 10, marginBottom: 20 }} block book gray4>
        That page doesn't exist.
      </Text>
      <Text>
        <Link to="/">{"<- Head back home"}</Link>
      </Text>
    </ResponsiveHomeDiv>
  </div>
);

export default NotFound;
