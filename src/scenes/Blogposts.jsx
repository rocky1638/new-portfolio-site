import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Text, Image } from 'components'
import blogPostOverview from '../blogPostOverview'

const BlogsDiv = styled.div`
  padding: 30px 25%;

  @media only screen and (max-width: 1100px) {
    padding: 30px 150px;
  }

  @media only screen and (max-width: 768px) {
    padding: 30px 50px;
  }

  @media only screen and (max-width: 480px) {
    padding: 30px 20px;
  }
`

const BlogCardDiv = styled.div`
  display: flex;
  align-items:center;
  width: 100%;
  height: 100px;
  margin-bottom: 30px;

  @media only screen and (max-width: 1100px) {
    margin-bottom: 25px;
  }

  @media only screen and (max-width: 768px) {
    height: 100px;
  }

  @media only screen and (max-width: 480px) {
    margin-bottom: 5px;
  }
`

const ImageDiv = styled.div`
  height: 100%;
  margin-right: 30px;

  @media only screen and (max-width: 768px) {
    margin-right: 20px;
  }

  @media only screen and (max-width: 480px) {
    margin-right: 10px;
  }
`

class Blogposts extends React.Component { 
  renderBlogCard = (blogpost, index) => {
    const { title, description, postname, thumbnail } = blogpost

      return (
        <Link to={`/blog/${postname}`}>
          <BlogCardDiv>
            <ImageDiv>
              <Image style={{ width: "auto", height: "100%" }} noMargin src={thumbnail} />
            </ImageDiv>
            <div style={{ width: "100%" }}>
              <Text big block style={{ marginBottom: 5 }}>{title}</Text>
              <Text gray4 small block>{description}</Text>
            </div>
          </BlogCardDiv>
        </Link>
      )
  }

  render() {
    return (
      <BlogsDiv>
        <Text style={{ marginBottom: 30 }} block ginormous>blog</Text>
        {blogPostOverview.map((blogpost, index) => this.renderBlogCard(blogpost, index))}
      </BlogsDiv>
    )
  }
}
export default Blogposts
