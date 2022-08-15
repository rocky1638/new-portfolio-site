import React from "react";
import styled, { withTheme } from "styled-components";
import { trackWindowScroll } from "react-lazy-load-image-component";
import { Text, BlogpostCard } from "components";
import blogPostOverview from "../blogPostOverview";

const BooksDivWrapper = styled.div`
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

const BookDiv = styled.div`
  max-width: ${(props) => props.theme.dimensions.maxWidth}px;
  width: 100%;
  padding: 0;
`;

const Blogposts = ({ theme }) => {
  return (
    <BooksDivWrapper
      className={`f-jcc fadeIn ${theme.isDark ? "bg-dark" : "bg-light"}`}
    >
      <BookDiv>
        <Text fontWeight={500} style={{ marginBottom: 30 }} block big>
          Rock's Book Summaries
        </Text>
        <Text block gray4 style={{ marginBottom: 32 }}>
          Writing summaries for books that you read has been shown to help you
          remember them better, so here's the summaries for books that I felt
          were insightful.
        </Text>
        {/* <BlogTypeSelector
            categories={categories}
            selectedCategory={selectedCategory}
            select={this.select}
          /> */}
        {blogPostOverview
          .filter((book) => book.isBook)
          .map((book, index) => (
            <BlogpostCard blogpost={book} index={index} />
          ))}
      </BookDiv>
    </BooksDivWrapper>
  );
};
export default withTheme(trackWindowScroll(Blogposts));
