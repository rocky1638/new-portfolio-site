import React from "react";
import styled, { withTheme } from "styled-components";
import { trackWindowScroll } from "react-lazy-load-image-component";
import { Text, BlogpostCard } from "components";
import blogPostOverview from "../blogPostOverview";

const BlogsDivWrapper = styled.div`
  overflow-x: hidden;
  position: relative;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 60px 32px 60px 32px;
  background-color: ${({ theme }) =>
    theme.isDark ? theme.dark.white : theme.light.white};
`;

const BlogDiv = styled.div`
  max-width: ${(props) => props.theme.dimensions.maxWidth}px;
  width: 100%;
  padding: 0;
`;
// const CategoryText = ({ value, select, categories, selectedCategory }) => {
//   const index = categories.findIndex((el) => el === value);
//   const selected = index === selectedCategory;

//   return (
//     <Text
//       big
//       style={{
//         cursor: "pointer",
//         margin: index === 0 ? "0 10px 0 0" : "0 10px",
//         color: selected ? "" : "#868888",
//       }}
//       onClick={() => select(index)}
//     >
//       {value}
//     </Text>
//   );
// };

// const BlogTypeSelector = (props) => {
//   return (
//     <div
//       style={{ display: "flex", alignItems: "center", marginBottom: "25px" }}
//     >
//       <CategoryText value="all" {...props} />
//       <CategoryText value="projects" {...props} />
//       <CategoryText value="exp" {...props} />
//       <CategoryText value="places" {...props} />
//       <CategoryText value="other" {...props} />
//     </div>
//   );
// };

const Blogposts = ({ theme }) => {
  return (
    <BlogsDivWrapper
      className={`f-jcc fadeIn ${theme.isDark ? "bg-dark" : "bg-light"}`}
    >
      <BlogDiv>
        <Text fontWeight={500} style={{ marginBottom: 30 }} block big>
          Rock's Blog
        </Text>
        {/* <BlogTypeSelector
            categories={categories}
            selectedCategory={selectedCategory}
            select={this.select}
          /> */}
        {blogPostOverview.map((blogpost, index) => (
          <BlogpostCard blogpost={blogpost} index={index} />
        ))}
      </BlogDiv>
    </BlogsDivWrapper>
  );
};
export default withTheme(trackWindowScroll(Blogposts));
