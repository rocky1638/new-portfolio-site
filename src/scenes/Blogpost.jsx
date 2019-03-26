import React from 'react'
import styled from 'styled-components'
import { Text, Image } from 'components'

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

  @media only screen and (max-width: 767px) {
    padding: 30px 20px;
  }
`

const Title = ({ children }) => (
    <Text huge style={{ marginRight: 5 }}>{children}</Text>
)

const Subtitle = ({ children }) => 
  <Text style={{ marginTop: -5}} big gray4 block>{children}</Text>

const Date = ({ children }) => 
  <Text block style={{ marginBottom: 20, marginTop: 17.5 }} gray8>- {children} -</Text>

const Header = ({ children }) =>
  <Text header bold style={{ marginTop: 20, marginBottom: 10 }} block>{children}</Text>

const Body = ({ children }) =>
  <Text 
    dangerouslySetInnerHTML={{ __html: children }}
    small 
    block
    book 
    style={{ marginBottom: 10 }}>
  </Text>

const BlogImage = ({ src, subtitle }) => (
  <ImageDiv>
    <Image src={src} />
    <Text 
      style={{ marginBottom: 20 }}
      block 
      book 
      gray8 
      small>{subtitle}</Text>
  </ImageDiv>
)

class Blogpost extends React.Component {
  renderSection = section => {
    const { header, body, image } = section

    if (header) {
      return <Header>{header}</Header> 
    } else if (body) {
      return <Body>{body}</Body> 
    } else if (image) {
      const { src, subtitle } = image
      return <BlogImage src={src} subtitle={subtitle} />
    }
  }

  render() {
    const { data } = this.props
    const { date, title, subtitle, content } = data

    return (
      <BlogDiv>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Date>{date}</Date>
        {content.map(section => this.renderSection(section))}
      </BlogDiv>
    )
  }
}

export default Blogpost
