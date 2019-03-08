import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Auth0 from '../../Auth/Auth';

class Callback extends Component {
  async componentDidMount() {
    await Auth0.handleAuthentication();
    this.props.history.replace('/protected');
  }

  render() {
    return (
      <p>Loading profile...</p>
    );
  }
}

export default withRouter(Callback);