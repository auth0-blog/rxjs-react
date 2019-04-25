import React, { Component } from 'react';
import Auth0 from '../../Auth/Auth';

class Public extends Component {
    render() {
        return (
            <div>
                <button onClick={() => Auth0.signIn()} className="py-6 px-8 text-3xl rounded shadow bg-yellow-lighter hover:bg-yellow-lightest text-yellow-darker">
                    Log In
                </button>
            </div>
        );
    }
}

export default Public;