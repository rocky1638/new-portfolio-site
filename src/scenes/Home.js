import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Text, Button } from 'components'

const ResponsiveHomeDiv = styled.div`
  padding: 0 25%;

  @media only screen and  (max-width: 768px) {
    padding: 0 5%;
  }
`

const Home = () => (
  <div className="f-aic f-jcc fadeUp" style={{ height: '100vh' }}>
    <ResponsiveHomeDiv>
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
    </ResponsiveHomeDiv>
  </div>
)

export default Home
