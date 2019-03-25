import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import { Home, Blogposts, Blogpost } from 'scenes'

import { thewaterboys } from 'blogposts'

class App extends Component {
  render() {
    return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blogposts} />
          <Route 
            exact path="/blog/thewaterboys" 
            render={(routeProps) => 
              <Blogpost {...routeProps} data={thewaterboys} />}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
    );
  }
}

export default App;
