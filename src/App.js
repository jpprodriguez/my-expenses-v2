import React, { Component } from 'react';
import firebase from 'firebase';

import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import 'firebase/auth';

import AppBar from './components/AppBar/AppBar';
import { actions, selectors } from './ducks';
import SignIn from './components/SignIn/SignIn';
import MonitorView from './containers/MonitorView/MonitorView';
import OverlaySpinner from './components/OverlaySpinner/OverlaySpinner';

class App extends Component {
  constructor(props) {
    super(props);
    this.checkAuth.bind(this);
    this.state = {
      isAuthChecked: false
    };
  }

  componentWillMount() {
    this.checkAuth();
  }

  checkAuth = () => {
    firebase.auth().onAuthStateChanged(user => {
      const { props } = this;
      if (user) {
        props.userLoggedIn(true);
      } else {
        props.userLoggedIn(false);
      }
      this.setState({ isAuthChecked: true });
    });
  };

  handleLogOutClick() {
    this.setState({ isAuthChecked: false });
    const { props } = this;
    firebase
      .auth()
      .signOut()
      .then(() => {
        props.userLoggedIn(false);
      });
  }

  render() {
    const { isUserLoggedIn } = this.props;
    const { isAuthChecked } = this.state;
    const app = (
      <AppBar
        onLogOutClick={() => {
          this.handleLogOutClick();
        }}
      >
        <Switch>
          <Route path="/home" component={MonitorView} />
          <Redirect to="/home" />
        </Switch>
      </AppBar>
    );
    const routes = isUserLoggedIn ? (
      app
    ) : (
      <Switch>
        <Route path="/auth" component={SignIn} />
        <Redirect to="/auth" />
      </Switch>
    );

    return isAuthChecked ? routes : <OverlaySpinner />;
  }
}

const mapDispatchToProps = dispatch => ({
  userLoggedIn: newValue => dispatch(actions.userLoggedIn(newValue))
});
const mapStateToProps = state => ({
  isUserLoggedIn: selectors.getIsUserLoggedIn(state)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
