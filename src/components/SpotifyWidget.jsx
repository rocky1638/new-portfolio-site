import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import styled, { withTheme } from "styled-components";
import SpotifyLogo from "static/icons/spotify.svg";
import { Text } from "components";
import "react-loading-skeleton/dist/skeleton.css";

const SpotifyContainerDiv = styled.div`
  /* background-color: ${({ theme }) =>
    theme.isDark
      ? theme.dark.blockquoteBackground
      : theme.light.blockquoteBackground};
  padding: 10px;
  border-radius: 3px; */
`;

const SpotifyWidget = (props) => {
  const [song, setSong] = useState(null);
  const [moreSong, setMoreSong] = useState(null);
  const [interval, setInterval] = useState(null);

  useEffect(() => {
    const getSongData = async () => {
      const baseUrl = "https://rockzhou-api.herokuapp.com";
      const songObject = await axios.get(`${baseUrl}/recently-played`);
      setSong(songObject.data);

      let moreData;
      if (songObject.data) {
        moreData = await axios.get(
          `${baseUrl}/spotify?artist=${songObject.data.artist["#text"]}&title=${songObject.data.name}`
        );
        setMoreSong(moreData.data);
      }
    };

    getSongData().catch(console.error);

    const pollSongInterval = setInterval(getSongData, 18000);
    setInterval(pollSongInterval);

    return function cleanup() {
      clearInterval(interval);
    };
  }, [interval]);

  return (
    <SpotifyContainerDiv className="f-jcl f-aic" {...props}>
      {song ? (
        <img
          style={{
            width: 96,
            height: 96,
            aspectRatio: 1 / 1,
            marginRight: 16,
          }}
          src={song.image[song.image.length - 1]["#text"]}
          alt="album cover"
        />
      ) : (
        <Skeleton style={{ width: 96, height: 96 }} />
      )}
      {song ? (
        <div style={{ overflow: "hidden" }}>
          <Text
            description
            block
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {song.artist["#text"]}
          </Text>
          <Text
            block
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {song.name || <Skeleton />}
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
      ) : (
        <Skeleton style={{ width: "100%", height: 96 }} />
      )}
    </SpotifyContainerDiv>
  );
};

export default withTheme(SpotifyWidget);
