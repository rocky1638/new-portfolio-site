import React from 'react'
import styled from 'styled-components'
import { Text } from 'components'

const BlogDiv = styled.div`
  padding: 30px 20%;

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

class Blogpost extends React.Component {
  renderSection = section => {
    const { header, body, image } = section

    if (header) {
      return <Header>{header}</Header> 
    } else if (body) {
      return <Body>{body}</Body> 
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
