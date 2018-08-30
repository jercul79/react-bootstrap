import React from 'react'
import Account from './Account'
import Home from './Home'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
const Content = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/account" component={Account} />
      <Route path="*">
        <Redirect from='*' to='/' />
      </Route>
    </Switch>
    </BrowserRouter>

  )
}

export default Content
