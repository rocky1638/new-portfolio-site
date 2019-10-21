import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Image, Text } from "components";
import books from "booksOverview";

const BooksDiv = styled.div`
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
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;

  img {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 480px) {
  }
`;

class Books extends React.Component {
  renderBooks() {
    return books.map(book => {
      return (
        <Link to={`/books/${book.title}`}>
          <Image noMargin style={{ cursor: "pointer" }} src={book.image} />
        </Link>
      );
    });
  }

  render() {
    return (
      <BooksDiv>
        <Text huge block style={{ marginBottom: 20 }}>
          Books
        </Text>
        <Grid>{this.renderBooks()}</Grid>
      </BooksDiv>
    );
  }
}

export default Books;
