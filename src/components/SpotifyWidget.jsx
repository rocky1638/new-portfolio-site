import React from "react";
import axios from "axios";
import styled from "styled-components";
import OutsideClickHandler from "react-outside-click-handler";
import { motion, AnimatePresence } from "framer-motion";
import SpotifyLogo from "static/spotify.png";
import { Text } from "components";

const OverflowDiv = styled.div`
  box-sizing: content-box;
  overflow: hidden;

  .ticker {
    padding: 3px 0;
    white-space: nowrap;
    box-sizing: content-box;
  }

  &:hover {
    cursor: default;

    .ticker {
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
      -webkit-animation-timing-function: linear;
      animation-timing-function: linear;
      -webkit-animation-name: ticker;
      animation-name: ticker;
      -webkit-animation-duration: 10s;
      animation-duration: 10s;
      cursor: default;
      padding-right: 100%;
      display: inline-block;
      height: 100%;

      span {
        display: inline-block;
        padding-right: 2rem;
      }
    }
  }
`;

const WavingSpotify = styled.img`
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`;

class SpotifyWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.getSongData();
    const pollSongInterval = setInterval(this.getSongData, 18000);
    this.setState({ interval: pollSongInterval });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  getSongData = async () => {
    const baseUrl = "https://rockzhou-api.herokuapp.com";
    const songObject = await axios.get(`${baseUrl}/recently-played`);
    await this.setState({ song: songObject.data });
    let moreData;
    if (songObject.data) {
      moreData = await axios.get(
        `${baseUrl}/spotify?artist=${songObject.data.artist["#text"]}&title=${
          songObject.data.name
        }`
      );
    }
    await this.setState({ moreSong: moreData.data });
  };

  render() {
    const { song, moreSong } = this.state;
    const { showingDetails } = this.props;

    return (
      <AnimatePresence>
        <React.Fragment key={1}>
          {song && !showingDetails && (
            <motion.div
              onClick={this.props.showDetails}
              initial={{
                y: -100,
                opacity: 0
              }}
              transition={{ duration: 0.4 }}
              animate={{
                y: 0,
                opacity: 1
              }}
              key={2}
              className="f-aic spotify-closed-widget"
            >
              <img
                src={song.image[song.image.length - 1]["#text"]}
                alt="preload"
                style={{ height: 0 }}
              />
              <WavingSpotify
                style={{ width: 35, marginRight: 15 }}
                src={SpotifyLogo}
                alt="spotify"
              />
              <div>
                <Text block big gray6>
                  Now Playing:
                </Text>
                <div className="main-song-div" style={{ overflow: "hidden" }}>
                  <Text style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
                    {song.name} — {song.artist["#text"]}
                  </Text>
                </div>
              </div>
            </motion.div>
          )}
          {song && showingDetails && (
            <OutsideClickHandler
              key={3}
              onOutsideClick={this.props.hideDetails}
            >
              <motion.div
                initial={{
                  y: 100,
                  opacity: 0
                }}
                transition={{ duration: 0.4 }}
                animate={{
                  y: 0,
                  opacity: 1
                }}
                exit={{
                  y: 100,
                  opacity: 0
                }}
                className="song-details"
              >
                <img
                  style={{
                    width: "40%",
                    maxWidth: 250,
                    marginRight: 15,
                    alignSelf: "center"
                  }}
                  src={song.image[song.image.length - 1]["#text"]}
                  alt="album cover"
                />
                <div style={{ overflow: "hidden" }}>
                  <div className="f-aic">
                    <OverflowDiv>
                      <div className="ticker">
                        <Text style={{ lineHeight: 1.1 }} block bold big>
                          {song.name}
                        </Text>
                      </div>
                    </OverflowDiv>
                  </div>
                  <Text block header>
                    {song.artist["#text"]}
                  </Text>
                  <Text
                    block
                    gray4
                    style={{ lineHeight: 1.3, marginBottom: 5 }}
                  >
                    {song.album["#text"]}
                  </Text>
                  {moreSong && moreSong.external_urls && (
                    <a
                      href={moreSong.external_urls.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div style={{ marginTop: 7 }} className="f-aic">
                        <Text small>Open in Spotify</Text>
                        <img
                          style={{ width: 15, marginLeft: 5 }}
                          src={SpotifyLogo}
                          alt="spotify logo"
                        />
                      </div>
                    </a>
                  )}
                </div>
              </motion.div>
            </OutsideClickHandler>
          )}
        </React.Fragment>
      </AnimatePresence>
    );
  }
}

export default SpotifyWidget;
