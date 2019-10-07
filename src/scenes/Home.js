import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'
import OutsideClickHandler from 'react-outside-click-handler'
import { motion, AnimatePresence } from "framer-motion"
import { Text, Button } from 'components'
import SpotifyLogo from 'static/spotify.png'

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
`

const WavingSpotify = styled.img`
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`

const ResponsiveHomeDiv = styled.div`
  padding: 0 25%;
  overflow-x: hidden;
  width: 100vw;

  @media only screen and (max-width: 1180px) {
    padding: 0 15%;
  }

  @media only screen and  (max-width: 768px) {
    padding: 0 5%;
  }
`

class SpotifyWidget extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    this.getSongData()
  }

  getSongData = async() => {
    const baseUrl = 'https://rockzhou-api.herokuapp.com'
    const songObject = await axios.get(`${baseUrl}/recently-played`) 
    await this.setState({ song: songObject.data })
    let moreData
    if (songObject.data) {
      moreData = await axios.get(`${baseUrl}/spotify?artist=${songObject.data.artist['#text']}&title=${songObject.data.name}`)
    }
    await this.setState({ moreSong: moreData.data })
  }

  render() {
    const { song, moreSong } = this.state
    const { showingDetails } = this.props
    
    return (
      <AnimatePresence>
        <React.Fragment key={1}>
          {(song && !showingDetails) &&
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
              className="f-aic spotify-closed-widget">
              <WavingSpotify style={{ width: 35, marginRight: 15 }} src={SpotifyLogo} alt="spotify" />
              <div>
                <Text block big gray6>Now Playing:</Text>
                <div className="main-song-div" style={{ overflow: "hidden" }}>
                  <Text style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>{song.name} —  {song.artist['#text']}</Text>
                </div>
              </div>
            </motion.div>
          }
          {(song && showingDetails) &&
            <OutsideClickHandler key={3} onOutsideClick={this.props.hideDetails}>
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
                  className="song-details">
                  <img
                    style={{ width: '40%', maxWidth: 250, marginRight: 15, alignSelf: 'center' }}
                    src={song.image[song.image.length - 1]['#text']}
                    alt="album cover"
                    />
                  <div style={{ overflow: 'hidden' }}>
                    <div className="f-aic">
                      <OverflowDiv>
                        <div className="ticker">
                          <Text style={{ lineHeight: 1.1 }} block bold big>{song.name}</Text>
                        </div>
                      </OverflowDiv>
                    </div>
                    <Text block header>{song.artist['#text']}</Text>
                    <Text block gray4 style={{ lineHeight: 1.3, marginBottom: 5 }}>{song.album['#text']}</Text>
                    { (moreSong && moreSong.external_urls) && <a href={moreSong.external_urls.spotify} target='_blank' rel='noopener noreferrer'>
                      <div style={{ marginTop: 5 }} className="f-aic">
                        <Text small>Open in Spotify</Text>
                        <img style={{ width: 15, marginLeft: 5 }} src={SpotifyLogo} alt="spotify logo" />
                      </div>
                    </a>}
                  </div>
                </motion.div>
            </OutsideClickHandler>
          }
        </React.Fragment>
      </AnimatePresence>
    )
  }
}

    class Home extends React.Component {
      constructor(props) {
        super(props)

        this.state = {
          showingDetails: false
        }
      }

      showDetails = () => {
        this.setState({ showingDetails: true })
      }

      hideDetails = () => {
        this.setState({ showingDetails: false })
        this.forceUpdate()
      }

  render() {
    const { showingDetails } = this.state
    return (
      <div className="f-aic f-jcc fadeUp" style={{ overflowX: 'hidden', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }}>
        <ResponsiveHomeDiv>
          <div style={{ marginTop: '-15px', transition: '0.4s', opacity: showingDetails ? '0.5' : '1' }}>
            <Text 
              style={{ marginBottom: 15, padding: '5px 0px' }}
              block 
              fontWeight={500} 
              ginormous>
              hey! i'm rock <span role="img" aria-label="hand waving">👋</span>
            </Text>
            <Text style={{ marginBottom: 10 }} block book gray4>
              Hi! I'm currently in my second year of Computer Science at the
              University of Waterloo, and focused on deep learning
              <i> (and dabbling in a bit of design).</i>
            </Text>
            <Text style={{ marginBottom: 20 }} block book gray4>
              When I'm not doing homework or sleeping, I enjoy playing badminton,
              watching basketball, and playing and singing along to instruments such
              as guitar and piano.
            </Text>
            <div className="f-aic">
              <a 
                href={`${process.env.PUBLIC_URL}/assets/resume.pdf`} 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button disabled={showingDetails} style={{ marginBottom: 10 }}>Resumé</Button>
              </a>
              <Link to="/blog">
                <Button disabled={showingDetails} style={{ marginBottom: 10 }}>Blog</Button>
              </Link>
              <a href="https://github.com/rocky1638" target="_blank" rel="noopener noreferrer">
              <Button disabled={showingDetails} style={{ marginBottom: 10 }}>
                Github
              </Button>
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
    )
  }
}

export default Home
