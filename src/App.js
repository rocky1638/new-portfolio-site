import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import { Home, Blogposts, Blogpost, Books, NotFound } from "scenes";
import { ScrollToTop, DarkModeToggle } from "components";

const localStorageKey = "rock_zhou_is_dark_mode";
const BackgroundDiv = styled.div`
  min-height: 100vh;
  background-color: ${(props) => (props.theme.isDark ? "black" : "white")};
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dark: JSON.parse(localStorage.getItem(localStorageKey)) || false,
    };
  }

  toggleDarkMode = async () => {
    this.setState({ dark: !this.state.dark });
    localStorage.setItem(localStorageKey, !this.state.dark);
  };

  render() {
    const { dark } = this.state;
    return (
      <ThemeProvider theme={{ ...theme, isDark: dark }}>
        <BrowserRouter>
          <ScrollToTop>
            <BackgroundDiv>
              <DarkModeToggle
                isDarkMode={dark}
                toggleDarkMode={this.toggleDarkMode}
              />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/blog" component={Blogposts} />
                <Route exact path="/blog/:postname" component={Blogpost} />
                <Route exact path="/books" component={Books} />
                <Route exact path="/books/:postname" component={Blogpost} />
                <Route path="*" component={NotFound} />
              </Switch>
            </BackgroundDiv>
          </ScrollToTop>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
