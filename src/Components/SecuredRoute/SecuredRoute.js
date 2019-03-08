import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Auth0 from '../../Auth/Auth';

function SecuredRoute(props) {
    const { component: Component, path, checkingSession } = props;
    return (

        <Route path={path} render={() => {
            if (checkingSession) return <h3 className="text-center">Please Sign In Again</h3>;
            if (!Auth0.isAuthenticated()) {
                Auth0.signIn();
                return <div></div>;
            }
            return <Component />
        }} />

    );
}

export default withRouter(SecuredRoute);