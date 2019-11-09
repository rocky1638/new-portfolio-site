import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import { Home, Blogposts, Blogpost, Books, NotFound } from "scenes";
import { ScrollToTop } from "components";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/blog" component={Blogposts} />
              <Route exact path="/blog/:postname" component={Blogpost} />
              <Route exact path="/books" component={Books} />
              <Route exact path="/books/:postname" component={Blogpost} />
              <Route path="*" component={NotFound} />
            </Switch>
          </ScrollToTop>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
