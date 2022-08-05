import React from "react";
import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";
import { Text, SpotifyWidget, BlogpostCard } from "components";
import Portrait from "static/images/me_jeju.jpg";
import blogPostOverview from "../blogPostOverview";

const HomeWrapper = styled.div`
  overflow-x: hidden;
  position: relative;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 120px 32px 120px 32px;
  background-color: ${({ theme }) =>
    theme.isDark ? theme.dark.white : theme.light.white};
`;

const ResponsiveHomeDiv = styled.div`
  max-width: ${(props) => props.theme.dimensions.maxWidth}px;
  width: 100%;
  padding: 0;
`;

const CircleImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  object-position: center 10%;
  margin-right: 24px;
`;

const LinkPill = styled.div`
  background-color: ${(props) =>
    props.theme.isDark ? props.theme.dark.button : props.theme.light.button};
  padding: 0px 5px;
  border-radius: 4px;
  text-transform: capitalize;

  a {
    text-decoration: none;
  }
`;
const Home = (props) => {
  const { theme } = props;
  const getRecentBlogposts = () => {
    return blogPostOverview
      .sort((a, b) => Date(b.date) > Date(a.date))
      .slice(0, 3)
      .map((bp, i) => <BlogpostCard blogpost={bp} index={i} />);
  };
  return (
    <HomeWrapper
      id="home-wrapper"
      className={`f-jcc fadeIn ${theme.isDark ? "bg-dark" : "bg-light"}`}
    >
      <ResponsiveHomeDiv id="responsive-home-div">
        <div
          style={{
            marginTop: "-15px",
            transition: "0.4s",
          }}
        >
          <div className="f-aic" style={{ marginBottom: 32 }}>
            <CircleImage src={Portrait} />
            <div className="f-jcc" style={{ flexDirection: "column" }}>
              <Text block fontWeight={600} big style={{ lineHeight: 1.2 }}>
                Rock Zhou
              </Text>
              <Text block fontWeight={500} gray4>
                Software Engineer
              </Text>
              <div className="f-aic" style={{ marginTop: 5 }}>
                <a
                  href={`${process.env.PUBLIC_URL}/assets/resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <LinkPill style={{ marginRight: 5 }}>
                    <Text small>resumé</Text>
                  </LinkPill>
                </a>
                <a
                  href="mailto:rockzhou15@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <LinkPill style={{ marginRight: 5 }}>
                    <Text small>email</Text>
                  </LinkPill>
                </a>
                <a
                  href="https://github.com/rocky1638"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <LinkPill style={{ marginRight: 5 }}>
                    <Text small>github</Text>
                  </LinkPill>
                </a>
              </div>
            </div>
          </div>
          <Text block bold small underline style={{ marginBottom: 4 }}>
            About
          </Text>
          <Text style={{ marginBottom: 16 }} block gray4>
            Hi, I'm Rock! I recently graduated from the University of Waterloo
            with a Bachelor's in Computer Science, and I'm set to start working
            at{" "}
            <a
              href="https://about.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Meta
            </a>{" "}
            in New York City this upcoming fall. During my studies, I had the
            opportunity to learn from talented individuals while optimizing
            production lines at{" "}
            <a
              href="https://tesla.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tesla
            </a>
            , supercharging programmatic advertising at{" "}
            <a
              href="https://stackadapt.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stackadapt
            </a>
            , providing cheap and healthy meals at{" "}
            <a
              href="https://kitchenmate.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              KitchenMate
            </a>
            , and building out applications on Web3 at{" "}
            <a
              href="https://consensys.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ConsenSys
            </a>
            .
          </Text>
          <Text style={{ marginBottom: 24 }} block gray4>
            Outside of work, I love travelling and{" "}
            <a
              href="https://instagram.com/rocksrandompics/"
              target="_blank"
              rel="noopener noreferrer"
            >
              exploring unfamiliar cities with my camera in hand.
            </a>{" "}
            When I'm not able to travel, I love learning languages{" "}
            <i>(currently learning Korean)</i>, reading, and cooking.
          </Text>
        </div>
        <Text block bold small underline style={{ marginBottom: 4 }}>
          Currently Playing
        </Text>
        <SpotifyWidget style={{ marginBottom: 24 }} />
        <Text block bold small underline style={{ marginBottom: 4 }}>
          Recent Blog Posts
        </Text>
        {getRecentBlogposts()}
        <Text small bold>
          <Link to="/blog">See All Blog Posts -&gt;</Link>
        </Text>
      </ResponsiveHomeDiv>
    </HomeWrapper>
  );
};

export default withTheme(Home);
