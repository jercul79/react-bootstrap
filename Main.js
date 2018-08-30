import React from 'react'
import Dashboard from './Dashboard'
import Home from './Home'
import Files from "./Files"
import Signin from "./Signin"
import { Cookies } from 'react-cookie';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

class Main extends React.Component {
  signOut() {
    const cookies = new Cookies();
    cookies.remove ( "apsp-auth" );
    window.location = '/';
  }
  render() {
    //if ( !Cookies.get ("app-auth" ) )
    const cookies = new Cookies();

    if ( !cookies.get ( "apsp-auth" ) )
    {
      return (
        <Signin />
      )
    }
    return (
    <div>
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/home">Company name</a>
        <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" onClick={this.signOut}>Sign out</a>
          </li>
        </ul>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="/dashboard">
                    <span data-feather="home"></span>
                    Dashboard <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/files">
                    <span data-feather="shopping-cart"></span>
                    Files
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/jobs">
                    <span data-feather="users"></span>
                    Jobs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/settings">
                    <span data-feather="users"></span>
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/files" component={Files} />
                <Route path="*">
                  <Redirect from='*' to='/' />
                </Route>
              </Switch>
            </BrowserRouter>
          </main>
        </div>
      </div>
    </div>
  )
}
}

export default Main
