import React from "react";
import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";
import { Text, SpotifyWidget } from "components";
import Resume from "static/resume.svg";
import Blog from "static/blog.svg";
import Github from "static/github.svg";
import Camera from "static/camera.svg";

const ResponsiveHomeDiv = styled.div`
  padding: 0 25%;
  overflow-x: hidden;
  width: 100vw;

  @media only screen and (max-width: 1180px) {
    padding: 0 15%;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 5%;
  }
`;

const LinkIcon = styled.img`
  height: 20px;
  margin-bottom: 10px;
  margin-right: 7px;
  filter: ${(props) =>
    props.theme.isDark ? "opacity(0.7) invert(1)" : "opacity(0.7)"};
  transition: 0.2s;
  background-color: ${(props) =>
    props.theme.isDark ? props.theme.dark.button : props.theme.light.button};
  padding: 10px;
  border-radius: 5px;

  &:hover {
    filter: ${(props) =>
      props.theme.isDark ? "opacity(1) invert(1)" : "opacity(1)"};
    transition: 0.2s;
  }
`;

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showingDetails: false,
    };
  }

  showDetails = () => {
    this.setState({ showingDetails: true });
  };

  hideDetails = () => {
    this.setState({ showingDetails: false });
    this.forceUpdate();
  };

  render() {
    const { showingDetails } = this.state;
    const { theme } = this.props;
    return (
      <div
        className={`f-aic f-jcc fadeUp ${
          theme.isDark ? "bg-dark" : "bg-light"
        }`}
        style={{
          overflowX: "hidden",
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: theme.isDark ? theme.dark.white : theme.light.white,
        }}
      >
        <ResponsiveHomeDiv>
          <div
            style={{
              marginTop: "-15px",
              transition: "0.4s",
              opacity: showingDetails ? "0.5" : "1",
            }}
          >
            <Text
              style={{ marginBottom: 15, padding: "5px 0px" }}
              block
              fontWeight={500}
              ginormous
            >
              hey! i'm rock{" "}
              <span role="img" aria-label="hand waving">
                👋
              </span>
            </Text>
            <Text style={{ marginBottom: 10 }} block book gray4>
              Hi! I'm currently in my third year of Computer Science at the
              University of Waterloo, and focused on all things software, from
              deep learning to fullstack, to design.
            </Text>
            <Text style={{ marginBottom: 20 }} block book gray4>
              When I'm not doing homework or sleeping, I enjoy playing
              badminton, watching basketball, and playing and singing along to
              instruments such as guitar and piano.
            </Text>
            <div className="f-aic">
              <a
                href={`${process.env.PUBLIC_URL}/assets/resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                style={showingDetails ? { pointerEvents: "none" } : {}}
              >
                <LinkIcon src={Resume} alt="Resume"></LinkIcon>
              </a>
              <Link
                style={showingDetails ? { pointerEvents: "none" } : {}}
                to="/blog"
              >
                <LinkIcon src={Blog} alt="Blog"></LinkIcon>
              </Link>
              <a
                href="https://github.com/rocky1638"
                target="_blank"
                rel="noopener noreferrer"
                style={showingDetails ? { pointerEvents: "none" } : {}}
              >
                <LinkIcon src={Github} alt="Github"></LinkIcon>
              </a>
              <a
                href="https://unsplash.com/@rocky1638"
                target="_blank"
                rel="noopener noreferrer"
                style={showingDetails ? { pointerEvents: "none" } : {}}
              >
                <LinkIcon src={Camera} alt="Unsplash"></LinkIcon>
              </a>
            </div>
          </div>
          <SpotifyWidget
            showingDetails={this.state.showingDetails}
            showDetails={this.showDetails}
            hideDetails={this.hideDetails}
          />
        </ResponsiveHomeDiv>
      </div>
    );
  }
}

export default withTheme(Home);
