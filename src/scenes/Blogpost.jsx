import React from 'react'
import styled from 'styled-components'
import { trackWindowScroll } from 'react-lazy-load-image-component'
import { Text, Image } from 'components'
import { NotFound } from 'scenes'
import blogPosts from 'blogposts'
import { FaExternalLinkAlt } from 'react-icons/fa'

const StyledLinkIcon = styled(FaExternalLinkAlt)`
  width: 12px;
  margin-left: 15px;
  margin-right: 3px;
  color: ${({ theme }) => theme.gray8};

  &:hover {
    color ${({ theme }) => theme.gray5}
  }

  @media only screen and (max-width: 768px) {
    margin-left: 10px;
  }
`

class LinkIcon extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showingText: false,
    }
  }
  onMouseEnter = () => {
    this.setState({ showingText: true }) 
  }

  onMouseLeave = () => {
    this.setState({ showingText: false }) 
  }

  render() {
    const { link } = this.props
    const { showingText } = this.state
    if (!link) {
      return null
    }

    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="f-aic" style={{ cursor: 'pointer' }}>
          <StyledLinkIcon 
            onMouseEnter={this.onMouseEnter} 
            onMouseLeave={this.onMouseLeave} 
          />
          <Text tiny gray5 style={{ paddingTop: 2, transition: "0.5s", opacity: showingText ? "1" : "0"}}>
            Open in Google Maps
          </Text>
        </div>
      </a>
    )
  }
}

const ImageDiv = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
`

const BlogDiv = styled.div`
  padding: 30px 25%;

  @media only screen and (max-width: 1100px) {
    padding: 30px 100px;
  }

  @media only screen and (max-width: 768px) {
    padding: 30px 20px;
  }
`

const Title = ({ children }) => (
    <Text huge style={{ marginRight: 5 }}>{children}</Text>
)

const Subtitle = ({ children }) => 
  <Text style={{ marginTop: -5 }} big gray4 block>{children}</Text>

const Date = ({ children }) => 
  <Text block style={{ marginBottom: 30, marginTop: 17.5 }} gray8>- {children} -</Text>

const Header = ({ children, id, sub = false, link }) => {
  let component
  if (sub) {
    component = <Text gray4 header id={id} style={{ marginTop: 20, marginBottom: 15 }} block>
        {children}
      </Text>
  } else {
    component = <Text big id={id} bold style={{ marginTop: 25, marginBottom: 15 }} block>
        {children}
      </Text>
  }

  return (
    <div className="f-aib f-jcl">
      {component}
      <LinkIcon link={link} />
    </div>
  )

}

const Body = ({ children }) =>
  <Text 
    dangerouslySetInnerHTML={{ __html: children }}
    small 
    block
    book 
    style={{ marginBottom: 21 }}>
  </Text>

const Code = ({ code, language }) =>
  <div style={{ width: "100%", margin: "30px 0" }}>
    <pre>
    <code dangerouslySetInnerHTML={{ __html: code }}
      className={`code-block ${language}`} />
    </pre>
  </div>

const BlogImage = ({ src, subtitle, scrollPosition }) => (
  <ImageDiv>
    <Image src={src} scrollPosition={scrollPosition} />
    { subtitle && <Text 
      style={{ marginBottom: 20 }}
      block 
      book 
      gray8 
      small>{subtitle}</Text> }
  </ImageDiv>
)

class Blogpost extends React.Component {
  renderSection = (section, index) => {
    const { code, header, sub, id, body, image, language, link } = section
    const { scrollPosition } = this.props

    if (header) {
      return <Header id={id} sub={sub} link={link} key={index}>{header}</Header> 
    } else if (body) {
      return <Body key={index}>{body}</Body> 
    } else if (image) {
      const { src, subtitle } = image
      return <BlogImage key={index} src={src} subtitle={subtitle} scrollPosition={scrollPosition}/>
    } else if (code) {
      return <Code code={code} language={language} />
    }
  }

  render() {
    const data = blogPosts[this.props.match.params.postname]

    if (!data) {
      return <NotFound />
    }

    const { date, title, subtitle, content } = data

    return (
      <BlogDiv>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Date>{date}</Date>
        {content.map((section, index) => this.renderSection(section, index))}
      </BlogDiv>
    )
  }
}

export default trackWindowScroll(Blogpost)
