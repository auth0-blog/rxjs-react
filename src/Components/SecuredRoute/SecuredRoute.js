import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Auth0 from '../../Auth/Auth';

function SecuredRoute(props) {
    const { component: Component, path, checkingSession } = props;
    return (
        <Route path={path} render={() => {
            if (checkingSession) return <button onClick={() => Auth0.signIn()} className="py-6 px-8 text-3xl rounded shadow bg-yellow-lighter hover:bg-yellow-lightest text-yellow-darker">Log In Again</button>;
            if (!Auth0.isAuthenticated()) {
                Auth0.signIn();
                return <div></div>;
            }
            return <Component />
        }} />

    );
}

export default withRouter(SecuredRoute);