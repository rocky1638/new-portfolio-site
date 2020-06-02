import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import { ScrollToTop, DarkModeToggle } from "components";
import keys from "keys";

const Home = lazy(() => import("scenes/Home"));
const Blogposts = lazy(() => import("scenes/Blogposts"));
const Blogpost = lazy(() => import("scenes/Blogpost"));
const Books = lazy(() => import("scenes/Books"));
const NotFound = lazy(() => import("scenes/NotFound"));

const BackgroundDiv = styled.div`
  min-height: 100vh;
  background-color: ${(props) => (props.theme.isDark ? "black" : "white")};
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dark: JSON.parse(localStorage.getItem(keys.darkMode)) || false,
    };
  }

  componentWillUnmount() {
    localStorage.removeItem(keys.darkMode);
  }

  toggleDarkMode = async () => {
    this.setState({ dark: !this.state.dark });
    localStorage.setItem(keys.darkMode, !this.state.dark);
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
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/blog" component={Blogposts} />
                  <Route exact path="/blog/:postname" component={Blogpost} />
                  <Route exact path="/books" component={Books} />
                  <Route exact path="/books/:postname" component={Blogpost} />
                  <Route path="*" component={NotFound} />
                </Switch>
              </Suspense>
            </BackgroundDiv>
          </ScrollToTop>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
