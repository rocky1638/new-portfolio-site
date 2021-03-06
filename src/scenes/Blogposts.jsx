import React from "react";
import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import { trackWindowScroll } from "react-lazy-load-image-component";
import { Text, Image } from "components";
import blogPostOverview from "../blogPostOverview";
import keys from "keys";

const BlogsDiv = styled.div`
  padding: 30px 25%;
  background-color: ${(props) =>
    props.theme.isDark ? props.theme.dark.white : props.theme.light.white};
  min-height: 100vh;

  @media only screen and (max-width: 1100px) {
    padding: 30px 150px;
  }

  @media only screen and (max-width: 768px) {
    padding: 30px 50px;
  }

  @media only screen and (max-width: 480px) {
    padding: 30px 20px;
  }
`;

const BlogCardDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  margin-bottom: 20px;

  @media only screen and (max-width: 1100px) {
    margin-bottom: 25px;
  }

  @media only screen and (max-width: 768px) {
    height: 100px;
  }

  @media only screen and (max-width: 480px) {
    margin-bottom: 5px;
  }
`;

const ImageDiv = styled.div`
  height: 100%;
  margin-right: 30px;

  @media only screen and (max-width: 768px) {
    margin-right: 20px;
  }

  @media only screen and (max-width: 480px) {
    margin-right: 10px;
  }
`;

const CategoryText = ({ value, select, categories, selectedCategory }) => {
  const index = categories.findIndex((el) => el === value);
  const selected = index === selectedCategory;

  return (
    <Text
      big
      style={{
        cursor: "pointer",
        margin: index === 0 ? "0 10px 0 0" : "0 10px",
        color: selected ? "" : "#868888",
      }}
      onClick={() => select(index)}
    >
      {value}
    </Text>
  );
};

const BlogTypeSelector = (props) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "25px" }}
    >
      <CategoryText value="all" {...props} />
      <CategoryText value="projects" {...props} />
      <CategoryText value="exp" {...props} />
      <CategoryText value="places" {...props} />
      <CategoryText value="other" {...props} />
    </div>
  );
};

class Blogposts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: ["all", "projects", "exp", "places", "other"],
      selectedCategory: JSON.parse(localStorage.getItem(keys.category)) || 0,
    };
  }

  select = (index) => {
    this.setState({ selectedCategory: index });
    localStorage.setItem(keys.category, index);
  };

  filter = (el) => {
    const { category } = el;

    if (this.state.categories[this.state.selectedCategory] === "all")
      return true;

    return category === this.state.categories[this.state.selectedCategory];
  };

  renderBlogCard = (blogpost, index) => {
    const { title, description, postname, thumbnail } = blogpost;
    const { scrollPosition } = this.props;

    return (
      <Link
        to={`/blog/${postname}`}
        style={{ textDecoration: "none" }}
        key={index}
      >
        <BlogCardDiv>
          <ImageDiv>
            <Image
              scrollPosition={scrollPosition}
              style={{ width: "auto", height: "100%" }}
              noMargin
              src={thumbnail}
            />
          </ImageDiv>
          <div style={{ width: "100%" }}>
            <Text
              big
              block
              style={{ lineHeight: 1, marginBottom: 0, fontWeight: 500 }}
            >
              {title}
            </Text>
            <Text style={{ marginTop: 2 }} gray4 description block>
              {description}
            </Text>
          </div>
        </BlogCardDiv>
      </Link>
    );
  };

  render() {
    const { categories, selectedCategory } = this.state;
    const { theme } = this.props;
    return (
      <BlogsDiv className={`fadeIn ${theme.isDark ? "bg-dark" : "bg-light"}`}>
        <Text fontWeight={500} style={{ marginBottom: 30 }} block ginormous>
          blog
        </Text>
        <BlogTypeSelector
          categories={categories}
          selectedCategory={selectedCategory}
          select={this.select}
        />
        {blogPostOverview
          .filter(this.filter)
          .map((blogpost, index) => this.renderBlogCard(blogpost, index))}
      </BlogsDiv>
    );
  }
}
export default withTheme(trackWindowScroll(Blogposts));
