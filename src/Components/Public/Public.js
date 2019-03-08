import React, { Component } from 'react';
import Auth0 from '../../Auth/Auth';

class Callback extends Component {
    render() {

        return (
            <div>
                <button onClick={() => Auth0.signOut()} className="log-button">
                    Log Out
          </button>
                ) : (
            <button onClick={() => Auth0.signIn()} className="log-button">
                    Log In
          </button>
            </div>
        );
    }
}

export default Callback;