import React from "react";
import styled, { withTheme } from "styled-components";
import hljs from "highlight.js";
import { trackWindowScroll } from "react-lazy-load-image-component";
import { QuoteDiv, Text, Image, BlogDiv } from "components";
import { NotFound } from "scenes";
import blogPosts from "blogposts";
import books from "books";
import { FaExternalLinkAlt } from "react-icons/fa";

const StyledLinkIcon = styled(FaExternalLinkAlt)`
  width: 12px;
  margin-left: 15px;
  margin-right: 3px;
  color: ${({ theme }) => theme.gray8};

  &:hover {
    color ${({ theme }) => theme.gray5}
  }

  @media only screen and (max-width: 768px) {
    margin-left: 10px;
  }
`;

class LinkIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showingText: false,
    };
  }
  onMouseEnter = () => {
    this.setState({ showingText: true });
  };

  onMouseLeave = () => {
    this.setState({ showingText: false });
  };

  render() {
    const { link } = this.props;
    const { showingText } = this.state;
    if (!link) {
      return null;
    }

    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="f-aic" style={{ cursor: "pointer" }}>
          <StyledLinkIcon
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          />
          <Text
            tiny
            gray5
            style={{
              paddingTop: 2,
              transition: "0.5s",
              opacity: showingText ? "1" : "0",
            }}
          >
            Open in Google Maps
          </Text>
        </div>
      </a>
    );
  }
}

const ImageDiv = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

const Title = ({ children }) => (
  <Text fontWeight={600} huge style={{ marginRight: 5 }}>
    {children}
  </Text>
);

const Subtitle = ({ children }) => (
  <Text style={{ marginTop: -5 }} big gray4 block>
    {children}
  </Text>
);

const Date = ({ children }) => (
  <Text block style={{ marginBottom: 30, marginTop: 17.5 }} gray8>
    - {children} -
  </Text>
);

const Header = ({ children, id, sub = false, link }) => {
  let component;
  if (sub) {
    component = (
      <Text
        gray4
        header
        id={id}
        style={{ marginTop: 20, marginBottom: 15 }}
        fontWeight={500}
        block
      >
        {children}
      </Text>
    );
  } else {
    component = (
      <Text big id={id} bold style={{ marginTop: 25, marginBottom: 15 }} block>
        {children}
      </Text>
    );
  }

  return (
    <div className="f-aib f-jcl">
      {component}
      <LinkIcon link={link} />
    </div>
  );
};

const Body = ({ children }) => (
  <Text
    dangerouslySetInnerHTML={{ __html: children }}
    small
    block
    book
    style={{ marginBottom: 21 }}
  />
);

const Code = ({ code, language }) => (
  <div style={{ width: "100%", margin: "30px 0" }}>
    <pre>
      <code className={`${language} nord`}>{code}</code>
    </pre>
  </div>
);

const BlogImage = ({ src, subtitle, scrollPosition }) => (
  <ImageDiv>
    <Image src={src} scrollPosition={scrollPosition} />
    {subtitle && (
      <Text style={{ marginBottom: 20 }} block book gray8 small>
        {subtitle}
      </Text>
    )}
  </ImageDiv>
);

const BlockQuote = ({ quote }) => (
  <QuoteDiv>
    <Text description italic>
      {quote}
    </Text>
  </QuoteDiv>
);

class Blogpost extends React.Component {
  componentDidMount() {
    hljs.initHighlighting.called = false;
    hljs.initHighlighting();
  }

  renderSection = (section, index) => {
    const {
      code,
      blockquote,
      header,
      sub,
      id,
      body,
      image,
      language,
      link,
    } = section;
    const { scrollPosition } = this.props;

    if (header) {
      return (
        <Header id={id} sub={sub} link={link} key={index}>
          {header}
        </Header>
      );
    } else if (body) {
      return <Body key={index}>{body}</Body>;
    } else if (image) {
      const { src, subtitle } = image;
      return (
        <BlogImage
          key={index}
          src={src}
          subtitle={subtitle}
          scrollPosition={scrollPosition}
        />
      );
    } else if (code) {
      return <Code key={index} code={code} language={language} />;
    } else if (blockquote) {
      return <BlockQuote key={index} quote={blockquote} />;
    }
  };

  render() {
    let data = blogPosts[this.props.match.params.postname];

    if (!data) {
      data = books[this.props.match.params.postname];
    }

    if (!data) {
      return <NotFound />;
    }

    const { date, by, title, subtitle, content } = data;
    const { theme } = this.props;

    return (
      <BlogDiv
        className={`fadeUpConstant ${theme.isDark ? "bg-dark" : "bg-light"}`}
      >
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Date>{date || by}</Date>
        {content.map((section, index) => this.renderSection(section, index))}
      </BlogDiv>
    );
  }
}

export default withTheme(trackWindowScroll(Blogpost));
