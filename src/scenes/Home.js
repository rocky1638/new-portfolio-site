import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa'
import { Text, Button } from 'components'
import SpotifyLogo from 'static/spotify.png'

const AnimateDiv = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 150,
    transition: {
      y: { type: 'spring', stiffness: 800, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
});

const StyledUpCaret = styled(FaCaretUp)`
  margin-left: 8px;
  color: #868888;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`

const StyledDownCaret = styled(FaCaretDown)`
  color: #868888;
  font-size: 18px;
  cursor: pointer;
  marginLeft: 5px;

  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
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
    if (song && !showingDetails) {
      return (
        <PoseGroup>
          <div key={1} style={{ display: 'flex', alignItems: 'center', position: 'absolute', bottom: 20 }}>
            <WavingSpotify style={{ width: 35, marginRight: 15 }} src={SpotifyLogo} alt="spotify" />
            <Text>{song.name} —</Text>
            <Text style={{ marginLeft: 5 }}>{song.artist['#text']}</Text>
            <StyledUpCaret onClick={this.props.showDetails}/>
          </div>
        </PoseGroup>
      )
    } else if (song && showingDetails) {
      return (
        <PoseGroup>
          <AnimateDiv key={2} className="song-details">
            <img
              style={{ width: '40%', maxWidth: 250, marginRight: 15, alignSelf: 'center' }}
              src={song.image[song.image.length - 1]['#text']}
              alt="album cover"
              />
            <div>
              <div className='f-aic'>
                <Text style={{ lineHeight: 1.1 }} block bold big>{song.name}</Text>
                <StyledDownCaret onClick={this.props.hideDetails} />
              </div>
              <Text block header>{song.artist['#text']}</Text>
              <Text block gray4 style={{ lineHeight: 1.3, marginBottom: 5 }}>{song.album['#text']}</Text>
              { moreSong.external_urls && <a href={moreSong.external_urls.spotify} target='_blank' rel='noopener noreferrer'>
                <div style={{ marginTop: 5 }} className="f-aic">
                  <Text small>Open in Spotify</Text>
                  <img style={{ width: 15, marginLeft: 5 }} src={SpotifyLogo} alt="spotify logo" />
                </div>
              </a>}
            </div>
          </AnimateDiv>
        </PoseGroup>
      )
    }
    return null
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
  }

  render() {
    const { showingDetails } = this.state
    return (
      <div className="f-aic f-jcc fadeUp" style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }}>
        <ResponsiveHomeDiv>
          <div style={{ transition: '0.3s', opacity: showingDetails ? '0.5' : '1' }}>
            <Text 
              style={{ marginBottom: 15 }}
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
                <Button>Resumé</Button>
              </a>
              <Link to="/blog">
                <Button>Blog</Button>
              </Link>
              <a href="https://github.com/rocky1638" target="_blank" rel="noopener noreferrer">
              <Button>
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
