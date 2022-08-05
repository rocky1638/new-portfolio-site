import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Text } from "components";

const TagDiv = styled.div`
  gap: 4px;
  margin-bottom: 4px;
`;

const Tag = styled.button`
  padding: 0 5px;
  background-color: ${({ theme }) =>
    theme.isDark ? theme.dark.pill : theme.light.pill};
  border-radius: 15px;
  border: none;
  display: inline-flex;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 96px;
  height: 96px;
  margin-right: 16px;
  object-fit: contain;
  object-position: center center;
  background-color: ${({ theme }) =>
    theme.isDark
      ? theme.dark.blockquoteBackground
      : theme.light.blockquoteBackground};
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  height: 100%;
`;

const BlogCardDiv = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  min-height: 100px;
  margin-bottom: 12px;
`;

const BlogpostCard = ({ blogpost }) => {
  const { title, description, postname, thumbnail, date, tags } = blogpost;
  const renderTags = () => {
    if (tags) {
      return tags.map((tag, i) => (
        <Tag index={i}>
          <Text pill>{tag}</Text>
        </Tag>
      ));
    }
  };
  return (
    <Link to={`/blog/${postname}`} style={{ textDecoration: "none" }}>
      <BlogCardDiv>
        <StyledImage alt="thumbnail" src={thumbnail} />
        <RightDiv id="blogpost-card-right-div">
          <div>
            <Text
              header
              style={{
                lineHeight: 1,
                marginBottom: 0,
                marginRight: 6,
                fontWeight: 500,
              }}
            >
              {title}
            </Text>
            <Text style={{ marginBottom: 2 }} block pill gray8>
              Published {date || ""}
            </Text>
            <TagDiv className="f-aic f-jcl">{renderTags()}</TagDiv>
          </div>
          <Text style={{ marginTop: 2 }} gray4 description block>
            {description}
          </Text>
        </RightDiv>
      </BlogCardDiv>
    </Link>
  );
};

export default BlogpostCard;
