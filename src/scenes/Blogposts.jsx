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

const CategoryText = ({ value, select, categories, selectedCategory }) => {
  const index = categories.findIndex(el => el === value)
  const selected = index === selectedCategory

  return <Text 
    big 
    style={{ 
      cursor: "pointer",
      margin: index === 0 ? "0 10px 0 0" : "0 10px",
      color: selected ? '' : '#868888',
    }}
    onClick={() => select(index)}
  >{ value }</Text>
}

const BlogTypeSelector = (props) => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "25px"}}>
      <CategoryText value="all" {...props} />
      <CategoryText value="projects" {...props} />
      <CategoryText value="experience" {...props} />
      <CategoryText value="other" {...props} />
    </div>
  )
}

class Blogposts extends React.Component { 
  constructor(props) {
    super(props)

    this.state = {
      categories: ["all", "projects", "experience", "other"],
      selectedCategory: 0,
    }
  }

  select = (index) => {
    this.setState({ selectedCategory: index })
  }

  filter = el => {
    const { category } = el

    if (this.state.categories[this.state.selectedCategory] === "all") return true

    return category === this.state.categories[this.state.selectedCategory]
  }

  renderBlogCard = (blogpost, index) => {
    const { title, description, postname, thumbnail } = blogpost

      return (
        <Link to={`/blog/${postname}`} key={index}>
          <BlogCardDiv>
            <ImageDiv>
              <Image 
                style={{ width: "auto", height: "100%" }} 
                noMargin 
                src={thumbnail} />
            </ImageDiv>
            <div style={{ width: "100%" }}>
              <Text big block style={{ marginBottom: 0 }}>{title}</Text>
              <Text gray4 description block>{description}</Text>
            </div>
          </BlogCardDiv>
        </Link>
      )
  }

  render() {
    const { categories, selectedCategory } = this.state
    return (
      <BlogsDiv>
        <Text style={{ marginBottom: 30 }} block ginormous>blog</Text>
        <BlogTypeSelector 
          categories={categories} 
          selectedCategory={selectedCategory} 
          select={this.select}
        />
        {blogPostOverview.filter(this.filter).map((blogpost, index) => this.renderBlogCard(blogpost, index))}
      </BlogsDiv>
    )
  }
}
export default Blogposts
