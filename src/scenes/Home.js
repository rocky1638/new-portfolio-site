import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Text, Button, SpotifyWidget } from 'components'

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
      <div
        className="f-aic f-jcc fadeUp"
        style={{ 
          overflowX: 'hidden',
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0 }}>
        <ResponsiveHomeDiv>
          <div
            style={{
              marginTop: '-15px',
              transition: '0.4s',
              opacity: showingDetails ? '0.5' : '1' }}>
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
              When I'm not doing homework or sleeping, I enjoy playing badminton, watching basketball, and playing and singing along to instruments such as guitar and piano.
            </Text>
            <div className="f-aic">
              <a 
                href={`${process.env.PUBLIC_URL}/assets/resume.pdf`} 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  disabled={showingDetails}
                  style={{ marginBottom: 10 }}>
                  Resumé
                </Button>
              </a>
              <Link to="/blog">
                <Button
                  disabled={showingDetails}
                  style={{ marginBottom: 10 }}>
                  Blog
                </Button>
              </Link>
              <a
                href="https://github.com/rocky1638"
                target="_blank"
                rel="noopener noreferrer">
              <Button
                disabled={showingDetails}
                style={{ marginBottom: 10 }}>
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
