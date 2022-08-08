import React, { useState, useEffect } from "react";
import styled, { withTheme } from "styled-components";
// import toc from "markdown-toc-unlazy";
import ReactMarkdown from "react-markdown";
import { trackWindowScroll } from "react-lazy-load-image-component";
import { QuoteDiv, Text, Image, BlogDiv } from "components";
import { NotFound } from "scenes";

import blogPostOverview from "blogPostOverview";

const StyledReactMarkdown = styled(ReactMarkdown)`
  white-space: pre-wrap;

  ol,
  ul {
    line-height: 0;
    margin-bottom: -8px;
  }

  li {
    font-family: "Inter", "--apple-system", "BlinkMacSystemFont", '"Segoe UI"',
      "Roboto", "Ubuntu", "Cantarell", '"Helvetica Neue"', "sans-serif";
    color: ${(props) =>
      props.theme.isDark
        ? props.gray4
          ? props.theme.dark.gray4
          : props.gray5
          ? props.theme.dark.gray5
          : props.gray8
          ? props.theme.dark.gray8
          : props.theme.dark.black
        : props.gray4
        ? props.theme.light.gray4
        : props.gray5
        ? props.theme.light.gray5
        : props.gray8
        ? props.theme.light.gray8
        : props.theme.light.black};
  }

  .md-h2 {
    margin-top: 24px;
  }

  .md-h3 {
    margin-top: 16px;
    text-decoration: underline;
  }

  pre {
    padding: 8px;
    border-radius: 4px;
    background-color: ${({ theme }) =>
      theme.isDark ? theme.dark.pill : theme.light.pill};

    code {
      background-color: transparent;
      color: ${({ theme }) =>
        theme.isDark ? theme.dark.black : theme.light.black};
    }
  }

  code {
    background-color: ${({ theme }) =>
      theme.isDark ? theme.dark.pill : theme.light.pill};
  }
`;

const BlogDivWrapper = styled.div`
  overflow-x: hidden;
  position: relative;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 120px 32px 120px 32px;
  background-color: ${({ theme }) =>
    theme.isDark ? theme.dark.white : theme.light.white};
`;

const ImageDiv = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

const Title = ({ children }) => (
  <Text fontWeight={600} big>
    {children}
  </Text>
);

const Subtitle = ({ children }) => (
  <Text style={{ marginTop: -5 }} header gray4 block>
    {children}
  </Text>
);

const Date = ({ children }) => (
  <Text block style={{ marginBottom: 32, marginTop: 16 }} gray8>
    - {children} -
  </Text>
);

const BlogImage = ({ src, scrollPosition }) => (
  <ImageDiv>
    <Image src={src} scrollPosition={scrollPosition} />
  </ImageDiv>
);

const BlockQuote = ({ quote }) => (
  <QuoteDiv>
    <Text description italic>
      {quote}
    </Text>
  </QuoteDiv>
);

const Blogpost = (props) => {
  const [markdown, setMarkdown] = useState(null);
  const [error, setError] = useState(null);

  const linkify = (str) => str.replace(/\s+/g, "-").toLowerCase();

  useEffect(() => {
    const getFileData = async () => {
      const path = require(`../static/blogposts/${props.match.params.postname}.md`);
      const response = await fetch(path);
      const text = await response.text();
      // const tocText = toc(text).content;
      setMarkdown(text);
    };
    getFileData().catch((e) => {
      console.error(e);
      setError(true);
    });
  }, [props.match.params.postname]);

  if (error) {
    return <NotFound />;
  }

  const metadata = blogPostOverview.find(
    (obj) => obj.postname === props.match.params.postname
  );
  const { date, by, title, description } = metadata;

  return (
    <BlogDivWrapper
      className={`f-jcc fadeIn ${props.theme.isDark ? "bg-dark" : "bg-light"}`}
    >
      <BlogDiv
        className={`fadeIn ${props.theme.isDark ? "bg-dark" : "bg-light"}`}
      >
        <Title>{title}</Title>
        <Subtitle>{description}</Subtitle>
        <Date>{date || by}</Date>
        <StyledReactMarkdown
          id="markdown-container"
          children={markdown}
          components={{
            p: ({ node, ...props }) => (
              <Text className="md-p" block {...props} />
            ),
            li: ({ node, ...props }) => (
              <li>
                <Text {...props} />
              </li>
            ),
            img: ({ node, ...props }) => <BlogImage {...props} />,
            h2: ({ node, ...props }) => (
              <Text
                id={linkify(props.children[0])}
                className="md-h2"
                header
                block
                bold
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <Text
                id={linkify(props.children[0])}
                className="md-h3"
                bold
                block
                {...props}
              />
            ),
            blockquote: ({ node, ...props }) => <BlockQuote {...props} />,
            // pre: ({ node, ...props }) => <Code {...props} />,
          }}
        />
      </BlogDiv>
    </BlogDivWrapper>
  );
};

export default withTheme(trackWindowScroll(Blogpost));
