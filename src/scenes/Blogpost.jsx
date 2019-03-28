import React from 'react'
import styled from 'styled-components'
import { Text, Image } from 'components'
import blogPosts from 'blogposts'

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
  <Text style={{ marginTop: -5}} big gray4 block>{children}</Text>

const Date = ({ children }) => 
  <Text block style={{ marginBottom: 30, marginTop: 17.5 }} gray8>- {children} -</Text>

const Header = ({ children }) =>
  <Text header bold style={{ marginTop: 25, marginBottom: 15 }} block>{children}</Text>

const Body = ({ children }) =>
  <Text 
    dangerouslySetInnerHTML={{ __html: children }}
    small 
    block
    book 
    style={{ marginBottom: 21 }}>
  </Text>

const Code = ({ code }) =>
  <div style={{ width: "100%", margin: "30px 0" }}>
    <code className="code-block">
      {code}
    </code>
  </div>

const BlogImage = ({ src, subtitle }) => (
  <ImageDiv>
    <Image src={src} />
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
    const { code, header, body, image } = section

    if (header) {
      return <Header key={index}>{header}</Header> 
    } else if (body) {
      return <Body key={index}>{body}</Body> 
    } else if (image) {
      const { src, subtitle } = image
      return <BlogImage key={index} src={src} subtitle={subtitle} />
    } else if (code) {
      return <Code code={code} />
    }
  }

  render() {
    const data = blogPosts[this.props.match.params.postname]
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

export default Blogpost
